# Sinrora 外贸 B2B 独立站 MVP 建设方案

## 🎯 项目定位
本项目为外贸 SOHO 专属的 B2B 独立站 MVP（最小可行性产品）。
考虑到你的核心精力在于 **社媒内容经营** 和 **主动开发客户**，本网站的核心使命是：
1. **建立信任背书**：提供专业的品牌形象展示，让客户觉得你靠谱。
2. **沉淀社媒流量**：作为各社媒平台（TikTok, YouTube, LinkedIn 等）的流量承接阵地。
3. **极简运维**：不需要复杂的电商后台，重点展示核心业务和视频动态。
4. **高效转化**：提供无摩擦的联系方式（WhatsApp 一键直达、邮件询盘）。

## 🚀 MVP 核心页面与功能

### 1. 首页 (Home)
- **首屏 (Hero Section)**：极具冲击力的主视觉，清晰的价值主张 —— 一句话告诉客户“我们能为你解决什么问题”。
- **信任区 (Trust Signals)**：为什么选择我们（专业度、响应速度、品控等）。
- **精选视频展示 (Featured Videos)**：直接嵌入近期的高质量社媒视频或工厂/产品实拍视频。
- **强力引导 (Call to Action)**：引导客户发送询盘或直接 WhatsApp 联系。

### 2. 产品/服务展示页 (Products/Services)
- **核心分类**：按核心产品线或服务类型分类，避免大而全，突出“精”。
- **详情展示**：高质量图片、核心参数、应用场景。
- *(注：MVP 阶段不设复杂的购物车，全部导向“获取报价”)*

### 3. 视频与动态中心 (Video & Updates)
- **视频瀑布流/列表**：集中展示长视频（产品深度解析、探厂）和短视频（日常更新、快节奏展示）。
- **外链集成**：支持直接嵌入 YouTube/TikTok 视频或展示自托管视频，方便社媒内容的二次利用，无需在网站重复上传。

### 4. 关于我们 (About Us)
- **品牌故事**：突出 SOHO 的独特优势（沟通高效、专业专注、灵活度高）。
- **创始人介绍**：拉近与客户的距离，B2B 采购很大程度上是“与人做生意”。

### 5. 联系我们 (Contact Us)
- **询盘表单**：收集客户需求、联系邮箱、公司名。
- **直接联系方式**：WhatsApp（带预设消息的直达链接）、Email、Skype 等。
- **社媒矩阵链接**：引导客户反向关注你的 LinkedIn, YouTube, TikTok。

## 🛠️ 推荐技术栈
为了保证网站的 **极速加载**（对海外客户体验至关重要）、**SEO 友好** 且 **便于后续随时修改**，推荐使用现代前端技术栈：
- **框架**：Next.js (React 框架，支持静态生成，SEO 极佳，打开速度秒开)
- **样式**：Tailwind CSS (快速构建精美、响应式的现代 UI)
- **图标**：Lucide React (简洁专业的现代图标库)
- **部署**：Cloudflare Pages (全球 CDN，完全免费，商用允许，无限带宽) 或 Vercel Pro ($20/月)

## 📅 开发计划 (Roadmap)
- **Step 1**: 项目初始化与基础架构搭建 (Next.js + Tailwind) ✅
- **Step 2**: 全局组件开发 (导航栏、页脚、视频组件、通用按钮) ✅
- **Step 3**: 核心页面开发 (首页、产品页、视频展示页、关于与联系页) ✅
- **Step 4**: 移动端响应式适配 (确保手机端完美体验，因为社媒流量多来自手机) 🔜
- **Step 5**: SEO 基础配置与上线部署 🔜

---

## 🚀 部署方案：最低成本、最高效、最稳定

### 背景分析

本项目是 **纯 B2B 落地页 / 品牌展示站**，不涉及以下功能：
- ❌ 在线支付 / 购物车
- ❌ 用户注册 / 登录
- ❌ 后台 CMS / 数据库
- ❌ 动态内容 / API 接口

