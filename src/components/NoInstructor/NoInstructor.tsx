import Image from 'next/image'
import FilledButton from '../shared/FilledButton/FilledButton'

const NoInstructor = () => {
  return (
    <div className="flex flex-col items-center justify-center pl-[30rem]">
        <div>
            <img src="/assets/images/NoInternet.png" alt="" />
        </div>
        <h3 className='font-bold mt-[-50px]'>Empty Space</h3>
        <p className='my-4'>No instructor has been invited, let’s get <br/> you started by clicking the button below</p>
        <FilledButton message={'Invite Instructors'}/>
    </div>
  )
}

export default NoInstructor