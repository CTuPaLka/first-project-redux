const defaultState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.customers ] };
    case "GET_CUSTOMER":
      return { ...state, customers: [state.customers.filter(customer=>customer.id !== action.customer.id)] };

    default:
      return state;
  }
};
