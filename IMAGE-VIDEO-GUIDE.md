# SINRORA 香水独立站 - 图片/视频替换指南

## 📁 文件位置

主文件：`sinrora-perfume.html`

---

## 🎬 一、Hero区域视频替换（最重要！）

**位置**：第 318-320 行
**作用**：首页首屏背景视频，客户第一眼看到的内容

```html
<video class="hero-video-bg" autoplay muted loop playsinline poster="">
    <source src="assets/videos/factory-hero.mp4" type="video/mp4">
</video>
```

### 替换步骤：

1. **准备视频**
   - 格式：MP4
   - 建议分辨率：1920x1080 或更高
   - 时长：15-30秒循环播放
   - 内容建议：
     - 工厂生产线实拍（灌装、包装过程）
     - 香水瓶特写+工人操作镜头
     - 实验室调香场景
     - 成品展示+仓库画面

2. **创建文件夹**
   ```
   项目根目录/
   └── assets/
       └── videos/
           └── factory-hero.mp4  ← 把你的视频放这里
   ```

3. **修改HTML中的路径**
   - 将 `src="assets/videos/factory-hero.mp4"` 改成你的实际文件名

### 视频拍摄建议：

| 场景 | 拍摄内容 | 时长 |
|------|---------|------|
| 开场 | 航拍工厂外观或大门 | 2-3秒 |
| 主体1 | 灌装线运作特写 | 5-8秒 |
| 主体2 | 工人质检/包装 | 5-8秒 |
| 主体3 | 香水瓶陈列/细节 | 4-6秒 |
| 结尾 | Logo或Slogan展示 | 2-3秒 |

---

## 🖼️ 二、产品图片替换（8张）

**位置**：Products Section（约第 380-450 行）

### 产品图片清单及建议：

| 序号 | 文件名 | 尺寸建议 | 内容建议 |
|------|--------|---------|---------|
| 1 | `perfume-women-floral.jpg` | 800x800px | 女士花香香水产品图 |
| 2 | `perfume-men-woody.jpg` | 800x800px | 男士木质调香水 |
| 3 | `perfume-unisex.jpg` | 800x800px | 中性香水系列 |
| 4 | `perfume-luxury.jpg` | 800x800px | 高端小众香水 |
| 5 | `perfume-body-mist.jpg` | 800x800px | 身体喷雾/香体露 |
| 6 | `perfume-oil.jpg` | 800x800px | 香水精油/浓香水 |
| 7 | `perfume-home.jpg` | 800x800px | 家居香氛系列 |
| 8 | `perfume-custom.jpg` | 800x800px | 定制/OEM服务图 |

### 替换方法：

```html
<!-- 找到这样的代码 -->
<div class="product-image">
    <img src="assets/images/perfume-women-floral.jpg" alt="Women's Floral Perfume">
</div>

<!-- 把 src 后面的路径改成你的图片路径 -->
<div class="product-image">
    <img src="assets/images/你的图片名.jpg" alt="你的描述">
</div>
```

### 产品图片拍摄要求：

✅ **必须包含的元素**：
- 正面45度角产品照（主图）
- 纯白或浅色背景
- 高清无水印
- 展示瓶身设计细节

✅ **加分项**：
- 使用场景图（模特手持）
- 多角度展示
- 包装盒/配件同框

---

## 📸 三、分类大图替换（3张）

**位置**：Categories Section（约第 480 行）

| 文件名 | 尺寸建议 | 用途 |
|--------|---------|------|
| `cat-perfume.jpg` | 900x600px | 香水OEM分类封面 |
| `cat-essential.jpg` | 900x600px | 精油分类封面 |
| `cat-packaging.jpg` | 900x600px | 定制包装分类封面 |

```html
<img src="assets/images/cat-perfume.jpg" alt="Perfume OEM" class="category-img">
```

**图片风格建议**：大气、专业、有氛围感，可使用工厂实景+产品合成

---

## 🏭 四、工厂实景图替换（3张）

**位置**：Factory Showcase Section（约第 580 行）

| 文件名 | 尺寸建议 | 内容 |
|--------|---------|------|
| `factory-overview.jpg` | 1200x600px | 工厂全景/鸟瞰图（横版大图） |
| `factory-production.jpg` | 600x600px | 生产车间实拍 |
| `factory-lab.jpg` | 600x600px | R&D实验室/调香室 |

```html
<div class="factory-img">
    <img src="assets/images/factory-overview.jpg" alt="Factory Overview">
</div>
```

**注意**：第一张图是宽幅的（grid-column: span 2），后两张是正方形

