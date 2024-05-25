// store.js
import { createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

function accountReducer(state = initialState, action) {
  if (action.type === "deposit")
    return { ...state, balance: state.balance + action.payload };
  else if (action.type === "withdraw")
    return { ...state, balance: state.balance - action.payload };
  else if (action.type === "fullName")
    return { ...state, fullName: action.payload };
  else if (action.type === "mobile")
    return { ...state, mobile: action.payload };
  else return { ...state }; // return the state as is for unknown actions
}

const store = createStore(accountReducer);
export default store;
