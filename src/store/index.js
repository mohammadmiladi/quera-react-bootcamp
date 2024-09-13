// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './users/users'
import adsReducer from './ads/ads'

const store = configureStore({
    reducer: {
        users: usersReducer,
        ads: adsReducer
    }
})

export default store;
// Classic Redux
// const rootReducer = combineReducers({
//     users: usersReducer,
//     ads: adsReducer
// })
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk))
// )

// store.dispatch({ type: "users/balance", value: 10000 })

// Create Action Creators


// store.dispatch(changeBalance(200000))



// store.dispatch(createUser({
//     firstName: "Mohammad",
//     lastName: "Miladi",
//     email: "mohammad@gmail.com",
//     age: 31,
//     balance: 290000
// }))



// store.dispatch(createAds({
//     title: "Iphone 16",
//     description: "New one",
//     price: 10000
// }))

// console.log(store.getState());

