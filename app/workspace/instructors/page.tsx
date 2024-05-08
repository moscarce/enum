'use client'
import AvailableInstructors from "@/src/components/AvailableInstructors/AvailableInstructors"
import Navbar from "@/src/components/Navbar/Navbar"
import NoInstructor from "@/src/components/NoInstructor/NoInstructor"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"


interface InstructorState {
  name: string;
  email: string;
  course: string;
  status: string;
  dateAdded: string;
  lastActivity: string;
}

const Instructors = () => {

  const router = useRouter();

  const instructors = useSelector((state:{instructorState:InstructorState[], instructorOption:{showOptions: boolean}, email:any }) => state.instructorState)

  
  
  return (
    <div>
        {instructors.length < 1 ?<div>
            <NoInstructor router={router}/>
        </div>:
        <div>
          <AvailableInstructors router={router}/>
        </div>}
    </div>
  )
}

export default Instructors