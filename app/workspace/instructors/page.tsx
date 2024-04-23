import AvailableInstructors from "@/src/components/AvailableInstructors/AvailableInstructors"
import Navbar from "@/src/components/Navbar/Navbar"
import NoInstructor from "@/src/components/NoInstructor/NoInstructor"


const Instructors = () => {
  return (
    <div>
        {/* <div>
            <NoInstructor/>
        </div> */}
        <div>
          <AvailableInstructors />
        </div>
    </div>
  )
}

export default Instructors