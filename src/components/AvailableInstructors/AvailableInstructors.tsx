import { Input } from "@mui/joy"
import InviteInstructorButton from "../shared/InviteInstructorButton/InviteInstructorButton";
import SearchIcon from '@mui/icons-material/Search';
import AvailableInstructorCard from "./AvailableInstructorCard";


interface Props {
  router: any;
}

const AvailableInstructors = ({ router }: Props) => {
  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <div>
          <h1 className="font-semibold text-3xl">Instructors</h1>
          <h3 className="font-semibold text-lg">You have a total of 30 instructors</h3>
        </div>
        <div className="flex gap-10">
          <Input size="lg" startDecorator={<SearchIcon />} placeholder="Search for an instructor" />
          <InviteInstructorButton router={router} />
        </div>
      </div>
      <div className="pt-20 px-10">
        <AvailableInstructorCard />
      </div>

    </div>
  )
}

export default AvailableInstructors