export const initialState = {
  basket: [],
  user: null,
  // drawer: false,
};

// Selector
export const getBasketTotal = (basket) =>
  //use to add total amount in subtotal
  basket?.reduce((amount, item) => item.price + amount, 0);//initial amount is 0


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    //this is a case to add baset element from product .js
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        //copy the basket in temprory variable
        let newBasket = [...state.basket];
  
        if (index >= 0)   //it found itom inside the basket
        {
          newBasket.splice(index, 1);  //remove the index by 1
        }
        else {
          console.warn(
            'Cannot remove product. Not in cart'
          );
        }
        return {
          ...state,
          basket: newBasket,
        };

      case "SET_USER":
        return {
          ...state,
          user: action.user
        }


    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    //this a case to remove elment from basket from checkoutproduct.js
    // case "SET_DRAWER":
    // return {
    //   ...state,
    //   drawer: action.toggle,
    // };
     default:
    return state;
  }
};

export default reducer;