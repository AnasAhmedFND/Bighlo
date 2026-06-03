import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: typeof window !== "undefined" ? 
  JSON.parse(localStorage.getItem("cart") || "[]") : [],
};

export const cartSlice = createSlice({
  name: 'cartItemSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      let findProduct = state.cartItems.findIndex((item) =>item.id === action.payload.id )
      
      if(findProduct === -1){
         state.cartItems.push(action.payload);
         localStorage.setItem("cart", JSON.stringify(state.cartItems))

       }else{
        state.cartItems[findProduct].qty += 1;
         localStorage.setItem("cart", JSON.stringify(state.cartItems))

       }                  
     
    },

    increment: (state, action) =>  {
      state.cartItems[action.payload].qty += 1;      
        localStorage.setItem("cart", JSON.stringify(state.cartItems))

    },

    dicriment: (state, action) => {
      if(state.cartItems[action.payload].qty !== 1){
        state.cartItems[action.payload].qty -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))

    },

    deleteItems:(state, action) => { 
      state.cartItems.splice(action.payload, 1)
        localStorage.setItem("cart", JSON.stringify(state.cartItems))


    },

    clearCart: (state, action) => {
      state.cartItems = [];
        localStorage.setItem("cart", JSON.stringify(state.cartItems))

    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, increment, dicriment, deleteItems, clearCart } = cartSlice.actions

export default cartSlice.reducer