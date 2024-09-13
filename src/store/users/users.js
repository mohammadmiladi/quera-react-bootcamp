import axios from 'axios'

const userState = {
    userList: [],
    newUser: {
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        balance: 0
    }
}

export default function usersReducer(state = userState, action) {
    switch (action.type) {
        case "users/updateField":
            return {
                ...state,
                newUser: {
                    [action.field]: action.value
                }
            }

        case "users/addUser":
            return {
                ...state,
                userList: [...state.userList, action.payload]
            }


        case "users/balance":
            return {
                ...state,
                balance: action.value
            }

        case "users/fetchUsers":
            return {
                ...state,
                userList: action.payload
            }

        default:
            return state
    }
}

export function changeBalance(price) {
    return { type: "users/balance", value: price }
}

export function createUser(userData) {
    return {
        type: "users/addUser",
        payload: userData
    }
}

export function fetchUsers() {
    return async (dispatch) => {
        const res = await axios.get("https://reqres.in/api/users")

        dispatch({
            type: "users/fetchUsers",
            payload: res.data.data
        })
    }
}