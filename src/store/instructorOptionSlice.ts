import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  showOptions: boolean;
  showModal: boolean;
  selectedRow: number | null;
  showMessage: boolean;
  message: string
}

const initialState = {showOptions: false, showModal: false, selectedRow: null, showMessage: false, message: ""}


const instructorOptionSlice = createSlice({
    name: "instructorOption",
    initialState,
    reducers: {
        setShowOptions: (state, {payload}) =>{
            state.showOptions =!state.showOptions;
            state.selectedRow = payload;
        },
        hideModal: (state) =>{
            state.showModal = false;
        },
        showModal: (state) =>{
            state.showModal = true;
        },
        setMessage: (state, {payload}) =>{
            state.showMessage = true;
            state.message = payload;
        },
        hideMessage: (state) =>{
            state.showMessage = false;
            state.message = "";
        }
    }
});

export const {setShowOptions, showModal, hideModal, setMessage, hideMessage} = instructorOptionSlice.actions;
export default instructorOptionSlice.reducer;