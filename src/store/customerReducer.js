export const ADD_CUSTOMER = "ADD_CUSTOMER"
export const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER"
export const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"


const defaultState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMER:
    return { ...state, customers: [...state.customers, ...action.customer]}
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.customer ] };
    case REMOVE_CUSTOMER:
      return { ...state, customers: state.customers.filter(customer=>customer.id !== action.customer) };

    default:
      return state;
  }
};

export const addCustomerAction = (customer)=>({type: ADD_CUSTOMER, customer: customer})
export const removeCustomerAction = (customer)=>({type: REMOVE_CUSTOMER, customer: customer})
export const addManyCustomerAction = (customer)=>({type: ADD_MANY_CUSTOMER, customer: customer})
