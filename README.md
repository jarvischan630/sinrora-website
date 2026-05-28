# Sinrora 外贸 B2B 独立站 MVP 建设方案

## 🎯 项目定位
本项目为外贸 SOHO 专属的 B2B 独立站 MVP（最小可行性产品），当前品类为 **雪茄配件（Cigar Humidors & Cases）**。
核心使命：
1. **建立信任背书**：提供专业的品牌形象展示，让客户觉得你靠谱。
2. **沉淀社媒流量**：作为各社媒平台（TikTok, YouTube, LinkedIn 等）的流量承接阵地。
3. **极简运维**：不需要复杂的电商后台，重点展示核心业务和视频动态。
4. **高效转化**：提供无摩擦的联系方式（WhatsApp 一键直达、邮件询盘）。

---

## 🎨 当前品类：雪茄配件（Cigar Accessories）

### 产品线
| 产品分类 | 英文名 | 价格区间 | MOQ |
|---------|--------|---------|-----|
| 桌面保湿盒 | Desktop Humidors | $25 - $85 | 20 pcs |
| 旅行保湿盒 | Travel Humidors | $15 - $45 | 20 pcs |
| 保湿柜 | Cabinet Humidors | $200 - $4,000 | 2-5 pcs |
| 真皮雪茄套 | Leather Cases | $8 - $35 | 30 pcs |
| 铝管 | Aluminum Tubes | $3 - $12 | 50 pcs |
| PU雪茄套 | PU Leather Cases | $3 - $10 | 50 pcs |
| 定制刻字款 | Custom Engraved | $12 - $150 | 20-30 pcs |
| 雪茄配件 | Accessories (Cutters/Lighters/Ashtrays) | $5 - $35 | 30-50 pcs |

### 配色方案
雪茄行业面向高净值成熟男性客户，采用沉稳绅士奢华风格：

| 变量名 | 色值 | 用途 | 灵感来源 |
|--------|------|------|---------|
| `--color-primary` | `#5C3D2E` | 主色（按钮、标题） | 西班牙雪松木、胡桃木 |
| `--color-primary-dark` | `#3E2723` | 深主色（渐变终点） | 深棕巧克力 |
| `--color-primary-light` | `#D7CCC8` | 浅主色（背景、边框） | 木纹浅色 |
| `--color-accent` | `#C9A96E` | 强调色（标签、图标） | 雪茄环标、黄铜五金 |
| `--color-accent-light` | `#E8D5B0` | 浅强调色（悬浮背景） | 羊皮纸、金箔 |
| `--color-secondary` | `#1A1A1A` | 深色背景（页脚） | 雪茄吧暗调 |
| `--color-bg-light` | `#FAF6F0` | 浅底色 | 奶油白信封 |
| `--color-bg-dark` | `#1B3A2D` | 辅助色 | 烟叶墨绿 |

### 字体
- **标题**：Playfair Display（古典衬线体，绅士奢华感）
- **正文**：Poppins（现代无衬线体，清晰易读）

---

## 🚀 MVP 核心页面与功能

### 1. 首页 (Home)
- Hero区：Protect Your Cigars in Style
- 产品展示：8款核心雪茄配件
- 分类卡片：Cigar Humidors / Cigar Cases / Custom Engraved
- Why Choose Us：Spanish Cedar Expert / Low MOQ / 7-Day Sampling / 10+ Factory Network
- How We Work：5步流程
- 工厂介绍：10+ Factory Network
- 认证展示：FSC / ISO 9001 / SGS / Eco-Friendly / Sustainable / BSCI
- CTA：Ready to Build Your Cigar Brand?

### 2. 产品页 (Products)
- 分类筛选：All / Cigar Humidors / Cigar Cases & Tubes / Custom Engraved / Humidor Cabinets / Cigar Accessories
- 12款产品展示，含价格区间、MOQ、特性标签
- 自定义产品询盘入口

### 3. 定制流程页 (How To Customize)
- 6步定制流程
- 4种服务模式：OEM / ODM / Private Label / Custom Engraving
- 6个常见问题FAQ

### 4. 关于我们 (About Us)
- 品牌故事：From Workshop to Global Network
- 数据统计：10+ Factories / 80+ Countries / 500+ Projects / 15+ Years
- 核心价值观：Quality First / Sustainable Sourcing / Craftsmanship / Global Standards
- 发展历程时间线：2009-2024

