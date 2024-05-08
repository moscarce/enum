import { Sheet } from '@mui/joy';
import Table from '@mui/joy/Table';
import React from 'react';
import { Input } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import AvailableInstructorCard from "./AvailableInstructorCard";
import InviteInstructorButton from "../shared/InviteInstructorButton/InviteInstructorButton";
import { useDispatch, useSelector } from "react-redux";
import { findInstructor } from "@/src/store/instructorSlice";
import { hideModal,setShowOptions,setMessage, showModal } from '@/src/store/instructorOptionSlice';
import { removeInstructor } from '@/src/store/instructorSlice';
import IconButton from '@mui/joy/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlertDialogModal from '../Modal/AlertDialogModal';


interface InstructorState {
  name: string;
  email: string;
  course: string;
  status: string;
  dateAdded: string;
  lastActivity: string;
}

interface Props {
  router: any;
}

interface OptionState {
  showOptions: boolean;
  showModal: boolean;
  selectedRow: number | null;
  showMessage: boolean;
  message: string;
  index?: number;
}

const AvailableInstructors = ({ router }: Props) => {
  const dispatch = useDispatch();
  const {searchBy, instructorsList} = useSelector((state: { instructorState: {searchBy:string, instructorsList:InstructorState[]}, instructorOption: OptionState }) => state.instructorState);

  const { showOptions, selectedRow } = useSelector((state: { instructorState: InstructorState[], instructorOption: OptionState }) => state.instructorOption);

  const handleShowOptions = (index?: number) => {
    dispatch(setShowOptions(index));
  };

  const handleDelete = (index: number | null) => {
    dispatch(removeInstructor(index));
    dispatch(hideModal());
    dispatch(setMessage('Instructor successfully removed'));
  };
  console.log(searchBy);
  
  return (
    <div>
      <div className="flex justify-between w-full items-center max-md:flex-col-reverse max-md:gap-8 px-10 max-md:px-0 max-md:pt-5">
        <div className="self-start">
          <h1 className="font-semibold text-3xl max-md:text-xl">Instructors</h1>
          <h3 className="font-semibold text-lg text-[#475661]">You have a total of {instructorsList?.length} instructors</h3>
        </div>
        <div className="flex gap-6 max-md:flex-col-reverse max-md:self-start">
          <Input
            size="lg"
            startDecorator={<SearchIcon />}
            placeholder="Search for an instructor"
            onChange={(e) => dispatch(findInstructor(e.target.value))}
            sx={{ width: '366px', '@media (max-width: 768px)': { width: '321px' } }}
          />
          <InviteInstructorButton router={router} />
        </div>
      </div>
      <div className="pt-10 px-10 max-md:px-4 max-md:pt-10">
        <div className='max-md:hidden'>
          <Sheet sx={{
            height: 500,
            overflow: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: '#888 #f5f5f5',
            overflowX: 'hidden',
            "bgcolor": 'white'
          }}>
            <Table sx={{
              '& tr > *:last-child': {
                textAlign: 'right'
              },
              "--TableCell-paddingY": "25px",
              "bgcolor": 'white',
              borderCollapse: 'collapse'
            }}
              stickyHeader
            >
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>INSTRUCTOR</th>
                  <th style={{ width: '15%' }}>COURSE</th>
                  <th style={{ width: '15%' }}>STATUS</th>
                  <th style={{ width: '15%' }}>DATE ADDED</th>
                  <th style={{ width: '15%' }}>LAST ACTIVITY</th>
                  <th style={{ width: '5%' }}></th>
                </tr>
              </thead>
              <tbody>
                {instructorsList?.filter((instructor: any)=>{
                  return searchBy.toLowerCase() === '' 
                        ? instructor 
                        : instructor.name.toLowerCase().includes(searchBy.toLowerCase());
                }).map((instructor, index) => (
                  <AvailableInstructorCard
                    key={index}
                    instructor={instructor}
                    showOptions={showOptions}
                    selectedRow={selectedRow}
                    handleShowOptions={handleShowOptions}
                    handleDelete={handleDelete}
                    index={index}
                  />
                ))}
              </tbody>
            </Table>
          </Sheet>
        </div>
         <div className='hidden max-md:block'>
        {instructorsList?.filter((instructor: any)=>{
                  return searchBy.toLowerCase() === '' 
                        ? instructor 
                        : instructor.name.toLowerCase().includes(searchBy.toLowerCase());
                }).map((instructor, index) => (
          <div className='grid grid-cols-6 my-4 items-center'>
            <div><img src="/assets/images/avatar.png" alt="" /></div>
            <div className=' col-span-4'>
              <h2 className='font-semibold'>{instructor.name}</h2>
              <span className='text-[12px] font-medium text-[#D0DCE4]'>{instructor.email}</span>
              <p className='text-[12px] font-medium text-[#D0DCE4]'>{instructor.status}</p>
            </div>
            <div key={index} className='relative'>
              <IconButton onClick={() => dispatch(setShowOptions(index))}><MoreVertIcon /></IconButton>
              {showOptions && selectedRow === index && (
                <div>
                  <ul className='absolute top-6 right-[-20px] bg-white shadow-md rounded-md py-5 px-4 flex flex-col gap-2 z-10' style={{ whiteSpace: 'nowrap' }}>
                    <button className='hover:bg-[#C5E7FF] hover:border-2 hover:border-[#ADDBFC] hover:rounded cursor-pointer px-6 focus:outline-none'>Assign Instructor</button>
                    <button
                      className='hover:bg-[#C5E7FF] rounded hover:border-[#ADDBFC] hover:border-2 cursor-pointer px-6 focus:outline-none'
                      onClick={() => {
                        dispatch(showModal());
                        dispatch(setShowOptions(index));
                      }}
                      >
                      Remove Instructor
                    </button>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
      <AlertDialogModal handleClick={() => handleDelete(selectedRow)} />
    </div>
  );
}

export default AvailableInstructors;
