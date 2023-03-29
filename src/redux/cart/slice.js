import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addProduct(state, action) {
        //verificar se o produto ja esta no carrinho
        const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id)
        //se ele estiver, aumentar sua quantidade no carrinho
          if (productIsAlreadyInCart) {
              state.products = state.products.map(product => 
                product.id === action.payload.id 
                ? {...product, quantity: product.quantity + 1} 
                : product
              )
          return
          }
        // se ele nao estiver, adicionalo
        
          state.products =  [...state.products, {...action.payload, quantity: 1}]
      },

      increaseProductQuantity(state, action) {
         state.products = state.products.map(product =>
          product.id === action.payload ? {...product, quantity: product.quantity + 1 }
          : product
        )
      },

      decreaseProductQuantity(state, action) {
          state.products = state.products.map(product =>
            product.id === action.payload ? {...product, quantity: product.quantity - 1 }
            : product
            ).filter(product => product.quantity > 0)
        
      },
      removeProduct(state, action) {
        state.products =  state.products.filter(product => product.id !== action.payload)
        }
      }
  }
)

export const { addProduct, increaseProductQuantity } = cartSlice.actions