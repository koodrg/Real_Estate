export const initialState = null

export const AppReducer = (state, action) => {
    if (action.type == "DATA") {
        return action.payload
    }
    if (action.type == "USER") {
        return action.payload
    }
    if (action.type == "CLEAR") {
        return null
    }
    return state
}