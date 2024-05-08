'use client'
import React, { useState } from 'react';
import { Input } from '@mui/joy';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';
import { setMessage } from '@/src/store/instructorOptionSlice';
import { useRouter } from "next/navigation"
import { addEmail } from '@/src/store/emailSlice';
import { addInstructor } from '@/src/store/instructorSlice';


interface InstructorState {
  name: string;
  email: string;
  course: string;
  status: string;
  dateAdded: string;
  lastActivity: string;
}

const InviteInstructor: React.FC = () => {

  const [email, setEmail] = useState('')
  const emails = useSelector((state:{instructorState:InstructorState[], instructorOption:{showOptions: boolean}, email:{email: string, isValid: boolean}[] }) => state.email)

  const router = useRouter();
  const dispatch = useDispatch();

  const handleInputChange = (e:any ) => {
    setEmail(e.target.value)
  }
 
  
  

  const handleInviteClick = () => {
    emails.length > 0 && dispatch(setMessage('Invite successfully sent'))
    emails.length > 0 && dispatch(addInstructor(emails))
    emails.length === 0 &&dispatch(addEmail(email))
    emails.length > 0 && router.push('/workspace/instructors')
  }



  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h2 className='font-semibold text-4xl max-md:text-2xl'>Invite Instructors</h2>
      {emails.length === 0 && <Input 
        size="lg" 
        placeholder="Email, comma separated" 
        sx={{width: '500px','@media (max-width: 768px)': { width: '350px' }}} 
        onChange={(e)=>handleInputChange(e)}
      />}
      {emails.length > 0 && <div className='border-2 border-[#D0DCE4] px-4 py-3 grow-0'>
        {emails.map((emailObj, index) => (
          <div key={index} className={`border-[1px] rounded-3xl px-3 py-1 font-bold text-sm ${emailObj.isValid ? 'border-blue-500 text-blue-500' : 'border-red-500 text-red-500'} my-2`}>
            {emailObj.email}
          </div>
        ))}
      </div>}
      <div>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#008EEF', 
            padding: '12px 24px', 
            borderRadius: '8px',
          }} 
          onClick={handleInviteClick}
          disabled={emails.length === 0 && email.trim().length === 0}
        >
          Send Invite
        </Button>
      </div>
    </div>
  );
};

export default InviteInstructor;
