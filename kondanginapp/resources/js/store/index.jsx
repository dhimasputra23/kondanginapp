import { applyMiddleware, createStore } from 'redux'
import thunx from 'redux-thunk'

const initialState = {
    undangan: [],
    loadingUndangan: true,
    errorMessage: null
}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case "GET_UNDANGAN":
            let undanganData = action.payload ? action.payload : []

            return {
                ...state,
                undangan : undanganData,
                loadingUndangan: action.loadingUndangan,
                errorMessage: action.errorMessage
            }
            
    
        default:
            return state
    }
}

let store = createStore(reducer, applyMiddleware(thunx))

export default store