import {createStore, combineReducers} from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';


import userReducer from './reducers/userSlice'
const redux= require('redux')
const applyMiddleware = redux.applyMiddleware;


const rootReducer = combineReducers({
  
   user: userReducer,
   // post: postReducer,

})



const store = createStore(rootReducer);

export default store;