核心需求只是 **让海外客户看到公司信息 → 通过 WhatsApp/邮件联系我们**。因此，我们将网站编译为**纯静态 HTML/CSS/JS**（Next.js `output: 'export'`），可部署到任何静态托管平台。

---

### 📊 主流部署平台对比

| 维度 | **Cloudflare Pages** | **Vercel Hobby** | **Vercel Pro** | **Netlify Free** | **GitHub Pages** |
|------|---------------------|-------------------|----------------|-------------------|-------------------|
| **月费** | **$0（免费）** | $0（免费） | $20/月 | $0（免费） | $0（免费） |
| **带宽** | **无限** | 100GB/月 | 1TB/月 | 100GB/月 | 100GB/月 |
| **构建次数** | 500次/月 | 100次/天 | 无限 | 300分钟/月 | 10次/小时 |
| **自定义域名** | ✅ 无限 | ✅ 50个 | ✅ 50个 | ✅ 支持 | ✅ 支持 |
| **商用允许** | ✅ **允许** | ❌ **不允许** | ✅ 允许 | ✅ 允许 | ✅ 允许 |
| **全球 CDN** | ✅ 330+城市 | ✅ 100+城市 | ✅ 100+城市 | ✅ 支持 | ❌ 仅 GitHub |
| **SSL 证书** | ✅ 自动 | ✅ 自动 | ✅ 自动 | ✅ 自动 | ✅ 自动 |
| **Next.js 支持** | ✅ @cloudflare/next-on-pages 或静态导出 | ✅ 原生 | ✅ 原生 | ✅ 支持 | ⚠️ 仅静态 |
| **国内访问** | ⚠️ 一般 | ⚠️ 一般 | ⚠️ 一般 | ❌ 较慢 | ❌ 较慢 |

> 🔴 **关键发现**：Vercel 的 Hobby 免费方案明确禁止商用（Terms of Service 第4条："personal or non-commercial use only"），如果要做 B2B 网站，必须升级到 Pro 方案 $20/月。Cloudflare Pages 免费方案则明确**允许商用**，无任何限制。

---

### 📊 域名注册成本对比

| 注册商 | .com 首年 | .com 续费/年 | WHOIS 隐私 | 免费 SSL | 备注 |
|--------|-----------|-------------|------------|----------|------|
| **Cloudflare Registrar** | ~$10.44 | **~$10.44** | ✅ 免费 | ✅ | **成本价，无加价，最强推荐** |
| **Namecheap** | ~$6.49 | ~$15.88 | ✅ 免费 | ✅ | 首年便宜，续费贵 |
| **Porkbun** | ~$10 | ~$10.72 | ✅ 免费 | ✅ | 性价比高 |
| **GoDaddy** | ~$0.99 | ~$22.19 | ❌ 收费 | ✅ | **首年便宜但续费极贵，不推荐** |
| **阿里云（国际版）** | ~$7 | ~$10 | ✅ 免费 | ✅ | 国内方便管理 |

---

### 🏆 推荐方案

#### 方案 A（首推 ★★★★★）：Cloudflare Pages + Cloudflare Registrar

| 项目 | 费用 |
|------|------|
| **域名** | ~$10.44/年（.com） |
| **托管** | $0（永久免费，无限带宽） |
| **SSL** | $0（自动） |
| **CDN** | $0（330+全球节点） |
| **年总成本** | **≈ $10.44/年（约 ¥76 元）** |

**优点**：
- 真正零运维成本，全免费
- 无限带宽，B2B 站流量再大也不怕
- 全球最快的 CDN 网络之一（330+城市节点）
- Cloudflare 生态集成（可后续添加 DDoS 防护、Analytics、DNS 管理）
- 明确的商用友好条款

**部署方式**：`next build` 后静态导出，一键 Git 推送即可自动部署。

---

#### 方案 B（备选）：Vercel Pro + Namecheap

| 项目 | 费用 |
|------|------|
| **域名** | ~$6.49 首年 / ~$15.88 续费 |
| **托管** | $20/月（Pro 方案） |
| **年总成本** | **≈ $246/年（约 ¥1,800 元）** |

