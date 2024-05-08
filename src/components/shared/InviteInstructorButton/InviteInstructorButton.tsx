import React from 'react'
import Button from '@mui/material/Button';


interface Props {
  router: any;
}

const InviteInstructorButton = ({ router }: Props) => {
  const handleClick = () => {
    router.push('/workspace/instructors/invite-instructor');
  };
  return (
    <div><Button variant="contained" sx={{ backgroundColor: '#008EEF', padding: '12px 24px', borderRadius: '8px' }} onClick={handleClick}>Invite Instructors</Button></div>
  )
}

export default InviteInstructorButton