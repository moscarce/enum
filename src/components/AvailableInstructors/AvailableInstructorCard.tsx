import Table from '@mui/joy/Table';
import IconButton from '@mui/joy/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { Sheet } from '@mui/joy';
import { hideModal, setMessage, setShowOptions, showModal } from '@/src/store/instructorOptionSlice';
import AlertDialogModal from '../Modal/AlertDialogModal';
import { removeInstructor } from '@/src/store/instructorSlice';

interface InstructorState {
  name: string;
  email: string;
  course: string;
  status: string;
  dateAdded: string;
  lastActivity: string;
}

interface OptionState {
  showOptions: boolean;
  showModal: boolean;
  selectedRow: number | null;
  showMessage: boolean;
  message: string;
}

const AvailableInstructorCard = () => {
  const instructors = useSelector((state: { instructorState: InstructorState[], instructorOption: { showOptions: boolean } }) => state.instructorState);
  const { showOptions, selectedRow } = useSelector((state: { instructorState: InstructorState[], instructorOption: OptionState }) => state.instructorOption);
  const dispatch = useDispatch();

  const handleDelete = (index: number | null) => {
    dispatch(removeInstructor(index));
    dispatch(hideModal());
    dispatch(setMessage('Instructor successfully removed'));
  };

  return (
    <div>
      <div className='max-md:hidden'>
        <Sheet sx={{
          height: 500,
          overflow: 'auto',
          scrollbarWidth: 'thin',
          scrollbarColor: '#888 #f5f5f5',
          overflowX: 'hidden',
        }}>
          <Table sx={{
            '& tr > *:last-child': {
              textAlign: 'right'
            },
            "--TableCell-paddingY": "25px"
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
              {instructors?.map((instructor, index) => (
                <tr key={index} style={{ borderBottom: 'none' }}>
                  <td>
                    <div className='flex items-center justify-start gap-2'>
                      <img src="/assets/images/avatar.png" alt="" />
                      <div>
                        <p className='text-lg font-medium'>{instructor.name}</p>
                        <span className='text-[#D0DCE4] font-normal'>{instructor.email}</span>
                      </div>
                    </div>
                  </td>
                  <td><p className='font-medium'>{instructor.course}</p></td>
                  <td><p className='font-medium'>{instructor.status}</p></td>
                  <td><p className='font-medium'>{instructor.dateAdded}</p></td>
                  <td><p className='font-medium'>{instructor.lastActivity}</p></td>
                  <td>
                    <div className='relative'>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </div>
      <div className='hidden max-md:block'>
        {instructors?.map((instructor, index) => (
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
      <AlertDialogModal handleClick={() => { handleDelete(selectedRow) }} />
    </div>
  );
};

export default AvailableInstructorCard;
