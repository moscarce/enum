'use client'
import NavbarCard from "./NavbarCard"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useRouter,usePathname } from 'next/navigation';


const WorkspaceNavbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    
    const navLink = [
        {link:'/workspace/cohorts', name: 'Cohorts', icon: <PeopleAltOutlinedIcon />},
        {link:'/workspace/programs', name: 'Programs', icon: <MenuBookOutlinedIcon />},
        {link:'/workspace/instructors', name: 'Instructors', icon: <WorkOutlineOutlinedIcon />}, 
        {link:'/workspace/learners', name: 'Learners', icon: <PersonOutlineOutlinedIcon />}, //
    ];

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLink = event.target.value;
        router.push(selectedLink);
    };

    return (
        <div className="mb-4">
            <div className="max-md:hidden">
                {
                    navLink.map((item, index) => (
                        <NavbarCard link={item.link} name={item.name} icon={item.icon} key={index}/>
                    ))
                }
            </div>
            <div className="hidden max-md:block">
                <select
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={pathname}
                    aria-label="Navigate to"
                >
                    {navLink.map(({ link, name, icon }, index) => (
                        <option key={index} value={link}>
                         {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default WorkspaceNavbar;
