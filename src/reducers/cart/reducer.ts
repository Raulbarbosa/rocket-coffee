import { produce } from "immer";
import { Coffee } from "../../interface";
import { ActionTypes } from "./actions";

interface CartState {
  cart: Coffee[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.INCREMENT_COFFEE:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.coffee)
      })

    default:
      return state
  }
}