### 5. 联系我们 (Contact Us)
- 询盘表单（产品类型选择已适配雪茄配件）
- 快速联系方式：Email / Phone / WhatsApp
- 办公地址 & 营业时间

### 6. 博客 (Blog)
- 分类：All / Industry Insights / Product Guide / Brand Stories / Manufacturing
- 6篇雪茄行业相关博客文章

---

## 🛠️ 技术栈
- **框架**：Next.js 16 (React, 静态导出 `output: 'export'`)
- **样式**：Tailwind CSS v4 (自定义主题变量)
- **图标**：Lucide React
- **字体**：Google Fonts (Playfair Display + Poppins)
- **部署**：Cloudflare Pages (免费, 无限带宽, 全球CDN, 商用允许)

---

## 📁 项目目录结构

```
Sinrora-Website/
├── src/
│   ├── app/
│   │   ├── globals.css          # 全局样式 & 主题色变量
│   │   ├── layout.tsx           # 根布局 (Header + Footer)
│   │   ├── page.tsx             # 首页
│   │   ├── about/page.tsx       # 关于我们
│   │   ├── blog/page.tsx        # 博客
│   │   ├── contact/page.tsx     # 联系我们
│   │   ├── how-to-customize/page.tsx  # 定制流程
│   │   └── products/page.tsx    # 产品页
│   └── components/
│       └── layout/
│           ├── Header.tsx       # 导航栏 (含下拉菜单)
│           └── Footer.tsx       # 页脚
├── public/                      # 静态资源目录 ★
│   ├── images/
│   │   ├── hero/               # 首页大图
│   │   ├── products/           # 产品图片
│   │   ├── factory/            # 工厂实拍
│   │   ├── certifications/     # 认证证书
│   │   ├── about/              # 关于我们
│   │   └── blog/               # 博客配图
│   └── videos/                  # 视频
├── next.config.mjs              # Next.js 配置
├── package.json
└── README.md
```

---

## 🖼️ 图片与视频使用指南

### 目录说明

所有图片和视频文件放在 `public/` 目录下，构建后会被直接复制到输出目录。

```
public/
├── images/
│   ├── hero/               → 首页 Hero 区域背景图
│   ├── products/           → 产品展示图片
│   ├── factory/            → 工厂/车间实拍图
│   ├── certifications/     → 认证证书扫描件
│   ├── about/              → 关于我们页面配图
│   └── blog/               → 博客文章封面图
└── videos/                  → 产品/工厂展示视频
```

### 图片命名规范

```
产品图片：  products/humidor-desktop-01.jpg
           products/leather-case-3finger.jpg
           products/cabinet-humidor-large.jpg

工厂图片：  factory/workshop-cedar.jpg
           factory/production-line.jpg
           factory/quality-control.jpg

认证图片：  certifications/iso9001.jpg
           certifications/fsc-certificate.jpg

Hero图片：  hero/cigar-humidor-banner.jpg

博客图片：  blog/spanish-cedar-guide.jpg
           blog/market-trends-2025.jpg
```

### 图片规格建议

| 用途 | 推荐尺寸 | 格式 | 文件大小 |
|------|---------|------|---------|
| Hero 大图 | 1920×1080px | WebP / JPG | < 200KB |
| 产品卡片 | 800×800px | WebP / JPG | < 80KB |
| 工厂实拍 | 1200×800px | WebP / JPG | < 100KB |
| 博客封面 | 1200×675px | WebP / JPG | < 80KB |
| 认证证书 | 600×400px | PNG / JPG | < 50KB |

> **压缩工具推荐**：
> - 在线：https://squoosh.app （Google 出品，免费，支持 WebP 转换）
> - 批量：TinyPNG / ImageOptim
> - 命令行：`npx sharp-cli --input "public/images/**/*.jpg" --output public/images --format webp`

### 在代码中引用图片

**方式一：使用 Next.js Image 组件（推荐）**

```tsx
import Image from "next/image";

<Image
  src="/images/products/humidor-desktop-01.jpg"
  alt="Desktop Cedar Humidor"
  width={800}
  height={800}
  className="rounded-[20px] object-cover"
/>
```

