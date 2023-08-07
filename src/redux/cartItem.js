import { createSlice } from "@reduxjs/toolkit";

export const cartItem = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addItem : (state, action)=>{
            state.push(action.payload)
        },
        removeItem:(state, action)=>{
            return state.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {addItem, removeItem} = cartItem.actions;
export default cartItem.reducer;