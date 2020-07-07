const Cart = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      var counter = state.counter + 1;
      var items = state.items;
      items.push(action.payload);
      return {
        counter,
        items,
      };
    case "REMOVE":
      if (action.payload !== -1) {
        var counter = state.counter - 1;
        var items = state.items;
        items.splice(action.payload, 1);
        return {
          counter,
          items,
        };
      }
      break;
    default:
      return state;
  }
};

const InitialState = { counter: 0, items: [] };

export default Cart;