**方式二：使用普通 img 标签**

```tsx
<img
  src="/images/products/humidor-desktop-01.jpg"
  alt="Desktop Cedar Humidor"
  className="rounded-[20px]"
/>
```

**方式三：CSS 背景图**

```tsx
<div
  className="bg-cover bg-center rounded-[20px]"
  style={{ backgroundImage: "url('/images/hero/cigar-humidor-banner.jpg')" }}
/>
```

### 替换当前 Emoji 占位为真实图片

当前产品卡片、分类卡片等区域使用 Emoji 作为占位符。替换步骤：

1. 将产品图片放入 `public/images/products/` 目录
2. 在对应页面的数据数组中，将 `emoji` 字段替换为 `image` 字段：

```tsx
// 之前（Emoji 占位）
{ name: "Desktop Cedar Humidors", emoji: "🪵", ... }

// 之后（真实图片）
{ name: "Desktop Cedar Humidors", image: "/images/products/humidor-desktop-01.jpg", ... }
```

3. 在 JSX 中将 Emoji 渲染替换为 Image 组件：

```tsx
// 之前
<div className="... text-6xl">{product.emoji}</div>

// 之后
<Image src={product.image} alt={product.name} width={800} height={800} className="object-cover w-full h-full" />
```

### 视频使用方式

**方式一：HTML5 Video 标签（自托管）**

将视频文件放入 `public/videos/` 目录，然后在代码中引用：

```tsx
<video
  src="/videos/factory-tour.mp4"
  controls
  className="w-full rounded-[20px]"
  poster="/images/factory/workshop-cedar.jpg"
>
  Your browser does not support the video tag.
</video>
```

**方式二：嵌入 YouTube 视频（推荐，省流量）**

```tsx
<iframe
  src="https://www.youtube.com/embed/你的视频ID"
  title="Factory Tour"
  className="w-full aspect-video rounded-[20px]"
  allowFullScreen
/>
```

**方式三：嵌入 TikTok 视频**

```tsx
<blockquote className="tiktok-embed" cite="https://www.tiktok.com/@你的账号/video/视频ID">
  <a href="https://www.tiktok.com/@你的账号/video/视频ID">Watch on TikTok</a>
</blockquote>
<script async src="https://www.tiktok.com/embed.js"></script>
```

### 视频规格建议

| 用途 | 推荐格式 | 分辨率 | 文件大小 |
|------|---------|--------|---------|
| 工厂实拍 | MP4 (H.264) | 1920×1080 | < 50MB |
| 产品展示 | MP4 (H.264) | 1280×720 | < 20MB |
| 短视频 | MP4 (H.264) | 1080×1920 | < 10MB |

> **视频压缩工具**：HandBrake（免费开源，https://handbrake.fr）

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
| **国内访问** | ⚠️ 一般 | ⚠️ 一般 | ⚠️ 一般 | ❌ 较慢 | ❌ 较慢 |

> 🔴 **关键发现**：Vercel 的 Hobby 免费方案明确禁止商用（Terms of Service 第4条），B2B 网站必须升级到 Pro 方案 $20/月。Cloudflare Pages 免费方案则明确**允许商用**。

---

### 📊 域名注册成本对比

| 注册商 | .com 首年 | .com 续费/年 | WHOIS 隐私 | 免费 SSL | 备注 |
|--------|-----------|-------------|------------|----------|------|
| **Cloudflare Registrar** | ~$10.44 | **~$10.44** | ✅ 免费 | ✅ | **成本价，最强推荐** |
| **Namecheap** | ~$6.49 | ~$15.88 | ✅ 免费 | ✅ | 首年便宜，续费贵 |
| **Porkbun** | ~$10 | ~$10.72 | ✅ 免费 | ✅ | 性价比高 |

---

### 🏆 推荐方案：Cloudflare Pages + Cloudflare Registrar

| 项目 | 费用 |
|------|------|
| **域名** | ~$10.44/年（.com） |
| **托管** | $0（永久免费，无限带宽） |
| **SSL** | $0（自动） |
| **CDN** | $0（330+全球节点） |
| **年总成本** | **≈ $10.44/年（约 ¥76 元）** |

---

## ⚔️ Cloudflare Pages vs GitHub Pages

