import CartActionTypes from "./action-types"

export function addProductToCart(payload) {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload
  }
}

export function removeProductFromCart(payload) {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
  }
}

export function addQuantityFromProduct(payload) {
  return {
    type: CartActionTypes.INCREASE_QUANTITY_PRODUCT,
    payload
  }
}

export function removeQuantityFromProduct(payload) {
  return {
    type: CartActionTypes.DECREASE_QUANTITY_PRODUCT,
    payload
  }
}




