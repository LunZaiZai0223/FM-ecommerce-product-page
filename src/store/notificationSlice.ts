import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Notification {
  type: "CHECKOUT" | "ADD_CART" | "REMOVE_CART" | "";
  isActivated?: boolean;
}

const initialState = {
  type: "",
  isActivated: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    activateNotification: (state, action: PayloadAction<Notification>) => {
      const { type } = action.payload;
      state.isActivated = true;
      state.type = type;
    },
    deactivateNotification: (state) => {
      state.type = "";
      state.isActivated = false;
    },
  },
});

export const { activateNotification, deactivateNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
