(() => {
    const SW_STATUS = {
        UNINSTALLED: 0,
        INTERRUPTED: 1,
        INSTALLED: 2,
        ACTIVATED: 3
    };

    const LOCAL_STORAGE_KEY = 'ChenBlogHelper_Set';

    // 检查并注册 Service Worker
    const registerServiceWorker = async () => {
        if (!('serviceWorker' in navigator)) {
            return;
        }

        const currentStatus = Number(localStorage.getItem(LOCAL_STORAGE_KEY)) || 0;

        // 如果是首次安装,中断当前页面加载
        if (currentStatus < SW_STATUS.INTERRUPTED) {
            localStorage.setItem(LOCAL_STORAGE_KEY, SW_STATUS.INTERRUPTED);
            window.stop();
            document.documentElement.innerHTML = '';
        }

        try {
            // 注册 Service Worker,使用时间戳确保更新
            await navigator.serviceWorker.register(`/sw.js?time=${Date.now()}`);

            // 如果未完成安装,等待激活后刷新页面
            if (currentStatus < SW_STATUS.INSTALLED) {
                setTimeout(() => {
                    localStorage.setItem(LOCAL_STORAGE_KEY, SW_STATUS.INSTALLED);
                    window.location.reload();
                }, 500);
            }
        } catch (error) {
            console.error('Service Worker 注册失败:', error);
        }
    };

    // 执行注册
    registerServiceWorker();
})();