import React from 'react'
import { Input } from '@mui/joy'

const InviteInstructor = () => {
  return (
    <div>
      <h2 className='font-semibold text-4xl'>Invite Instructors</h2>
      <Input size="lg" placeholder="Email , comma separated" />
    </div>
  )
}

export default InviteInstructor