---

## 📂 五、文件夹结构总览

创建完成后，你的目录应该是这样：

```
Sinrora-Website/
├── sinrora-perfume.html          ← 主HTML文件
├── assets/
│   ├── images/                   ← 所有图片
│   │   ├── perfume-women-floral.jpg
│   │   ├── perfume-men-woody.jpg
│   │   ├── perfume-unisex.jpg
│   │   ├── perfume-luxury.jpg
│   │   ├── perfume-body-mist.jpg
│   │   ├── perfume-oil.jpg
│   │   ├── perfume-home.jpg
│   │   ├── perfume-custom.jpg
│   │   ├── cat-perfume.jpg
│   │   ├── cat-essential.jpg
│   │   ├── cat-packaging.jpg
│   │   ├── factory-overview.jpg
│   │   ├── factory-production.jpg
│   │   └── factory-lab.jpg
│   └── videos/                   ← 视频文件
│       └── factory-hero.mp4
└── (其他项目文件)
```

---

## 🔧 六、快速替换操作步骤

### 方法一：直接替换（推荐新手）

1. 在项目根目录创建 `assets/images/` 和 `assets/videos/` 文件夹
2. 把准备好的图片/视频重命名为上面指定的文件名
3. 直接放入对应文件夹
4. 打开 HTML 文件即可看到效果

### 方法二：修改路径（灵活）

如果你不想用默认文件名，可以：

1. 全局搜索 `src="assets/images/` 或 `src="assets/videos/`
2. 把所有路径改成你实际的文件路径
3. 确保相对路径正确

### 方法三：使用在线图片（临时测试）

如果想先看效果，可以用在线图片链接临时替换：

```html
<!-- 本地图片 -->
<img src="assets/images/perfume-women-floral.jpg">

<!-- 临时换成在线图片 -->
<img src="https://picsum.photos/800/800?random=1">
```

---

## ⚠️ 七、注意事项

### 图片格式要求：
- ✅ 推荐：JPG（照片）、PNG（需要透明时）、WebP（更小体积）
- ❌ 避免：BMP、TIFF（文件太大）
- 单张图片建议不超过 500KB（网页加载优化）

### 视频格式要求：
- ✅ MP4 (H.264编码)
- ✅ WebM (备选)
- 文件大小建议不超过 20MB

### 图片优化工具推荐：
- **压缩图片**：[TinyPNG](https://tinypng.com/) 或 [Squoosh](https://squoosh.app/)
- **批量重命名**：Windows资源管理器全选 → F2重命名
- **格式转换**：[Convertio](https://convertio.co/)

---

## 🎨 八、配色自定义

当前品牌色为 `#feb6c1`（粉色），如需修改：

**修改位置**：CSS变量区域（第 9-20 行）

```css
:root {
    --primary: #feb6c1;        /* 主品牌色 */
    --primary-dark: #e895a0;    /* 深色变体 */
    --primary-light: #ffd4dc;   /* 浅色变体 */
}
```

修改这三个值即可全局更换配色！

---

## 🚀 九、预览和部署

### 本地预览：
直接双击 `sinrora-perfume.html` 在浏览器打开即可

### 上线部署：
1. 将整个文件夹上传到服务器
2. 或使用 GitHub Pages / Vercel / Netlify 免费托管

---

## 📞 十、需要修改的文字内容

除了图片，你可能还需要修改以下文字信息：

| 位置 | 当前内容 | 说明 |
|------|---------|------|
| 第 12 行 | `<title>` 标签 | SEO标题 |
| 第 13 行 | `<meta description>` | 搜索引擎描述 |
| 第 288 行 | `jarvis@sinrora.com` | 邮箱地址 |
| 第 290 行 | 电话号码 | 改成真实号码 |
| 第 339 行 | WhatsApp链接 | `wa.me/8613610131362` |
| 第 700-720行 | 工厂地址 | 改成真实地址 |
| 第 725-740行 | 联系邮箱/电话 | 改成真实联系方式 |

---

## ✅ 检查清单

替换完成后，逐项检查：

- [ ] Hero视频正常播放且自动循环
- [ ] 8张产品图片全部显示正常
- [ ] 3张分类大图显示正常
- [ ] 3张工厂实景图显示正常
- [ ] 所有链接可点击
- [ ] 表单可以填写
- [ ] 手机端显示正常（可用浏览器F12切换手机模式）
- [ ] WhatsApp按钮链接正确
- [ ] 邮箱链接正确（点击能打开邮件客户端）
- [ ] 页面滚动流畅

---

**祝你网站上线顺利！🎉**
