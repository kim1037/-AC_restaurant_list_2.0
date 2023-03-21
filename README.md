# AC_restaurant_list_2.0
使用 Node.js + Express 製作的簡易餐廳美食網站，可點擊餐廳卡片查看詳細資訊，也可透過名稱或料理類別來搜尋餐廳。

## Screenshot - 畫面截圖
![image](https://user-images.githubusercontent.com/107454420/226575748-d2ba7373-1e3b-46a2-965d-c686d4dddfd6.png)
![image](https://user-images.githubusercontent.com/107454420/226575994-58b5d896-d12c-447e-9efe-b4847b6fd85a.png)
![image](https://user-images.githubusercontent.com/107454420/226576034-9ce23cf9-cb5b-480a-9d3a-edc8b986fe48.png)

## Features - 功能
1. 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
2. 使用者可以依店家名稱、料理類別來搜尋
3. 使用者可以新增一筆餐廳資料
4. 使用者可以瀏覽一筆餐廳的詳細資訊
5. 使用者可以編輯一筆餐廳的詳細資訊
6. 使用者可以刪除一筆餐廳資料

## Prerequisites - 環境設置
* Node.js
* Express @4.17.1
* Express-handlebars @3.0.0
* Bootstrap @5.1.3
* MongoDB
* mongoose @5.9.7

## Installation and execution - 安裝與執行步驟
1. 開啟Terminal, Clone此專案至本機:
```
git clone https://github.com/kim1037/AC_restaurant_list_2.0.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾
```
cd AC_my_restaurant_list
```

3. 安裝所需套件
```
npm i express@4.17.1 express-handlebars@3.0.0
```

4. 安裝 mongoose
```
npm i mongoose@5.9.7
```

5. 安裝nodemon (如已安裝可跳過此步驟)
```
npm install -g nodemon
```

6. 匯入種子檔案
```
npm run seed
```
當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

> mongodb connected!
>
> done


7. 啟動伺服器，執行 app.js 檔案
```
npm run dev 
```

8. 當 terminal 出現以下字樣，表示伺服器已啟動

> The server is running on http://localhost:3000
>
> Connect success!

