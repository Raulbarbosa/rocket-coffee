import { Coffee } from "../../interface";

export enum ActionTypes {
  INCREMENT_COFFEE = 'INCREMENT_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAN_CART = 'CLEAN_CART',
  DECREMENT_COFFEE = 'DECREMENT_COFFEE'
}

export function incrementCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.INCREMENT_COFFEE,
    payload: {
      coffee
    }
  }
}

// export function removeCoffeeAction() {
//   return {
//     type: ActionTypes.REMOVE_COFFEE
//   }
// }

// export function cleanCartAction() {
//   return {
//     type: ActionTypes.CLEAN_CART
//   }
// }

// export function decrementCoffeeAction() {
//   return {
//     type: ActionTypes.DECREMENT_COFFEE
//   }
// }