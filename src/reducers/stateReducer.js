import {CHANGE_NAME, CHANGE_PHONE, CHANGE_EMAIL, CHANGE_DESC, CHANGE_IMG} from "../actions/types"

const initialState = {
    name: "Micah Smith",
    phone: "801-691-2737",
    email: "ethonwilles@gmail.com",
    desc: "THIS IS A DESCRIPTION",
    image_uri: false
  }

export const stateReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_NAME:
            state = {
                ...state,
                name: action.data
            }
            return state
        case CHANGE_PHONE:
            state = {
                ...state,
                phone: action.data
            }
            return state
        case CHANGE_EMAIL:
            console.log(action.data)
            state = {
                ...state,
                email: action.data
            }
            console.log(state)
            return state
        case CHANGE_DESC:
            console.log(action.data)
            return({
                ...state,
                desc: action.data
            }
            )
        case CHANGE_IMG:
            return({
                ...state, 
                image_uri: action.data
            })
                
            
            
        default:
            return state
    }
}