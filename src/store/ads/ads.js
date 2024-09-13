import { createSlice } from '@reduxjs/toolkit'

const adsState = {
    adsList: [],
    newAds: {
        title: "",
        description: "",
        price: 0
    }
}


const adsSlice = createSlice({
    name: "ads",
    initialState: adsState,
    reducers: {
        createAds(state, action) {
            state.adsList.push(action.payload)
        },
    }
})

export const { createAds } = adsSlice.actions

export default adsSlice.reducer

// export default function adsReducer(state = adsState, action) {
//     switch (action.type) {
//         case "ads/create":
//             return {
//                 ...state,
//                 adsList: [...state.adsList, action.payload]
//             }

//         default:
//             return state
//     }
// }

// export function createAds(adsData) {
//     return {
//         type: "ads/create",
//         payload: adsData
//     }
// }