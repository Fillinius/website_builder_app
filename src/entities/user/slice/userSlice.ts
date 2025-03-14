import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { UserSchema,User } from "../types/user"

const initialState:UserSchema = {
    authData:undefined
}
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setAuthData:(state,action:PayloadAction<User>) => {
            state.authData = action.payload
        },
        logout:(state) => {
            state.authData = undefined
        }
    }
})