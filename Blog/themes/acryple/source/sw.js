const CONFIG = {
    CACHE_NAME: 'ICDNCache',
    UPDATE_INTERVAL: 60 * 1000,
    STARTUP_DELAY: 5000,
    TARGET_DOMAIN: 'yumetsuki.moe',
    DEFAULT_VERSION: 'latest'
};

let cachelist = [];
self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CONFIG.CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cachelist);
            })
    );
});
self.addEventListener('fetch', async event => {
    try {
        event.respondWith(handle(event.request))
    } catch (err) {
        console.error('Fetch error:', err);
        if (fullpath(urlPath).indexOf(".html") !== -1) {
            event.respondWith(fetch("/404.html"))
        } else {
            event.respondWith(handleerr(event.request, err.message))
        }
    }
});
const handleerr = async (req, msg) => {
    return new Response(`<h1>CDN分流器遇到了致命错误</h1>
    <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
}
const lfetch = async (urls, url) => {
    let controller = new AbortController();
    const PauseProgress = async (res) => {
        return new Response(await (res).arrayBuffer(), { status: res.status, headers: res.headers });
    };
    if (!Promise.any) {
        Promise.any = function (promises) {
            return new Promise((resolve, reject) => {
                promises = Array.isArray(promises) ? promises : []
                let len = promises.length
                let errs = []
                if (len === 0) return reject(new AggregateError('All promises were rejected'))
                promises.forEach((promise) => {
                    promise.then(value => {
                        resolve(value)
                    }, err => {
                        len--
                        errs.push(err)
                        if (len === 0) {
                            reject(new AggregateError(errs))
                        }
                    })
                })
            })
        }
    }
    return Promise.any(urls.map(urls => {
        return new Promise((resolve, reject) => {
            fetch(urls, {
                signal: controller.signal
            })
                .then(PauseProgress)
                .then(res => {
                    if (res.status == 200) {
                        controller.abort();
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
        })
    }))
}
const fullpath = (path) => {
    path = path.split('?')[0].split('#')[0]
    if (path.match(/\/$/)) {
        path += 'index'
    }
    if (!path.match(/\.[a-zA-Z]+$/)) {
        path += '.html'
    }
    return path
}
const generate_blog_urls = (packagename, blogversion, path) => {
    const npmmirror = [
        // `https://unpkg.zhimg.com/${packagename}@${blogversion}`,
        // `https://npm.elemecdn.com/${packagename}@${blogversion}`,
        // `https://cdn1.tianli0.top/npm/${packagename}@${blogversion}`,
        // `https://cdn.afdelivr.top/npm/${packagename}@${blogversion}`,
        // `https://ariasakablog.s3.ladydaily.com`,
        // `https://registry.npmmirror.com/${packagename}/${blogversion}/files`,
        `https://cdn.cbd.int/${packagename}@${blogversion}`
    ]
    for (var i in npmmirror) {
        npmmirror[i] += path
    }
    return npmmirror
}
const mirror = [
    // `https://registry.npmmirror.com/ariasakablog/latest`,
    // `https://registry.npmjs.org/ariasakablog/latest`,
    // `https://registry.npmmirror.com/q78kgblog/latest`,
    // `https://cdn.cbd.int/q78kgblog`,
    `https://mirrors.cloud.tencent.com/npm/q78kgblog/latest`
]
const get_newest_version = async (mirror) => {
    return lfetch(mirror, mirror[0])
        .then(res => res.json())
        .then(res => res.version)
}
self.db = { //全局定义db,只要read和write,看不懂可以略过
    read: (key, config) => {
        if (!config) { config = { type: "text" } }
        return new Promise((resolve, reject) => {
            caches.open(CONFIG.CACHE_NAME).then(cache => {
                cache.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
                    if (!res) resolve(null)
                    res.text().then(text => resolve(text))
                }).catch(() => {
                    resolve(null)
                })
            })
        })
    },
    write: (key, value) => {
        return new Promise((resolve, reject) => {
            caches.open(CONFIG.CACHE_NAME).then(function (cache) {
                cache.put(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`), new Response(value));
                resolve()
            }).catch(() => {
                reject()
            })
        })
    }
}

const set_newest_version = async (mirror) => { //改为最新版本写入数据库
    return lfetch(mirror, mirror[0])
        .then(res => res.json()) //JSON Parse
        .then(async res => {
            await db.write('blog_version', res.version) //写入
            return;
        })
}

setInterval(async () => {
    await set_newest_version(mirror) //定时更新,一分钟一次
}, CONFIG.UPDATE_INTERVAL);

setTimeout(async () => {
    await set_newest_version(mirror)//打开五秒后更新,避免堵塞
}, CONFIG.STARTUP_DELAY)

// 缓存文件类型映射
const MIME_TYPES = {
    'html': 'text/html',
    'htm': 'text/html',
    'js': 'text/javascript',
    'css': 'text/css',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'ico': 'image/x-icon',
    'png': 'image/png'
};

function getFileType(fileName) {
    const suffix = fileName.split('.').pop().toLowerCase();
    return MIME_TYPES[suffix] || 'text/plain';
}

const handle = async (req) => {
    const urlObj = new URL(req.url);
    const { pathname: urlPath, hostname: domain } = urlObj;

    if (domain === CONFIG.TARGET_DOMAIN) {
        try {
            const version = await db.read('blog_version') || CONFIG.DEFAULT_VERSION;
            const urls = generate_blog_urls('q78kgblog', version, fullpath(urlPath));

            // 添加错误检查
            if (!urls || urls.length === 0) {
                throw new Error('无效的资源URL');
            }

            const res = await lfetch(urls);
            if (!res) {
                throw new Error('资源获取失败');
            }

            const buffer = await res.arrayBuffer();
            const fileName = fullpath(urlPath).split("/").pop().split("\\").pop();

            return new Response(buffer, {
                headers: {
                    "Content-Type": `${getFileType(fileName)};charset=utf-8`
                }
            });
        } catch (err) {
            console.error('Resource fetch error:', err);
            return handleerr(req, `资源加载失败: ${err.message}`);
        }
    }
    return fetch(req);
}
