export const initialState = {
    basket: [],
    user: null,
    city: null,
    landmark: null,
    pincode: null,
    name: null,
    phoneno: null
    // subtotal: 0,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                // subtotal: state.subtotal + action.item.price,
                //lets use another way to it, by using fn getBasketTotal.
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
              );
              let newBasket = [...state.basket];
        
              if (index >= 0) {
                newBasket.splice(index, 1);
        
              } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
              }
        
              return {
                ...state,
                basket: newBasket
              }
        
        case 'SET_USER':
          return {
            ...state,
            user: action.user
          }

        case 'SET_ADDRESS':
          return {
            ...state,
            city: action.city,
            landmark: action.landmark,
            pincode: action.pincode
          }
          
          case 'SET_DETAILS':
          return {
            ...state,
            name: action.name,
          phoneno: action.phoneno,
          }
            
        case 'EMPTY_BASKET':
          return {
            ...state,
            basket: [] 

          }
        
          case 'REMOVE_USER':
            return {
              ...state,
              name: action.name,
              phoneno: action.phoneno,
            }

        default:
            return state;

    }
};

export default reducer;