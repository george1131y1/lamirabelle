# 🏠 hknewhouse 項目文檔

> 香港新樓資訊平台 - 項目管理與部署指南

---

## 📁 項目結構

```
/home/george113/Desktop/lamirabelle/    # 開發目錄 (main分支)
├── src/
│   ├── App.tsx                         # 主頁面組件
│   ├── components/
│   │   └── Charts.tsx                  # 圖表組件 (甜甜圈圖、海景指示器等)
│   ├── index.css                       # 樣式
│   └── main.tsx                        # 入口
├── images/                             # 圖片資源
│   ├── hero.png                        # 主視覺圖
│   ├── seaview_circle.png              # 圓形船照
│   ├── grandentrance.png               # 會所圖片
│   ├── mirabellevilla.png              # 會所圖片
│   ├── oceangym.png                    # 會所圖片
│   └── infinitypool.png                # 會所圖片
├── dist/                               # 構建輸出 (自動生成)
├── index.html                          # 入口HTML
├── package.json                        # 依賴配置
├── vite.config.ts                      # Vite配置
└── README.md                           # 項目說明

GitHub gh-pages分支結構:              # 部署目錄
├── assets/                             # JS/CSS資源
│   ├── index-xxx.js
│   └── index-xxx.css
├── images/                             # 圖片 (複製自main)
└── index.html                          # 入口
```

---

## 🔄 開發工作流

### 1. 開發階段 (main分支)

```bash
# 切換到開發分支
cd /home/george113/Desktop/lamirabelle
git checkout main

# 修改代碼 (src/App.tsx, src/components/Charts.tsx等)

# 安裝依賴 (如node_modules缺失)
npm install

# 本地開發預覽
npm run dev
```

### 2. 構建階段

```bash
# 構建生產版本
npm run build

# 確認dist/目錄已生成
dist/
├── assets/
├── images/     # 需手動複製
└── index.html
```

### 3. 部署階段 (gh-pages分支)

```bash
# 確保在main分支已commit
git add -A
git commit -m "描述修改內容"
git push origin main

# 切換到gh-pages分支
git checkout gh-pages

# 清理舊文件
rm -rf assets images index.html

# 複製新構建文件
cp -r dist/* .

# 確保圖片存在
mkdir -p images
cp /path/to/images/*.png images/

# 提交部署
git add -A
git commit -m "Deploy: 描述修改"
git push origin gh-pages --force

# 返回main分支
git checkout main
```

---

## 📝 常見修改任務

### 修改價格

文件: `src/App.tsx`

```tsx
// 搜索 "預測呎價" 或 "price" 定位
// 修改價格數值
```

### 修改圖片

1. 準備新圖片，命名為英文/數字
2. 放入 `images/` 目錄
3. 在 `src/App.tsx` 或組件中引用: `./images/xxx.png`
4. 重新構建並部署

### 修改甜甜圈圖表

文件: `src/components/Charts.tsx`
- `UnitMixChart` - 戶型分佈甜甜圈圖
- `SeaViewIndicator` - 海景指示器
- `HistoricalPriceChart` - 歷史價格圖
- `RegionalComparisonChart` - 區域比較圖
- `ScoreRadarChart` - 雷達評分圖

### 圖片圓形裁切

```python
# 使用Python PIL裁切圓形
from PIL import Image, ImageDraw

img = Image.open("input.png").convert("RGBA")
size = min(img.width, img.height)
cropped = img.crop((left, top, right, bottom))

mask = Image.new("L", (size, size), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, size, size), fill=255)

output = Image.new("RGBA", (size, size))
output.paste(cropped, (0, 0))
output.putalpha(mask)
output.save("output_circle.png")
```

---

## 🌐 域名與DNS

### 當前域名

| 域名 | 狀態 | 用途 |
|------|------|------|
| hknewhouse.xyz | ✅ 已購買 | 主要域名 |
| hknewhouse.site | ✅ 已購買 | 備用 |
| hknewhouse.fyi | ✅ 已購買 | 備用 |

### DNS設置 (Namecheap)

**A記錄** (頂級域名):
```
類型: A Record
主機: @
值: 185.199.108.153
值: 185.199.109.153
值: 185.199.110.153
值: 185.199.111.153
TTL: Automatic
```

**CNAME記錄** (www子域名):
```
類型: CNAME Record
主機: www
值: george1131y1.github.io
TTL: Automatic
```

### GitHub Pages設置

1. Repo → Settings → Pages
2. Custom domain: `hknewhouse.xyz`
3. Save
4. 等待驗證後勾選 "Enforce HTTPS"

---

## 🚀 快速部署腳本

### 一鍵部署腳本

```bash
#!/bin/bash
# deploy.sh - 放在項目根目錄

echo "🚀 開始部署..."

# 構建
echo "📦 構建中..."
npm run build

# 複製圖片
echo "🖼️ 複製圖片..."
cp images/*.png dist/images/ 2>/dev/null || mkdir -p dist/images && cp images/*.png dist/images/

# 切換到gh-pages
echo "🔄 切換到gh-pages分支..."
git checkout gh-pages

# 清理並複製新文件
rm -rf assets images index.html
cp -r dist/* .

# 提交
echo "💾 提交更改..."
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"

# 推送
echo "📤 推送到GitHub..."
git push origin gh-pages --force

# 返回main
git checkout main

echo "✅ 部署完成！"
echo "🌐 網址: https://hknewhouse.xyz/lamirabelle"
```

使用方法:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🎨 設計規範

### 配色

```
深藍色: #0A2540 (主色)
金色:   #D4A853 (強調色)
米白色: #F9F7F4 (背景)
深藍淺: #1A3A5C
金色淺: #E8C87A
```

### 字體

```html
Google Fonts:
- Cactus Classical Serif (標題)
- Noto Serif TC (中文)
- system-ui (正文)
```

---

## 📋 檢查清單

### 每次部署前檢查

- [ ] 代碼已commit到main分支
- [ ] `npm run build` 成功無錯誤
- [ ] dist/images/ 包含所有圖片
- [ ] gh-pages分支正確更新
- [ ] 網址可正常訪問
- [ ] HTTPS證書有效

### 新增樓盤檢查

- [ ] 創建新項目文件夾
- [ ] 複製模板結構
- [ ] 修改項目專屬內容
- [ ] 更新圖片資源
- [ ] 測試所有連結
- [ ] 部署到新路徑

---

## 🔗 重要連結

| 名稱 | 網址 |
|------|------|
| 源碼Repo | https://github.com/george1131y1/lamirabelle |
| GitHub Pages | https://george1131y1.github.io/lamirabelle/ |
| 自定義域名 | https://hknewhouse.xyz/lamirabelle |
| Namecheap | https://namecheap.com |

---

## 👥 團隊分工

| 成員 | 負責 |
|------|------|
| 🎨 CD蝦 | 前端開發、UI/UX、部署 |
| 🌊 海蝦 | 社媒內容、推廣策略 |
| 💰 金蝦 | 價格分析、投資建議 |

---

## 📝 更新日誌

### 2024-03-18
- ✅ 購買 hknewhouse.xyz / .site / .fyi 域名
- ✅ 設置Namecheap DNS
- ✅ 綁定GitHub Pages自定義域名
- ✅ 更新圓形船照位置到Seamless Connection區域
- ✅ 甜甜圈圖表置中，四房標籤不重叠
- ✅ 價格調整為 $16k-17k/呎計算

---

*文檔維護者: CD蝦 (創作總監部)*
*最後更新: 2024-03-18*
