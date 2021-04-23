import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

//комбинация редюсеров
//указываем какой редюсер что делает
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

//инициализация хранилища
const store = createStore(rootReducer, composeWithDevTools());

export default store;

//предидущий стейт + екшен = седующий стейт

//================================================================================= старое
/* //инициализировали наш стейт
const initialState = {
  counter: {
    value: 10,
    step: 5,
  },
}; */

/* //деструктуризируем action
const counterReducer = (state = counterInitialState, { type, payload }) => {
  //различие экшенов идет по свойству type
  switch (type) {
    case 'counter/Increment':
      //если у нас сложный вложенный стейт, не забывать распылять его составляющие, если они не будут изменятся что бы они не потерялись
      return {
        ...state,
        value: state.value + payload,
      };

    case 'counter/Decrement':
      return {
        ...state,
        value: state.value - payload,
      };

    //для случая если он не будет знать как обрабоать какой - то тайп
    default:
      return state;
  }
}; */
