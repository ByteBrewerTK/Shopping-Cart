import { configureStore } from "@reduxjs/toolkit";
import cartItem from "./cartItem";

export default configureStore({
    reducer:{
        cart:cartItem
    }
})