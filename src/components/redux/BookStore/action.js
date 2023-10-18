import { ADD_BOOK, LOADED_BOOK, REMOVE_BOOK, UPDATE_BOOK } from "./actionType"

export const loadBook = (data) => {
    return {
        type: LOADED_BOOK,
        payload: data
    }
}
export const addBook = (data) => {
    return {
        type: ADD_BOOK,
        payload: data
    }
}
export const removeBook = (data) => {
    return {
        type: REMOVE_BOOK,
        payload: data
    }
}
export const updateBook = (data) => {
    return {
        type: UPDATE_BOOK,
        payload: data
    }
}