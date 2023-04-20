# AC_restaurant_list_2.0

使用 Node.js + Express + MongoDB 製作的簡易餐廳美食網站，使用者可以註冊帳號、登入，並查看、新增、編輯或刪除專屬該用戶的餐廳資訊。

## Screenshot - 畫面截圖

#### 搜尋&排序

![image](https://user-images.githubusercontent.com/107454420/227485484-a0afc421-b193-4871-9827-72b6958c9afc.png)

#### 新增按鈕

![image](https://user-images.githubusercontent.com/107454420/226575994-58b5d896-d12c-447e-9efe-b4847b6fd85a.png)

#### 新增頁面

![image](https://user-images.githubusercontent.com/107454420/226576034-9ce23cf9-cb5b-480a-9d3a-edc8b986fe48.png)

## Features - 功能

1. 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
2. 使用者可以依店家名稱、料理類別來搜尋
3. 使用者可以新增一筆餐廳資料
4. 使用者可以瀏覽一筆餐廳的詳細資訊
5. 使用者可以編輯一筆餐廳的詳細資訊
6. 使用者可以刪除一筆餐廳資料
7. 使用者可以透過下拉式選單選擇餐廳排序方式
8. 使用者可以註冊帳號
9. 使用者可以登入系統建立自己的餐廳清單

## Prerequisites - 環境設置

- Node.js
- nodemon
- Express @4.16.4
- Express-handlebars @3.0.0
- Bootstrap @5.1.3
- MongoDB
- mongoose @5.9.7
- method-override @3.0.0
- express-session @1.17.1
- passport @0.4.1
- passport-facebook @3.0.0
- passport-local @1.0.0
- dotenv @16.0.3
- bcryptjs @2.4.3
- connect-flash @0.1.1

## Installation and execution - 安裝與執行步驟

1. 開啟 Terminal, Clone 此專案至本機:

```
git clone https://github.com/kim1037/AC_restaurant_list_2.0.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd AC_my_restaurant_list
```

3. 安裝所需套件

```
npm i [套件名稱]
```

4. 安裝 mongoose

```
npm i mongoose@5.9.7
```

5. 設置.env檔

請修改 `.env.example` 成 .env

6. 匯入種子檔案

```
npm run seed
```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

> MongoDB connect success!
>
> done

7. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

8. 當 terminal 出現以下字樣，表示伺服器已啟動

> The server is running on http://localhost:3000
>
> MongoDB connect success!
