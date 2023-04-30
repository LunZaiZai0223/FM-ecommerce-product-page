# Frontend Mentor - FM-ecommerce-product-page

## 目錄

- [專案結構](#專案結構)
- [畫面](#畫面)
- [功能](#功能)
- [連結](#連結)
- [使用技術](#使用技術)
- [學習筆記](#學習筆記)

## 專案結構

```shell!
├── assets --> 存放圖片、字體
|  ├── fonts
|  ├── icons
|  └── images
├── components --> 元件
|  ├── Avatar
|  ├── Cart
|  ├── MobileNav
|  ├── Navbar
|  ├── Notification
|  ├── Product
|  ├── ProductInfo
|  ├── ProductPreview
|  ├── ProductSlider
|  └── UI --> 各種重複性元件
├── constants --> 資料常數
|  ├── img-list.constant.ts
|  └── nav-item.constant.ts
├── hooks --> custom hooks
|  ├── useProductQty.ts
|  └── useWindowDimensions.tsx
├── layouts
|  └── RootLayout
├── store --> redux
|  ├── cartSlice.ts
|  ├── index.ts
|  ├── notificationSlice.ts
|  └── utils.ts --> 重新封裝 useDispatch, useSelector 讓 TypeScript 可以推導型別
└── styles --> style 設定
   ├── breakpoints.ts
   ├── font.module.css
   ├── global.ts
   └── theme.ts

```


## 畫面

![CleanShot 2023-04-30 at 11 16 30](https://user-images.githubusercontent.com/77038018/235339993-ec179370-006b-4142-99e6-3e8a5b7a72b3.gif)
![CleanShot 2023-04-30 at 11 18 26](https://user-images.githubusercontent.com/77038018/235339998-54489ea6-f3ab-4529-baec-2f443ab46cc7.gif)


## 功能

1. 購物車基本流程（CRUD）
2. 操作提示
3. 產品圖點擊觀看詳情並切換圖片
4. 手刻手機版圖片輪播

## 連結

[Demo](https://lunzaizai0223.github.io/FM-ecommerce-product-page/)

## 使用技術

1. React + TypeScript
2. styled-component

## 學習筆記

[styled-component 筆記](https://hackmd.io/@lunzaizai/HyjZemH72)
