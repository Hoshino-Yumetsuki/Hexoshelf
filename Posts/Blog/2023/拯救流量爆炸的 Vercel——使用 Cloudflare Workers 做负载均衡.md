---
title: 拯救流量爆炸的 Vercel——使用Cloudflare Workers做负载均衡
categories: 技术分享
tags:
  - Cloudflare
  - Hexo
  - 日常
  - Vercel
  - 负载均衡
  - 谷歌翻译
  - Workers
cover: https://img-r2.yumetsuki.moe/q78kg/MXP1xJAnYDlLGWT.webp
date: 2023-09-17 00:00:00
swiper_index: 3
abbrlink: ad884987
---

## 事情起因

这两天，把我的某个网站的评论系统换成了 Twikoo，过了几天一看，因为网站访问量比较高（日 2k+），Vercel 的云函数使用量直接爆炸

![](https://img-r2.yumetsuki.moe/q78kg/appendix/6f3c565b/1.webp)
我这一想，嘶~这到时候 Vercel 给我封了咋整。随即，我就开始查找相关负载均衡的资料。因为我之前完全没有做过这方面的功课，所以光是查资料就用了半天。瞎找半天，发现结果 Cloudflare 支持基于 DNS 的负载均衡方案，但是我定睛一看，只有 A 记录和 AAAA 记录支持，各种云函数平台基本上都是 CNAME 的，这可难办啊。

再看 Cloudflare 的动态负载均衡方案，5 刀，死贵，当即放弃。

## 一线曙光

当我在吃饭的时候，突然想到 Cloudflare 有 Workers 这个功能，那我是不是可以去薅 cf 的羊毛呢？

Cloudflare Workers 每天有 100k 次的请求次数，对于我这种每天全站最大请求次数只有 31k 的小站足够了，何况我目前要分流的仅仅是一个 Twikoo！

## 解决方案

于是乎，我当即就让一个朋友<del>（无中生友）</del>帮我写了 Workers 代码。这个代码能够将发送到 Workers 的流量根据权重分流到不同的 URL。（是的你没听错，它甚至支持配置权重！）

下面是完整代码

```js
// 要分流的url，支持添加多条url
const TARGETS = ["https://example1.com", "https://example2.com"]
// url权重，数字一样就是对半分
const WEIGHTS = [5, 5]

async function handleRequest(request) {
  let random = Math.random()
  let sum = WEIGHTS.reduce((a, b) => a + b, 0)
  random = random * sum
  let target = null
  let acc = 0
  for (let i = 0; i < TARGETS.length; i++) {
    acc += WEIGHTS[i]
    if (random < acc) {
      target = TARGETS[i]
      break
    }
  }
  let url = new URL(request.url)
  let targetUrl = new URL(target)
  url.protocol = targetUrl.protocol
  url.hostname = targetUrl.hostname
  url.pathname = targetUrl.pathname
  url.search = targetUrl.search
  url.hash = targetUrl.hash
  let newRequest = new Request(url, request)
  return await fetch(newRequest)
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

```
