
const initialState = {
    carts:[]
}
export const CartReducer = (state=initialState,action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
        );
        if (itemIndex >= 1) {
          state.carts[itemIndex].qty += 1;
        } else {
          const temp = { ...action.payload, qty: 1 };
          return {
            ...state,
            carts: [...state.carts, temp],
          };
        }

      case "REMOVE":
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      case "REMOVE_ITEM":
        const itemIndexDec = state.carts.findIndex((item) => item.id === action.payload.id);
        if (state.carts[itemIndexDec] >= 1) {
          state.carts[itemIndex].qty -= 1;
          return {
            ...state,
            carts: [...state.carts],
          };
        } else if (state.carts[itemIndexDec] === 1) {
            const data= state.carts.filter((e)=> e.id !== action.payload.id)
            return {
              ...state,
              carts: data,
            };
        }

      default:
        return state;
    }
    }