export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'edit':
      return state.map((c) =>
        c.id === action.payload.id ? action.payload : c
      );
    case 'delete':
      return state.filter((c) => c.id !== action.payload);
    case 'toggleFavorite':
      return state.map((c) =>
        c.id === action.payload ? { ...c, favorite: !c.favorite } : c
      );
    default:
      return state;
  }
};
