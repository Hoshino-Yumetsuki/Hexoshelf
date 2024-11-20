---
title: Obsidian 插件：Abbrlink——让你的编辑器和博客融合得更紧密
date: 2024-11-20
tags:
  - Hexo
  - Obsidian
  - Abbrlink
  - 短链接
  - 永久链接
  - 编辑器
  - Markdown
cover: https://img-r2.yumetsuki.moe/q78kg/123999871_p0.webp
categories: 技术分享
abbrlink: 1ee472c8
---

经常折腾 Hexo 的朋友们肯定都知道 Abbrlink 这个东西。<del>不知道也没关系，现在就知道了</del>它的作用是为博客的每篇文章生成一个永久链接。在长期以来的使用中，我发现 Hexo 现在的 Abbrlink 插件已经无法满足我的需求。所以，[适用于 Obsidian 的 Abbrlink 插件](https://github.com/Hoshino-Yumetsuki/obsidian-plugin-abbrlink)诞生了。它有效的解决了几个槽点。

## 解决槽点 1：无法满足一个编辑器同时管理多个博客仓库和需要手动添加

因为我有多个写作站，所以 \_posts 文件夹是游离于 Hexo 本体文件夹之外的，通过 Obsidian 来统一管理所有文章， Github Action 集成部署时复制文章到 Hexo 目录下生成博客。此时出现了一个问题，Hexo 的 Abbrlink 插件依赖于 Hexo 本体运行，它的运行逻辑为当运行 hexo g 或者 hexo s 时给 frontmatter 中没有 abbrlink 的文章添加 abbrlink。然而我的 \_posts 在 Hexo 本体之外，自然无法让 Hexo 的插件自动为文章加上 Abbrlink。有两个选择：手动瞎打一个 Abbrlink 添加到 frontmatter 中和手动生成 sha256 插入到 frontmatter 中。很显然，这两个方式都是极为痛苦的。

该插件与 Obsidian 编辑器深度集成，支持在新建文章时自动插入，同时也支持为原来没有 Abbrlink 的文章添加 Abbrlink。有效的解决了手动添加的头疼问题。

## 解决槽点 2：可能存在的 Abbrlink 冲突问题

记得糖果屋群里有小伙伴说过，Hexo 的 Abbrlink 在文章多的时候会出现 Abbrlink 冲突的问题，导致链接标记的的是一篇文章，而实际上访问的是另外一篇文章。

如两个文章的 Abbrlink 都是 `2b89093e`，这时就会出现链接冲突。

这个插件在生成链接时默认使用的是文件名的 sha256 前八位摘要，在生成时自动检查是否存在相同的链接，如果存在冲突，则放弃生成的链接，改用随机生成模式再次生成，最大程度上确保 Abbrlink 的唯一性。

## 解决槽点 3：Hexo 的 Abbrlink 生成过慢

Hexo 的 Abbrlink 生成依赖 hexo 的两条生成命令，如果在主题复杂或者博客文章多的情况下生成速度缓慢。

在编写插件时，我针对多文章的场景进行了一些优化，确保了生成时的性能最大化。<del>虽然在 Obsidian 里生成本来就不慢</del>

## 总而言之

总而言之，没有总而言之，自从用了此插件，我就一直用此插件。
