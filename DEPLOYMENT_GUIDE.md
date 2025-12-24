# 🚀 快速部署指南

## 📋 部署前檢查清單

- [ ] Node.js 18+ 已安裝
- [ ] Git 已安裝
- [ ] GitHub 帳號已創建
- [ ] Repository 名稱為 `<USERNAME>.github.io`

---

## 🔧 設定步驟

### 1. 更新 package.json

開啟 [package.json](package.json)，將 `<USERNAME>` 替換為你的 GitHub 使用者名稱：

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/"
```

### 2. 初始化 Git Repository（如果尚未初始化）

```bash
git init
git add .
git commit -m "Initial commit: React + TailwindCSS + Live2D Portfolio"
```

### 3. 連結 GitHub Repository

```bash
git remote add origin https://github.com/<USERNAME>/<USERNAME>.github.io.git
git branch -M main
git push -u origin main
```

---

## 🚢 部署方法

### 方法 1: 使用 gh-pages（推薦用於首次部署）

```bash
npm install
npm run deploy
```

這個指令會：
1. 執行 `npm run build` 建置專案
2. 自動推送 `dist` 資料夾到 `gh-pages` 分支
3. 網站將在 5-10 分鐘內上線

### 方法 2: 使用部署腳本（Bash/Linux/macOS）

```bash
chmod +x deploy.sh
./deploy.sh
```

### 方法 3: GitHub Actions（持續自動部署）

**適用場景**：每次推送到 `main` 分支時自動部署

#### 設定步驟：

1. **啟用 GitHub Pages**
   - 前往 Repository Settings
   - 點選 **Pages**
   - **Source** 選擇 **GitHub Actions**

2. **推送程式碼**
   ```bash
   git add .
   git commit -m "Enable GitHub Actions deployment"
   git push
   ```

3. **檢查部署狀態**
   - 前往 Repository 的 **Actions** 分頁
   - 查看 workflow 執行狀態
   - 成功後網站會在 https://\<USERNAME\>.github.io/ 上線

---

## ✅ 驗證部署

部署完成後，請執行以下檢查：

- [ ] 訪問 `https://<USERNAME>.github.io/`
- [ ] 確認頁面正常顯示
- [ ] 檢查 Live2D 角色是否出現在左下角
- [ ] 測試響應式設計（手機/平板）
- [ ] 確認所有連結可以正常點擊

---

## 🐛 常見問題

### 1. 部署後出現 404 錯誤

**解決方案**：
- 確認 `package.json` 中的 `homepage` 設定正確
- 確認 `vite.config.js` 中的 `base` 為 `/`
- 等待 5-10 分鐘讓 GitHub Pages 完成部署

### 2. Live2D 角色沒有出現

**解決方案**：
- 開啟瀏覽器開發者工具 (F12)
- 檢查 Console 是否有錯誤訊息
- 確認 CDN 連結可以正常訪問
- 嘗試清除瀏覽器快取

### 3. CSS 樣式沒有套用

**解決方案**：
- 確認 TailwindCSS 已正確安裝：`npm install -D tailwindcss`
- 檢查 `src/index.css` 是否包含 `@tailwind` 指令
- 重新建置：`npm run build`

### 4. npm run deploy 失敗

**解決方案**：
```bash
# 清除快取後重試
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

---

## 📝 更新網站內容

### 本地修改 → 部署流程

1. **修改內容**
   ```bash
   # 編輯相關檔案（見下方「自訂內容」章節）
   ```

2. **本地測試**
   ```bash
   npm run dev
   # 開啟 http://localhost:5173 檢查
   ```

3. **部署更新**
   ```bash
   npm run deploy
   ```

   或提交到 Git（如果使用 GitHub Actions）：
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```

---

## 🎨 自訂內容

### 更新個人資訊
編輯 [src/components/sections/ProfileSection.jsx](src/components/sections/ProfileSection.jsx)

### 新增研究專案
編輯 [src/components/sections/ProjectsSection.jsx](src/components/sections/ProjectsSection.jsx)

### 新增論文發表
編輯 [src/components/sections/PublicationsSection.jsx](src/components/sections/PublicationsSection.jsx)

### 調整技能評分
編輯 [src/components/sections/SkillsSection.jsx](src/components/sections/SkillsSection.jsx)

---

## 📞 技術支援

如果遇到問題，請檢查：
1. [GitHub Pages 文件](https://docs.github.com/en/pages)
2. [Vite 文件](https://vitejs.dev/)
3. [Live2D Widget 文件](https://github.com/stevenjoezhang/live2d-widget)

---

**🎉 祝您部署順利！**
