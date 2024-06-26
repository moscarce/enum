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
        addEmail: (state, { payload }) => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (payload.includes(',')) {
                const emails = payload.split(',').map((email: any) => ({ email, isValid: emailPattern.test(email) }));
                state.push(...emails);
            } else {
                state.push({ email: payload, isValid: emailPattern.test(payload) });
            }
        },
        resetEmail: (state) => {
            state.splice(0, state.length)
        }
    }
});

export const {addEmail, resetEmail} = emailSlice.actions;

export default emailSlice.reducer;