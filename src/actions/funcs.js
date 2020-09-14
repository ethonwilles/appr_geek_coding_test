import { faPhone } from "@fortawesome/free-solid-svg-icons"
import {CHANGE_NAME, CHANGE_PHONE, CHANGE_EMAIL, CHANGE_DESC} from "../actions/types"

export const changeName = (info) =>({
    type: CHANGE_NAME,
    data: info
})

export const changePhone = (info) =>({
    type: CHANGE_PHONE,
    data: info
})

export const changeEmail = (info) =>({
    type: CHANGE_EMAIL,
    data: info
})


export const changeDesc = (info) =>({
    type: CHANGE_DESC,
    data: info
})