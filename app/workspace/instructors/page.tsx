'use client'
import AvailableInstructors from "@/src/components/AvailableInstructors/AvailableInstructors"
import Navbar from "@/src/components/Navbar/Navbar"
import NoInstructor from "@/src/components/NoInstructor/NoInstructor"
import { useRouter } from "next/navigation"


const Instructors = () => {

  const router = useRouter();

  return (
    <div>
        {/* <div>
            <NoInstructor router={router}/>
        </div> */}
        <div>
          <AvailableInstructors router={router}/>
        </div>
    </div>
  )
}

export default Instructors