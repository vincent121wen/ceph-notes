# Ceph 學習紀錄網站

純靜態網站，用於記錄一個月的 Ceph 學習計畫進度與筆記。

## 部署到 GitHub Pages 的步驟

### 1. 建立 repo

1. 登入 GitHub（帳號：vincent121wen）
2. 右上角 `+` -> `New repository`
3. Repository name 建議填 `ceph-notes`（或你喜歡的名稱）
4. Visibility 選 `Public`（GitHub Pages 免費版需要 public repo，或使用 GitHub Pro 的 private repo）
5. 不要勾選 "Add a README file"（我們會自己上傳檔案），直接點 `Create repository`

### 2. 上傳這個資料夾的內容

在你的電腦上（已安裝 git）執行：

```bash
cd ceph-notes
git init
git add .
git commit -m "Initial commit: Ceph 學習紀錄網站"
git branch -M main
git remote add origin https://github.com/vincent121wen/ceph-notes.git
git push -u origin main
```

如果沒有安裝 git，也可以直接在 GitHub 網頁上用 "Add file" -> "Upload files" 把整個資料夾結構拖曳上傳（注意要保留 `notes/` 子資料夾結構）。

### 3. 啟用 GitHub Pages

1. 進入 repo 頁面，點上方的 `Settings`
2. 左側選單找到 `Pages`
3. 在 "Build and deployment" 區塊：
   - Source 選擇 `Deploy from a branch`
   - Branch 選擇 `main`，資料夾選 `/ (root)`
   - 點 `Save`
4. 等待約 1-2 分鐘，重新整理頁面，會看到網址，例如：
   ```
   https://vincent121wen.github.io/ceph-notes/
   ```

### 4. 之後的更新方式

每次修改檔案後：

```bash
git add .
git commit -m "更新第二週筆記"
git push
```

GitHub Pages 會自動重新部署，約 1 分鐘內生效。

## 檔案結構

```
ceph-notes/
├── index.html          # 首頁，含四週進度 checklist
├── style.css            # 共用樣式
├── script.js            # 側邊欄高亮 + checklist localStorage 邏輯
├── cheatsheet.html       # 指令速查表
├── lab-log.html          # 實驗紀錄
└── notes/
    ├── week1.html        # 第一週筆記
    ├── week2.html        # 第二週筆記
    ├── week3.html         # 第三週筆記
    └── week4.html         # 第四週筆記
```

## 注意事項

- checklist 的勾選狀態儲存在瀏覽器的 localStorage，**換瀏覽器或裝置不會同步**，清除瀏覽器資料會重置
- 所有頁面共用 `style.css` 與 `script.js`，修改樣式或側邊欄邏輯時改這兩個檔案即可全站套用
- 新增頁面時記得同步更新所有頁面中的側邊欄 `<nav>` 區塊（或之後可以考慮改為 JS 動態載入側邊欄）