**优点**：Next.js 原生支持最佳，Vercel 是 Next.js 的开发商
**缺点**：成本每年高出方案 A 约 ¥1,700 元，且功能用不上（Pro 主要面向团队协作和商业化 SaaS）

---

#### 方案 C（WordPress 陷阱，不推荐）

很多人用 WordPress 建外贸站，但 WP 有致命问题：
- **慢**：PHP + MySQL，页面加载慢（影响 Google SEO 排名）
- **贵**：虚拟主机 ~$5-15/月 + 主题/插件费用
- **不安全**：全球最大攻击目标，漏洞频发
- **维护重**：需要持续更新 PHP、WordPress、插件、数据库
- **不适合静态展示**：WP 是 CMS 系统，对于不需要后台管理的纯展示站来说太重了

---

### 📋 部署行动计划

1. **注册域名**（推荐 Cloudflare Registrar）
   - 访问 https://www.cloudflare.com/products/registrar/
   - 搜索并注册 `sinrora.com`
   - 成本：~$10.44/年

2. **配置 Next.js 静态导出**
   - 在 `next.config.mjs` 添加 `output: 'export'`
   - 运行 `npm run build`，输出到 `out/` 目录

3. **部署到 Cloudflare Pages**
   - 将代码推送到 GitHub 仓库
   - 在 Cloudflare Pages 中关联 GitHub 仓库
   - 框架预设选择 Next.js（或用静态导出模式直接发布）
   - 绑定自定义域名 `sinrora.com`
   - 自动启用 HTTPS

4. **DNS + SSL 配置**
   - Cloudflare 自动管理 DNS
   - 自动签发 Let's Encrypt 或 Google Trust Services SSL 证书

5. **后续可选增强**
   - Cloudflare Web Analytics（免费隐私友好分析，替代 Google Analytics）
   - Cloudflare DDoS 防护（免费）
   - 邮件转发（免费）

---

## ⚔️ 深度对决：Cloudflare Pages vs GitHub Pages

> 很多人天然认为"代码在 GitHub 上 → 那部署在 GitHub Pages 就行了"，但实际上这两个平台差距巨大，尤其是对 B2B 外贸独立站来说。以下是从官方文档、第三方性能测试、实际使用经验中得出的全面对比。

### 🔴 致命差异：商用合法性

这是 **一票否决** 级别的差异：

**GitHub Pages 官方条款**（[来源：docs.github.com](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)）：

> "GitHub Pages is **not intended for or allowed to be used as a free web-hosting service to run your online business**, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS)."

翻译：GitHub Pages **不允许**用作商业网站。你的 B2B 毛绒玩具独立站——展示产品、收集询盘、引导 WhatsApp 联系——是明确的商业行为。

**Cloudflare Pages 免费方案**：明确允许商用，无任何商业用途限制，广告、产品销售、企业展示均可。

> 注意：GitHub 官方说的是"not intended for or allowed"，不是"我们不推荐"，而是"我们不允许"。虽然 GitHub 很少主动封禁，但条款就是条款，随时可以执行。对于生意来说，这是一颗定时炸弹。

### 📊 全维度对比（基于实测数据）

