import { createSlice } from "@reduxjs/toolkit";


interface InstructorState {
  name: string;
  email: string;
  course: string;
  status: string;
  dateAdded: string;
  lastActivity: string;
}


const instructorsList: InstructorState[] = [
    {
        name: "James Nwankwo",
        email: 'james@semicolon.africa',
        course: "Design Thinking",
        status: "Active",
        dateAdded: "12 Aug, 2021",
        lastActivity: "12 Aug, 2021"
    },
    {
        name: "Great Ndabai",
        email: 'great@semicolon.africa',
        course: "Design History",
        status: "Active",
        dateAdded: "12 Aug, 2021",
        lastActivity: "12 Aug, 2021"
    },
    {
        name: "Florence Olanike",
        email: 'floo@semicolon.africa',
        course: "Software Engineering",
        status: "Pending",
        dateAdded: "12 Aug, 2021",
        lastActivity: "N/A"
    },
    {
        name: "Joel Onojason",
        email: 'jayo@semicolon.africa',
        course: "Django fundamentals",
        status: "Pending",
        dateAdded: "12 Aug, 2021",
        lastActivity: "N/A"
    },
    {
        name: "Nonso Okoroafor",
        email: 'nonso@semicolon.africa',
        course: "Java & Spring boot",
        status: "Active",
        dateAdded: "12 Aug, 2021",
        lastActivity: "12 Aug, 2021"
    },
];

const instructorSlice = createSlice({
    name: "instructor",
    initialState: instructorsList,
    reducers: {
        removeInstructor: (state, { payload})=>{
            return state.filter( (_ , index) => index !== payload)
            
        },
        findInstructor: (state, { payload }) => {
            return state.filter( (instructor) => instructor.name.toLowerCase().includes(payload.toLowerCase()))
        }
    }
});


export const { removeInstructor, findInstructor } = instructorSlice.actions;

export default instructorSlice.reducer;
