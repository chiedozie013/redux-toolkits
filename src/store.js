import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/carts/CartSlice";
import modalReducer from "./features/modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
