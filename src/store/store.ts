import { configureStore } from "@reduxjs/toolkit";
import instructorReducer from "./instructorSlice";
import instructorOptionReducer from "./instructorOptionSlice";
import emailReducer from "./emailSlice";

export const store = configureStore({
    reducer: {
        instructorState: instructorReducer,
        instructorOption: instructorOptionReducer,
        email: emailReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
