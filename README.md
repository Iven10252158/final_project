![](https://i.imgur.com/ZTxaBFH.jpg)

# CLIMBER
> 登山行程電商網站

Demo：https://iven10252158.github.io/final_project/dist/#/


## 設計概念
**創作理念：** 我本身很喜歡戶外活動，像是登山、露營。以旅遊網站的形式，希望能讓更多人看見台灣的美。<br>
**主要風格：** 自然、簡單<br>
**色系搭配：**
<img src="https://i.imgur.com/xNWBTXx.png" width="350" /><br>
**圖片來源：**
[Flickr](https://www.flickr.com/)、
[Unsplash](https://unsplash.com/)<br>

## 專案說明
* 網站主要使用 `Vue.js` 和 `Vue Cli` 架設而成
* 引入 `Vue Router` 與 `Vue Axios` 等套件
* 引入 `Bootstrap 5` 樣式
* 開發後台管理系統
* 加入 `ESLint Standard` 風格
* 透過 `mitt` 傳遞跨元件資料
* Layout 使用 `Bootstrap 5` 結合 `SCSS` 切版
* 使用 `Font Awesome`

### 前台
* 電商展示：首頁、商品列表、商品介紹等
* 購物車：刪除、修改商品數量
* 我的最愛
* 優惠券
* 結帳

### 後台
* 管理者登入
* 商品管理
* 優惠券管理
* 訂單管理
* 文章管理

## 使用技術
* Vue3
* Vue Cli
* Vue Component
* Vue Router
* Vue Axios
* Vee Validation
* CKEditor 5
* Swiper
* mitt
* Bootstrap 5
* Font Awesome

## 前台介紹
### 首頁
![Image](https://i.imgur.com/ryf7L8d.jpg)

### 商品列表
![Image](https://i.imgur.com/ST2mHzC.jpg)

### 商品介紹
![Image](https://i.imgur.com/wEV8wF9.jpg)

### 我的最愛
- 使用 localStorage 紀錄我的最愛項目 
![Image](https://i.imgur.com/ANn1VPF.png)

### 搜尋功能
![Image](https://i.imgur.com/dzhyaR0.gif)

### 加入購物車
行程分為4人及6人，如果超過4、6人可以點擊聯絡我們的按鈕留言給客服。<br>
因此加入購物車之後，購物車按鈕會disabled，並且會有小提醒顯示已經加入購物車。
![Image](https://i.imgur.com/Gt2Ol5f.gif)

### 購物車
當購物車沒有商品時，點擊購物車圖示，會出現小提醒，也會有前往至商品列表的按鈕。
![Image](https://i.imgur.com/zFE53NO.jpg)

## 後台介紹
### 登入畫面
![Image](https://i.imgur.com/wkmnqot.gif)


### 商品管理
- 圖片上傳可選擇圖片檔案或圖片連結
- 必填欄位後方都有＊字號提醒，並做表單驗證
![Image](https://i.imgur.com/FFrIjOH.png)

### 文章管理
- 文章編輯器使用` CKEditor 5 `套件
- 可自行輸入標籤內容，點擊新增標籤按鈕可產生標籤
- 日期以電腦系統時間為準
![Image](https://i.imgur.com/r1YSG2N.png)

### 製作404頁面
Demo: [404頁面](http://localhost:8080/final_project/dist/#/ghghgh) <br>
若網址輸入錯誤，會進入404頁面。
![Image](https://i.imgur.com/s7o8hZB.png)

---

更多細節部分，歡迎至 Demo 網站觀看 [https://iven10252158.github.io/final_project/dist/#/](https://iven10252158.github.io/final_project/dist/#/)
