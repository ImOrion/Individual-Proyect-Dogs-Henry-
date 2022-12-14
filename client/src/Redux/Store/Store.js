import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/Reducer.js"

const composeEnhancers = (
typeof window !== "undefined" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) || compose;

const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)


export default Store;