import { createSlice } from "@reduxjs/toolkit";

interface EmailState {
    email: string;
    isValid: boolean;
}


const initialState = [] as EmailState[]

const emailSlice = createSlice({
    name: "email",
    initialState,
    reducers: {
        addEmail: (state, {payload}) =>{
            state.push(payload);
        },
    }
});

export const {addEmail} = emailSlice.actions;

export default emailSlice.reducer;