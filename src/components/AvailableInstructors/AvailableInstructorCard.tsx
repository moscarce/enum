// AvailableInstructorCard.js

import React from 'react';
import Table from '@mui/joy/Table';
import IconButton from '@mui/joy/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlertDialogModal from '../Modal/AlertDialogModal';
import { removeInstructor } from '@/src/store/instructorSlice';
import { useDispatch } from 'react-redux';
import { showModal, setShowOptions } from '@/src/store/instructorOptionSlice';


interface InstructorState {
  name: string;
  email: string;
  course: string;
  status: string;
  dateAdded: string;
  lastActivity: string;
}
interface InstructorProps {
  instructor: InstructorState;
  showOptions: boolean;
  selectedRow: number | null;
  index?: number;
  handleShowOptions: (index?: number) => void;
  handleDelete: (index: number | null) => void;
}

const AvailableInstructorCard = ({ instructor, showOptions, selectedRow, handleShowOptions, handleDelete, index }: InstructorProps) => {
  const dispatch = useDispatch();
  return (
    <tr key={instructor.email} style={{ borderBottom: 0 }}>
      <td style={{ borderBottom: 0, paddingBottom: 0 }}>
        <div className='flex items-center justify-start gap-2'>
          <img src="/assets/images/avatar.png" alt="" />
          <div>
            <p className='text-lg font-medium'>{instructor.name}</p>
            <span className='text-[#9CABB5] font-bold text-[12px]'>{instructor.email}</span>
          </div>
        </div>
      </td>
      <td style={{ borderBottom: 0, paddingBottom: 0 }}><p className='font-medium'>{instructor.course}</p></td>
      <td style={{ borderBottom: 0, paddingBottom: 0 }}><p className='font-medium'>{instructor.status}</p></td>
      <td style={{ borderBottom: 0, paddingBottom: 0 }}><p className='font-medium'>{instructor.dateAdded}</p></td>
      <td style={{ borderBottom: 0, paddingBottom: 0 }}><p className='font-medium'>{instructor.lastActivity}</p></td>
      <td style={{ borderBottom: 0, paddingBottom: 0 }}>
        <div className='relative'>
          <IconButton onClick={() => handleShowOptions(index)}><MoreVertIcon /></IconButton>
          {showOptions && selectedRow === index && (
            <div>
              <ul className='absolute top-6 right-[-20px] bg-white shadow-md rounded-md py-5 px-4 flex flex-col gap-2 z-10' style={{ whiteSpace: 'nowrap' }}>
                <button className='hover:bg-[#C5E7FF] hover:border-2 hover:border-[#ADDBFC] hover:rounded cursor-pointer px-6 focus:outline-none'>Assign Instructor</button>
                <button
                  className='hover:bg-[#C5E7FF] rounded hover:border-[#ADDBFC] hover:border-2 cursor-pointer px-6 focus:outline-none'
                   onClick={() => {
                                dispatch(showModal());
                                dispatch(setShowOptions(selectedRow));
                            }}
                >
                  Remove Instructor
                </button>
              </ul>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default AvailableInstructorCard;
