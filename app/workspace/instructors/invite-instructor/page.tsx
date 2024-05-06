'use client'
import React, { useState } from 'react';
import { Input } from '@mui/joy';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setMessage } from '@/src/store/instructorOptionSlice';
import { useRouter } from "next/navigation"


const InviteInstructor: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [emails, setEmails] = useState<string>('');
  const [emailList, setEmailList] = useState<{ email: string; isValid: boolean }[]>([]);

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmails(event.target.value);
    if (event.target.value.includes(',')) {
      handleComma();
    }
  };

  const handleComma = () => {
    const newEmails = emails.split(',').map(email => ({ email: email.trim(), isValid: validateEmail(email.trim()) }));
    setEmailList([...emailList, ...newEmails]);
    setEmails('');
  };

  const handleInviteClick = () => {
    setEmailList([]);
    setEmails('');
    dispatch(setMessage('Invite Successfully Sent'))
    router.push('/workspace/instructors');

  };

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h2 className='font-semibold text-4xl'>Invite Instructors</h2>
      <Input 
        size="lg" 
        placeholder="Email, comma separated" 
        sx={{width: '500px','@media (max-width: 768px)': { width: '350px' }}} 
        value={emails}
        onChange={handleInputChange}
      />
      <div>
        {emailList.map((emailObj, index) => (
          <div key={index} className={`border-4 rounded-2xl px-8 py-1 font-medium ${emailObj.isValid ? 'border-blue-500' : 'border-red-500'} my-2`}>
            {emailObj.email}
          </div>
        ))}
      </div>
      <div>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#008EEF', 
            padding: '10px 30px', 
            borderRadius: '10px',
          }} 
          onClick={handleInviteClick}
          disabled={emailList.length === 0 && !emails.trim()}
        >
          Send Invite
        </Button>
      </div>
    </div>
  );
};

export default InviteInstructor;
