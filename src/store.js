import {createStore, combineReducers} from "redux"
import {stateReducer} from "./reducers/stateReducer"

const rootReducer = combineReducers({
    states: stateReducer
})

const configStore = () =>{
    return createStore(rootReducer)
}

export default configStore