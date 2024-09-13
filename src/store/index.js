import { createStore, combineReducers, applyMiddleware } from 'redux'
import usersReducer from './users/users'
import adsReducer from './ads/ads'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    users: usersReducer,
    ads: adsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
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

