
import Image from 'next/image';
import InviteInstructorButton from '../shared/InviteInstructorButton/InviteInstructorButton';

interface Props {
  router: any;
}

const NoInstructor = ({ router }: Props) => {

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div>
        <Image src="/assets/images/NoInternet.png" alt="" width={300} height={300}/>
      </div>
      <h3 className="font-bold mt-[-50px]">Empty Space</h3>
      <p className="my-4 max-md:text-sm text-center">No instructor has been invited, let’s get <br /> you started by clicking the button below</p>
      <InviteInstructorButton  router={router}/>
    </div>
  );
};

export default NoInstructor;
