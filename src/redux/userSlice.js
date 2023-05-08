import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "user",
    initialState : {
        currentUser : null
    },
    reducers : {
        loginStart: (state) => {},
        loginSuccess: (state, action) => {
            state.currentUser = action.payload // меняем старый стейт на новые данные из экшна
        },
        loginFailure: (state) => {},
        logout : (state) => {
            state.currentUser = null   
        }
    }
})

export default userSlice.reducer
export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions