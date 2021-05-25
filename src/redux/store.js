//експортуємо createStore в redux
import { createStore } from "redux";
//Імпортуємо в rootReducer всі редюсери, що знаходиться в папці reducers
import rootReducer from "./reducers";

//експортуємо все, що присвоєно store з createStore
export const store = createStore(rootReducer);
