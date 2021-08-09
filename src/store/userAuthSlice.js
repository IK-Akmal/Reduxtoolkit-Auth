import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({

    name: "userAuth",
    initialState: {
        isAuth: false,
    },

    reducers: {
        Login(state, action) {
            if (action.payload.login === "admin" && action.payload.pass === "admin") {
                state.isAuth = true;
            }
        },

        Logout(state, action) {
            state.isAuth = false;
        }
    }
})

export const { Login, Logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;