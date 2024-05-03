'use client'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { hideMessage } from "@/src/store/instructorOptionSlice";


interface InstructorState {
  name: string;
  email: string;
  course: string;
  status: string;
  dateAdded: string;
  lastActivity: string;
}

interface optionState {
  showOptions: boolean;
  showModal: boolean;
  selectedRow: number | null;
  showMessage: boolean;
  message: string
}


const Message = () => {
    const dispatch = useDispatch()
    const {showMessage, message} = useSelector((state:{instructorState:InstructorState[], instructorOption:optionState }) => state.instructorOption)

    useEffect(() => {
      setTimeout(() => {
        dispatch(hideMessage())
      }, 3000)
    },[message])


  return (
    <>
      {showMessage && <div className="text-white bg-[#0BCA7A] text-center py-3 font-medium text-sm">{message}</div>}
    </>
  )
}

export default Message