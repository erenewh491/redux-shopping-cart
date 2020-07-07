const UpdateList = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const found = state.findIndex((item) => item.id === action.payload);
      if (found === -1) return state;
      state[found].quantity--;
      return state;
    case "REMOVE":
      const Found = state.findIndex((item) => item.id === action.id);
      if (Found === -1) return state;
      state[Found].quantity++;
      return state;

    default:
      return state;
  }
};
const InitialState = [
  {
    id: "1",
    title: `Men's Shirt`,
    price: 1200,
    imgurl: `/dist/img-1.jpg`,
    description: `The best in the town, made by the one of the best designers`,
    quantity: 2,
  },
  {
    id: "2",
    title: `Women's Red Top`,
    price: 1500,
    imgurl: `/dist/img-2.jpg`,
    description: `The best in the town, made by the one of the best designers`,
    quantity: 5,
  },
  {
    id: "3",
    title: `Women's Shirt`,
    price: 1000,
    imgurl: `/dist/img-3.jpg`,
    description: `The best in the town, made by the one of the best designers`,
    quantity: 5,
  },
  {
    id: "4",
    title: `Men's T-Shirt`,
    price: 2000,
    imgurl: `/dist/img-4.jpg`,
    description: `The best in the town, made by the one of the best designers`,
    quantity: 5,
  },
  {
    id: "5",
    title: `Woman's Blouse`,
    price: 1800,
    imgurl: `/dist/img-5.jpg`,
    description: `The best in the town, made by the one of the best designers`,
    quantity: 5,
  },
  {
    id: "6",
    title: `Woman's Designer Top`,
    price: 3500,
    imgurl: `/dist/img-6.jpg`,
    description: `The best in the town, made by the one of the best designers`,
    quantity: 5,
  },
];

export default UpdateList;
