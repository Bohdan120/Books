const initialState = {
    cart: [],
  };
  
  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      case 'REMOVE_FROM_CART':
        return { ...state, cart: state.cart.filter((book) => book.id !== action.payload) };
      default:
        return state;
    }
  }
  
  export default cartReducer;
  