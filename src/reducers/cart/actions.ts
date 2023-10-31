import { CartItem } from "../../interface";

export enum ActionTypes {
  UPDATE_CART = 'UPDATE_CART',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAN_CART = 'CLEAN_CART'
}

export function updateCartAction(item: CartItem) {

  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      item
    }
  }
}

export function removeCoffeeAction(item: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      item
    }
  }
}

// export function cleanCartAction() {
//   return {
//     type: ActionTypes.CLEAN_CART
//   }
// }