'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';



const Navbar = () => {
    const pathname = usePathname();
    
    const navLink = [
        {link: '/home', title: 'Home', icon: <HomeOutlinedIcon/>},
        {link: '/workspace', title: 'Workspace', icon: <AssuredWorkloadOutlinedIcon/>},
        {link: '/resourceslibrary', title: 'Resources Library', icon: <LocalLibraryOutlinedIcon/>},
    ]
  return (
    <div className="flex justify-between items-center pt-7 px-20 font-bold max-md:flex max-md:justify-between max-md:px-4">
        <Link href='/'>
            <img src="/assets/images/logo.png" alt="" />
        </Link>
        <div className="max-md:bg-white max-md:z-50 max-md:opacity-100 flex text-[17px] gap-8 max-md:fixed max-md:bottom-0 max-md:justify-between max-md:left-0 max-md:right-0 max-md:p-4 max-md:text-[#9CABB5] max-md:shadow-2xl max-md:shadow-[#008EEF]">
            {navLink.map((item, index) => {
                const isActive = pathname.startsWith(item.link)                
                return <>
                    <div className='max-md:hidden' key={index}>
                    <Link 
                        href={item.link} 
                        key={index}
                        className={`${isActive ? 'active' : ''}`}
                    >
                        {item.title}
                    </Link>
                        {isActive && <div className="active-underline | bg-[#008EEF]"></div>}
                    </div>

                    <div className="hidden max-md:block ">
                        <Link
                            href={item.link}
                            key={index}
                            className="text-[12px] flex flex-col items-center gap-1"
                            >
                            <div>{item.icon}</div>
                            <p>{item.title}</p>
                        </Link>
                    </div>
                </>})
            }
        </div>
        <div className="flex gap-5 items-center">
            <div className="relative cursor-pointer">
                <NotificationsOutlinedIcon />
                <p className=" absolute top-[-3px] right-[-2px] text-white bg-[#008EEF] rounded-full p-1 px-[0.4rem] text-[7px] font-bold">1</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
                    <img src="/assets/images/user.png" alt="" />
                <div className="flex items-center font-normal gap-4 max-md:hidden">
                    <p>Onomowa</p>
                    <img src="/assets/images/chevron-down.png" alt="" />
                </div>
            </div>
            <div className="max-md:hidden cursor-pointer">
                <img src="/assets/images/grid.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar