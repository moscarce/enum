import { Input } from "@mui/joy";
import InviteInstructorButton from "../shared/InviteInstructorButton/InviteInstructorButton";
import SearchIcon from '@mui/icons-material/Search';
import AvailableInstructorCard from "./AvailableInstructorCard";
import { useDispatch } from "react-redux";
import { findInstructor } from "@/src/store/instructorSlice";

interface Props {
  router: any;
}

const AvailableInstructors = ({ router }: Props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between w-full items-center max-md:flex-col-reverse max-md:gap-3">
        <div className=" self-start">
          <h1 className="font-semibold text-3xl max-md:text-xl">Instructors</h1>
          <h3 className="font-semibold text-lg text-[#475661]">You have a total of 30 instructors</h3>
        </div>
        <div className="flex gap-5 max-md:flex-col-reverse">
          <Input
            size="lg"
            startDecorator={<SearchIcon />}
            placeholder="Search for an instructor"
            onChange={(e) => dispatch(findInstructor(e.target.value))}
            sx={{ width: '450px', '@media (max-width: 768px)': { width: '350px' } }}
          />
          <InviteInstructorButton router={router} />
        </div>
      </div>
      <div className="pt-20 px-10 max-md:px-4">
        <AvailableInstructorCard />
      </div>
    </div>
  );
}

export default AvailableInstructors;
