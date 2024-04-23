'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"



const Navbar = () => {
    const pathname = usePathname();
    
    const navLink = [
        {link: '/', title: 'Home'},
        {link: '/workspace', title: 'Workspace'},
        {link: '/resourceslibrary', title: 'Resources Library'},
    ]
  return (
    <div className="flex justify-between items-center pt-7 px-20 font-bold">
        <Link href='/'>
            <img src="/assets/images/logo.png" alt="" />
        </Link>
        <div className="flex text-[17px] gap-8">
            {navLink.map((item, index) => {
                const isActive = pathname.startsWith(item.link)                
                return <div>
                <Link 
                    href={item.link} 
                    key={index}
                    className={`${isActive ? 'active' : ''}`}
                >
                    {item.title}
                </Link>
                    {isActive && <div className="active-underline | bg-[#008EEF]"></div>}
                </div>})
            }
        </div>
        <div className="flex gap-5 items-center">
            <div className="relative">
                <img src="/assets/images/bell.png" alt="" />
                <p className=" absolute top-[-3px] right-[-2px] text-white bg-[#008EEF] rounded-full p-1 px-[0.4rem] text-[7px] font-bold">1</p>
            </div>
            <div className="flex items-center gap-3">
                    <img src="/assets/images/user.png" alt="" />
                <div className="flex items-center font-normal gap-4">
                    <p>Onomowa</p>
                    <img src="/assets/images/chevron-down.png" alt="" />
                </div>
            </div>
            <div>
                <img src="/assets/images/grid.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar