export const AddToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload,
  };
};

export const RemoveFromCart = (payload, id) => {
  return {
    type: "REMOVE",
    payload,
    id,
  };
};

export const ReduceQuantity = (payload) => {
  return {
    type: "REDUCE_QUANTITY",
    payload,
  };
};
