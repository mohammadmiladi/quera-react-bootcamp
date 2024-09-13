const adsState = {
    adsList: [],
    newAds: {
        title: "",
        description: "",
        price: 0
    }
}

export default function adsReducer(state = adsState, action) {
    switch (action.type) {
        case "ads/create":
            return {
                ...state,
                adsList: [...state.adsList, action.payload]
            }

        default:
            return state
    }
}

export function createAds(adsData) {
    return {
        type: "ads/create",
        payload: adsData
    }
}