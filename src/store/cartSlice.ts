import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// assets
import ProductThumbnail from "../assets/images/image-product-1-thumbnail.jpg";

export interface CartItem {
  id: number;
  productName: string;
  productPrice: number;
  productQty: number;
  productThumbnail: string;
}

const initialState: { cartList: CartItem[] } = {
  cartList: [
    {
      id: 1,
      productName: "Fall Limited Edition Sneakers",
      productQty: 1,
      productPrice: 300,
      productThumbnail: ProductThumbnail,
    },
    {
      id: 2,
      productName: "Fall Limited Edition Sneakers",
      productQty: 1,
      productPrice: 300,
      productThumbnail: ProductThumbnail,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      const { id: addedId, productQty: addedProductQty } = action.payload;
      const existedCartItem = state.cartList.find(
        (cartItem) => cartItem.id === addedId
      );
      if (existedCartItem) {
        existedCartItem.productQty +=
          existedCartItem.productQty + addedProductQty;
      } else {
        state.cartList.push(action.payload);
      }
    },
    removeCart: (state, action: PayloadAction<CartItem>) => {
      const { id: removedId } = action.payload;
      state.cartList = state.cartList.filter(
        (cartItem) => cartItem.id !== removedId
      );
    },
    checkoutCart: (state) => {
      state.cartList = [];
    },
  },
});

export const { checkoutCart, addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