| 维度 | **Cloudflare Pages** 🏆 | **GitHub Pages** |
|------|------------------------|-------------------|
| **商用合法** | ✅ 明确允许 | ❌ 明确禁止 |
| **全球 CDN 节点** | **330+ 城市** | 极少（以美国为主） |
| **月带宽** | **无限** | 100GB |
| **亚洲访问速度** | ⚡ 极快 | 🐢 慢 |
| **DDoS 防护** | ✅ 内置 | ❌ 无 |
| **即时回滚** | ✅ 一键回滚 | ❌ 需手动 revert |

**结论**：Cloudflare Pages，毫无悬念。GitHub Pages 从根本上不允许商用。

---

## 📖 完整教程：外贸 B2B 独立站从 0 到上线

### 🔬 第一章：技术选型深度解析

#### 为什么不用 WordPress？

| 问题 | WordPress | 我们的方案（Next.js 静态站） |
|------|-----------|---------------------------|
| **工作原理** | 用户访问 → 服务器运行 PHP → 查数据库 → 拼 HTML → 返回 | 用户访问 → CDN 直接返回 HTML 文件 |
| **页面加载** | 1.5–4 秒 | 0.2–0.5 秒 |
| **安全风险** | 全球最大攻击靶子 | 无服务器、无数据库、无可攻击面 |
| **维护成本** | 每月更新 | **零** |
| **主机费用** | $5–30/月 | **$0** |
| **SEO 影响** | 加载慢，排名天然吃亏 | 秒开，Core Web Vitals 全绿 |

#### 为什么选 Next.js + 静态导出？

Next.js 把整个网站"编译"成纯静态 HTML/CSS/JS 文件。你用现代前端技术写代码，最后得到的是一堆可以直接丢到任何地方就能跑的静态文件。

**类比**：就像你用 Word 写文档（Next.js 开发），最后导出成 PDF（静态 HTML），别人不需要装 Word 就能看。

---

### 🏗️ 第二章：静态导出原理

当执行 `npm run build` 且配置了 `output: 'export'`：

```
1. Next.js 启动构建
2. TypeScript 检查所有代码
3. 对每个页面路由：
   ├── /                → 生成 out/index.html
   ├── /about           → 生成 out/about.html
   ├── /contact         → 生成 out/contact.html
   ├── /products        → 生成 out/products.html
   ├── /how-to-customize→ 生成 out/how-to-customize.html
   └── /blog            → 生成 out/blog.html
4. CSS 提取 + 压缩
5. JavaScript 打包 + 压缩
6. public/ 目录文件原样复制
7. 输出到 out/ 目录
```

---

### 🚀 第三章：Cloudflare Pages 部署实战

#### Step 1：注册 Cloudflare 账号
1. 打开 https://dash.cloudflare.com/sign-up
2. 用邮箱注册并验证

#### Step 2：注册域名（在 Cloudflare Registrar）
1. 登录 Cloudflare Dashboard → **Registrar** → **Register Domains**
2. 搜索并注册域名（如 `sinrora.com`）
3. 成本：~$10.44/年，自动配好 DNS + SSL

#### Step 3：把代码推送到 GitHub

```bash
git init
git add .
git commit -m "initial commit: sinrora cigar accessories B2B website"
git remote add origin https://github.com/你的用户名/sinrora-website.git
git branch -M main
git push -u origin main
```

#### Step 4：在 Cloudflare Pages 创建项目