以下数据来自 [bejamas.com](https://bejamas.com/compare/cloudflare-pages-vs-github-pages) 从全球 15 个地点实测的 CDN 性能数据，以及各平台官方文档。

| 维度 | **Cloudflare Pages** 🏆 | **GitHub Pages** |
|------|------------------------|-------------------|
| **商用合法** | ✅ 明确允许 | ❌ 明确禁止 |
| **全球 CDN 节点** | **330+ 城市** | 极少（以美国为主，亚洲无节点） |
| **月带宽** | **无限** | 100GB（软限制，超额可能封站） |
| **月构建次数** | 500 次 | 10 次/小时（源推模式） |
| **构建超时** | 20 分钟 | 10 分钟 |
| **自定义域名** | ✅ 一键绑定，自动 SSL | ⚠️ 手动配 CNAME，SSL 偶发失效 |
| **SSL 证书** | Google Trust Services 自动签发 | Let's Encrypt 自动签发 |
| **PR 预览部署** | ✅ 自动生成预览链接 | ❌ 不支持 |
| **HTTP/3** | ✅ 支持 | ❌ 不支持 |
| **DDoS 防护** | ✅ 内置企业级防护 | ❌ 无 |
| **Web Analytics** | ✅ 免费隐私友好分析 | ❌ 无 |
| **Edge Functions** | ✅ Cloudflare Workers | ❌ 仅纯静态文件 |
| **自动压缩** | ✅ Brotli + Gzip 自动 | ⚠️ 仅 Gzip |
| **亚洲访问速度** | ⚡ 极快（东京/新加坡/香港有节点） | 🐢 慢（所有请求回美国） |
| **欧洲访问速度** | ⚡ 极快（遍布欧洲节点） | 🐢 较慢（节点稀疏） |
| **即时回滚** | ✅ 一键回滚到任意历史版本 | ❌ 需手动 revert Git |
| **站点大小上限** | 25MB/文件 | 1GB/全站，100MB/文件 |

### 🌍 CDN 性能实测对比

以下为 bejamas.com 从 15 个全球节点测试的 TTFB（Time To First Byte，首字节时间）数据：

| 测试地点 | Cloudflare Pages | GitHub Pages | 差距 |
|---------|-----------------|--------------|------|
| **美西 (us-west-1)** | ~49ms | ~42ms | 接近 |
| **美东 (us-east)** | ~40ms | ~45ms | 接近 |
| **欧洲 (eu-west)** | ~50ms | ~120ms | 🔴 CF快 2.4x |
| **亚太 (ap-southeast)** | ~60ms | ~180ms | 🔴 CF快 3x |
| **南亚 (ap-south)** | ~70ms | ~200ms | 🔴 CF快 2.9x |

> 核心结论：GitHub Pages 的 CDN 节点几乎都在美国。对 B2B 外贸网站来说，你的客户在全球——欧洲客户打开 GitHub Pages 要等 120ms+ TTFB，亚洲客户要等 180-200ms。而 Cloudflare Pages 全球一致快（40-70ms），因为它有 330+ 节点。

### 🎯 按使用场景的推荐

| 场景 | 推荐 | 原因 |
|------|------|------|
| B2B 外贸商业站 | ✅ Cloudflare Pages | GitHub Pages 不允许商用 |
| 开源项目文档 | GitHub Pages | 天然集成，够用 |
| 个人博客 | 两者均可 | 非商业，看偏好 |
| 海外客户为主 | ✅ Cloudflare Pages | 全球 CDN 节点碾压 |
| 需要表单/API | ✅ Cloudflare Pages | Workers 支持后端逻辑 |
| 纯展示不出错就行 | ✅ Cloudflare Pages | 一票否决的商用条款 |

### 🏆 最终敲定

**Cloudflare Pages，毫无悬念。**

原因不是"Cloudflare 更好"（虽然它确实更好），而是 **GitHub Pages 从根本上就不允许商用**。作为一个 B2B 外贸独立站，你不需要担心"会不会被检测到"，而应该直接选择命允许商用的平台。

更何况 Cloudflare Pages 在所有维度上都更强——无限带宽、330+ 全球节点、内置安全防护、自动 HTTP/3、免费 Analytics。而这一切，成本为 $0。

---

## 📖 完整教程：外贸 B2B 独立站从 0 到上线

> 本章节面向**零基础部署小白**，从技术选型原理到一键上线，手把手带你完成整个流程。
> 你也可以把本教程作为知识付费内容在小红书等平台分享，帮助更多想做独立站的外贸 SOHO 同行。

---

### 🔬 第一章：技术选型深度解析

#### 为什么不用 WordPress？

90% 的外贸人建站首选 WordPress，但这恰恰是最大的误区：

| 问题 | WordPress | 我们的方案（Next.js 静态站） |
|------|-----------|---------------------------|
| **工作原理** | 用户访问 → 服务器运行 PHP → 查数据库 → 拼 HTML → 返回 | 用户访问 → CDN 直接返回 HTML 文件 |
| **页面加载** | 1.5–4 秒（需服务端处理） | 0.2–0.5 秒（纯静态文件） |
| **安全风险** | PHP 漏洞 + 插件漏洞 + 数据库注入，全球 43% 网站用 WP = 最大攻击靶子 | 无服务器、无数据库、无可攻击面 |
| **维护成本** | 每月更新 WP核心/主题/插件/PHP/数据库备份 | **零** — 网站是纯 HTML，不存在"过时" |
| **主机费用** | $5–30/月 + 优质主题 $50–200 | **$0**（Cloudflare Pages 永久免费） |
| **SEO 影响** | Google 排名算法中，加载速度是核心指标。WP 站加载慢，排名天然吃亏 | 静态站秒开，Google Core Web Vitals 全绿 |
| **迁移成本** | 搬家 = 导出数据库 + 迁移文件 + 重新配置 | 搬家 = 把 `out/` 文件夹丢到任何平台即可 |

一句话：**WP 是"动态内容管理系统"，而 B2B 展示站根本不需要动态内容。** 用 WP 就像开一辆卡车去买菜——又贵又重又难停。

#### 为什么不用 Wix / Shopify？

| 平台 | 问题 |
|------|------|
| **Wix** | 月费 $16–45，模板僵化，SEO 差，代码臃肿（页面加载 3–6秒），数据无法导出 |
| **Shopify** | 月费 $29–299，本质是电商平台，没有购物需求纯浪费，产品数量少还行但报价型 B2B 用不上 |
| **Squarespace** | 月费 $16–49，模板漂亮但同样代码臃肿，SEO 不如静态站 |

这些平台的共同问题：**按月收费，锁定你的数据，迁移成本极高**。而你只是需要一个展示页，一年几十块钱域名费就够了。

#### 为什么选 Next.js + 静态导出？

Next.js 是 React 框架，核心优势在于它能同时做两件事：

1. **开发时**：完整的 React 开发体验（组件化、TypeScript、热更新），开发效率极高
2. **构建时**：`output: 'export'` 把整个网站"编译"成纯静态 HTML/CSS/JS 文件

这个"编译"过程就是关键——你用现代前端技术写代码，最后得到的是一堆可以直接丢到任何地方就能跑的静态文件。

**类比**：就像你用 Word 写文档（Next.js 开发），最后导出成 PDF（静态 HTML），别人不需要装 Word 就能看。你的网站不需要服务器、不需要 Node.js、不需要数据库——就是一堆文件，放 CDN 上就行。

---

### 🏗️ 第二章：静态导出原理（为什么 `output: 'export'`）

#### 传统网站 vs 静态导出

```
传统网站（WordPress / PHP）：
用户浏览器 → 请求 example.com/about → 服务器运行 PHP → 查数据库 → 
拼 HTML → 返回给浏览器
每一步都消耗服务器算力和时间。

静态导出（Next.js export）：
用户浏览器 → 请求 example.com/about → CDN 直接返回 about.html （0.0x 秒）
没有服务器处理，没有数据库查询。
```

#### 构建过程发生了什么

当执行 `npm run build` 且配置了 `output: 'export'`：

```
1. Next.js 启动构建
2. TypeScript 检查所有代码，确保类型安全
3. 对每个页面路由：
   ├── /        → 生成 out/index.html
   ├── /about   → 生成 out/about.html
   ├── /contact → 生成 out/contact.html
   ├── /products→ 生成 out/products.html
   └── /videos  → 生成 out/videos.html
4. CSS 提取 + 压缩 → out/_next/static/chunks/*.css
5. JavaScript 打包 + 压缩 → out/_next/static/chunks/*.js
6. 生成 404.html 错误页面
7. 输出到 out/ 目录，总共约 200KB–500KB
```

**整个网站就是这些文件**，拷贝到任何 CDN/服务器/对象存储就能运行。不需要 Node.js、不需要 PHP、不需要数据库。

---

### 🚀 第三章：Cloudflare Pages 部署实战

#### 为什么是 Cloudflare Pages（而不是 Vercel）？

这本该是最简单的问题，但因为 Vercel 是 Next.js 的开发商，很多人默认用 Vercel。然而这里有一个巨大的坑：

> ⚠️ **Vercel 的 Hobby（免费）计划在服务条款第 4 条明确写了："personal or non-commercial use only"。**
> 
> B2B 外贸独立站 = 商业行为。如果被 Vercel 检测到，你的站可能被直接关闭。
> 要合法使用 Vercel，必须付 $20/月（Pro 方案）。一年就是 $240（约 ¥1,700）。
>
> **Cloudflare Pages 免费方案明确允许商用，且带宽无限。**

#### Step 1：注册 Cloudflare 账号

1. 打开 https://dash.cloudflare.com/sign-up
2. 用邮箱注册（建议用 Gmail / Outlook，方便海外客户）
3. 验证邮箱后登录

#### Step 2：注册域名（在 Cloudflare Registrar）

> 也可以在 Namecheap / Porkbun 买域名，然后 DNS 托管到 Cloudflare。两种方式都可以，最终效果一样。

**方式一：在 Cloudflare 直接买（推荐）**
1. 登录 Cloudflare Dashboard
2. 左侧菜单 → **Registrar** → **Register Domains**
3. 搜索你想要的域名（如 `sinrora.com`）
4. 加入购物车 → 结账（约 $10.44/年）
5. Cloudflare 自动帮你配好 DNS + SSL，什么都不用管

**方式二：在其他平台买，DNS 转过来**
1. 在 Namecheap / Porkbun 搜索并购买域名
2. 回到 Cloudflare → **Websites** → **Add a site**
3. 输入你的域名 → 选择 Free 方案
4. Cloudflare 会给你两个 DNS 服务器地址（如 `adam.ns.cloudflare.com`）
5. 回到你的域名注册商，把 DNS 服务器（Nameserver）改为 Cloudflare 提供的那两个
6. 等待 DNS 生效（一般几分钟到几小时）

> **为什么要把 DNS 放 Cloudflare？** 因为 Cloudflare 是全球最强的 DNS + CDN + 安全一体化平台。域名在其他地方买无所谓，但 DNS 一定要用 Cloudflare 管。免费 DDoS 防护、免费 SSL、免费 CDN 全自动。

#### Step 3：把代码推送到 GitHub

1. 在 GitHub 新建一个仓库（Public 或 Private 都可以，推荐 Private）
   - 仓库名随意，如 `sinrora-website`
2. 回到本地代码目录，执行：

```bash
# 初始化 Git（如果还没做）
git init
git add .
git commit -m "initial commit: sinrora plush toy B2B website"

# 关联远程仓库并推送
git remote add origin https://github.com/你的用户名/sinrora-website.git
git branch -M main
git push -u origin main
```

#### Step 4：在 Cloudflare Pages 创建项目

1. 登录 Cloudflare Dashboard → 左侧菜单 **Workers & Pages**
2. 点击 **Pages** 标签 → **Create a project** → **Connect to Git**
3. 授权 Cloudflare 访问你的 GitHub → 选择 `sinrora-website` 仓库
4. **构建配置**：

| 配置项 | 值 | 说明 |
|--------|-----|------|
| Production branch | `main` | 推送到 main 分支自动部署 |
| Framework preset | **Next.js** | Cloudflare 会自动检测 |
| Build command | `npx @cloudflare/next-on-pages@latest` （或用 `npm run build`） | 构建命令 |
| Build output directory | `out` | 静态导出输出目录 |

5. 点击 **Save and Deploy**

> 💡 Cloudflare Pages 现在原生支持 Next.js 静态导出。它会自动检测到你的 `next.config.mjs` 中有 `output: 'export'`，构建后取 `out/` 目录部署。

#### Step 5：绑定自定义域名

1. 项目部署成功后，进入项目 → **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名：`sinrora.com`（不要带 www）
4. Cloudflare 自动完成 DNS 配置 + SSL 证书签发
5. 勾选 **Redirect `www.sinrora.com` to `sinrora.com`**（把带 www 的也跳转到主域名）
6. 等待 1-5 分钟，SSL 证书激活后，网站即可通过 https://sinrora.com 访问

#### Step 6：验证部署

部署完成后：
1. 打开 `https://sinrora.com` 确认网站正常显示
2. 检查浏览器地址栏是否有 🔒 锁标志（HTTPS 已启用）
3. 用手机浏览器打开，确认移动端显示正常
4. 用 Google PageSpeed Insights 测试速度：https://pagespeed.web.dev/

预期结果：桌面端 95-100 分，移动端 85-95 分（静态站天然高分）。

#### 后续更新流程

当你需要修改网站内容时，工作流极简：

```bash
# 1. 本地修改代码
# 2. 本地预览确认
npm run dev

# 3. 构建检查
npm run build

# 4. 提交推送
git add .
git commit -m "更新了产品描述"
git push

# 5. Cloudflare Pages 自动检测到 Git 推送 → 自动构建 → 自动部署
# 整个过程约 2-5 分钟，你不需要碰服务器。
```

---

### 🛡️ 第四章：免费附加功能（全部零成本）

以下功能全是 Cloudflare 免费提供的，不需要额外付费：

| 功能 | 说明 | 在哪里开启 |
|------|------|-----------|
| **SSL 证书** | 自动签发，HTTPS 加密 | 默认已开 |
| **DDoS 防护** | 防御恶意流量攻击 | 默认已开 |
| **Web Analytics** | 统计访问量、来源、国家，隐私友好（不像 Google Analytics 那样收集用户指纹） | Cloudflare Dashboard → Analytics |
| **DNS 管理** | 全球最快 DNS 解析 | 默认已开 |
| **邮件转发** | 把 `inquiry@sinrora.com` 的邮件转发到你的 Gmail/QQ 邮箱 | Cloudflare → 域名 → Email Routing |
| **缓存规则** | 静态文件缓存到全球 330+ 节点，第二次访问几乎 0 延迟 | 默认已开 |
| **自动压缩** | HTML/CSS/JS 自动 Brotli 压缩，体积再减小 60-70% | 默认已开 |

---

### 🎓 第五章：为什么这套方案适合做知识付费

1. **市场空白**：外贸圈 90% 的建站教程都围绕 WordPress，而 WP 正是"又贵又慢又难维护"的方案。一套"年成本 ¥76、零运维、秒开"的替代方案有巨大信息差红利。

2. **内容可复用**：本文档可作为教程基础，你可以拆成系列内容发小红书：
   - 《外贸独立站一年只要76块？90%的人不知道的方案》
   - 《为什么我不推荐WordPress建外贸站》
   - 《Next.js静态站 vs WordPress：加载速度差10倍》
   - 《手把手：Cloudflare Pages 免费部署外贸站》

3. **技术差异化**：市面上教 Wordpress/Wix/Shopify 的人太多了，教"Next.js 静态站 + 免费部署"的人几乎为零。红海 vs 蓝海。

4. **服务延伸**：除了卖教程，还可以提供：
   - 代建站服务（因为模板已做好，复制改内容即可，效率极高）
   - 网站维护套餐（但其实基本不需要维护——这就是卖点）
   - 定制化开发（功能更复杂的客户）

---

> **总结一句话**：用 Next.js 把网站"编译"成静态 HTML 文件 → 丢到 Cloudflare Pages（永久免费 + 全球 CDN + 无限带宽）→ 域名 $10/年。**年成本 ¥76，零服务器、零数据库、零维护、秒开。** 外贸 B2B 独立站本该如此简单。
