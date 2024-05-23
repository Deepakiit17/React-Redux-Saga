import { addToCart } from "./action";
import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.warn("reducer called", action);
  //     return action.data;
  //   } else {
  //     return "no action matched";
  //   }

  switch (action.type) {
    case ADD_TO_CART:
      //add to cart logic
      console.warn("ADD_TO_CART condition", action);
      return 1 + 1;
    default:
      // no case matched
      return "no action called";
  }
};
