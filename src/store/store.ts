import { configureStore } from "@reduxjs/toolkit";
import instructorReducer from "./instructorSlice";
import instructorOptionReducer from "./instructorOptionSlice";

export const store = configureStore({
    reducer: {
        instructorState: instructorReducer,
        instructorOption: instructorOptionReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
