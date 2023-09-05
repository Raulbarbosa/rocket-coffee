import { CartItem } from './../../interface';
import { produce } from "immer";
import { ActionTypes } from "./actions";

interface CartState {
  cart: CartItem[]
}

export function cartReducer(state: CartState, action: any) {

  switch (action.type) {
    case ActionTypes.UPDATE_CART:
      return produce(state, (draft) => {
        const itemOnCartIndex = draft.cart.findIndex((item) => item.id === action.payload.item.id);

        if (itemOnCartIndex === -1) {
          draft.cart.push(action.payload.item);
        } else {
          draft.cart[itemOnCartIndex].unit = action.payload.item.unit;
        }
      })

    default:
      return state
  }
}