1. 登录 Cloudflare Dashboard → **Workers & Pages**
2. **Pages** → **Create a project** → **Connect to Git**
3. 授权 GitHub 并选择 `sinrora-website` 仓库
4. 构建设置：
   - **Framework preset**: Next.js (Static Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. 点击 **Save and Deploy**

#### Step 5：绑定自定义域名

1. 在 Cloudflare Pages 项目 → **Custom domains** → **Set up a custom domain**
2. 输入 `sinrora.com` → 继续
3. Cloudflare 自动配置 DNS 记录 + SSL 证书
4. 等待 SSL 证书签发（通常几分钟）

#### Step 6：验证部署

1. 访问 `https://sinrora.com` 确认网站正常
2. 测试所有页面链接
3. 测试移动端显示效果
4. 测试 WhatsApp 和邮件联系功能

---

### 🔄 日常更新流程

修改代码后，只需：

```bash
git add .
git commit -m "update: 添加新产品图片"
git push
```

Cloudflare Pages 会自动检测到推送，重新构建并部署。通常 1-2 分钟生效。

---

### ⚠️ 实战踩坑记录

#### 坑1：`output: "standalone"` vs `output: "export"`

| 配置 | 输出 | 用途 | 能否部署到 Cloudflare Pages |
|------|------|------|---------------------------|
| `output: "export"` | 纯静态 HTML/CSS/JS → `out/` | 静态托管（CDN） | ✅ 可以 |
| `output: "standalone"` | Node.js 服务器包 → `.next/standalone/` | 自建服务器 / Docker | ❌ 不行 |

**如果你把 `output` 改成 `"standalone"`，Cloudflare Pages 构建时找不到 `out/` 目录，部署会失败。**

正确配置（`next.config.mjs`）：

```javascript
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

#### 坑2：Tailwind CSS v4 的 PostCSS 配置

Tailwind CSS v4 需要使用 `@tailwindcss/postcss` 插件，不是旧版的 `tailwindcss` 插件：

```javascript
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

#### 坑3：CSS `@import` 顺序

Google Fonts 的 `@import` 必须在 `@import "tailwindcss"` 之前，否则样式会出问题：

```css
@import url('https://fonts.googleapis.com/css2?family=...');  /* 先导入字体 */
@import "tailwindcss";  /* 再导入 Tailwind */
```

#### 坑4：Next.js 缓存导致构建失败

删除页面文件后，Next.js 缓存可能仍引用旧文件。解决方法：

```bash
Remove-Item -Recurse -Force ".next"
npm run build
```

---

### 💰 成本总结

| 项目 | 费用 |
|------|------|
| 域名（.com） | ~$10.44/年 |
| Cloudflare Pages 托管 | $0 |
| SSL 证书 | $0 |
| CDN 全球加速 | $0 |
| DDoS 防护 | $0 |
| **年总成本** | **≈ ¥76** |

**零服务器、零数据库、零维护、秒开。** 外贸 B2B 独立站本该如此简单。

---

## 🔄 品类切换指南

本网站架构是品类无关的（Category-Agnostic），切换品类只需修改以下内容：

### 必须修改的文件

| 文件 | 修改内容 |
|------|---------|
| `src/app/globals.css` | 主题色变量（`--color-primary` 等） |
| `src/app/layout.tsx` | 网站标题和描述 |
| `src/app/page.tsx` | 首页所有文案和产品数据 |
| `src/app/products/page.tsx` | 产品分类和产品数据 |
| `src/app/about/page.tsx` | 品牌故事、数据统计、时间线 |
| `src/app/contact/page.tsx` | 产品类型下拉选项 |
| `src/app/how-to-customize/page.tsx` | 定制流程文案和FAQ |
| `src/app/blog/page.tsx` | 博客文章内容 |
| `src/components/layout/Header.tsx` | 导航栏产品分类 |
| `src/components/layout/Footer.tsx` | 页脚产品分类链接 |

### 不需要修改的

| 内容 | 原因 |
|------|------|
| 页面结构/布局 | Hero+产品+优势+流程+工厂+认证+CTA 是通用的 |
| 字体 | Playfair Display + Poppins 适配大多数品类 |
| 动效/交互 | hover效果、下拉菜单、滚动动画都是通用的 |
| 部署配置 | 与品类无关 |

### 品类配色参考

| 品类 | 推荐主色 | 推荐强调色 | 风格关键词 |
|------|---------|-----------|-----------|
| 雪茄配件 | `#5C3D2E` 深棕 | `#C9A96E` 古铜金 | 绅士、奢华、沉稳 |
| 香水美妆 | `#feb6c1` 粉色 | `#e895a0` 深粉 | 轻奢、少女、优雅 |
| 毛绒玩具 | `#6C63FF` 紫蓝 | `#FF6B6B` 珊瑚红 | 活泼、可爱、温暖 |
| 3C电子 | `#1a1a2e` 深蓝 | `#e94560` 科技红 | 科技、专业、现代 |
| 珠宝首饰 | `#1a1a1a` 黑色 | `#D4AF37` 金色 | 高端、精致、典雅 |
