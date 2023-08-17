import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cashReducer,
    customerReducer,
})
/**
 * composeWithDevTools - нужен для работы в браузере в инструментах разработчика
 * redux-thunk является middleware поэтому понадобится ФУНКЦИЯ applyMiddleware()
 * Middleware- 'то некоторое промежуточное звено между запросом и функцией, которую запрос должен обработать. прежде чем запрос попадет в функцию, он пройдет по цепочке middleware, которых может быть сколь угодно много 
 */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
