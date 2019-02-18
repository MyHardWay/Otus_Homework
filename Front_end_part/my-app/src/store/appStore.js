import { createStore } from "redux";
import reducer from "../reducers/appReducer";

const initialState = {is_poped: false};
export const appStore = createStore(reducer, initialState);