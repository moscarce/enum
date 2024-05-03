'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavbarCard = ({link, name, icon}:{link:string, name:string, icon: string}) => {
    const pathname = usePathname()
    const isActive = pathname.startsWith(link)
  return (
    <Link href={link}>
      <div className={`${isActive ? 'bg-[#F6FCFF] font-bold text-[#008EEF] rounded-3xl' : ''} flex px-6 pr-12 mb-7 py-2 items-center gap-3 max-md:hidden`}>
        <img src={icon} alt="" height='30px' width='30px' />
        <p>{name}</p>
      </div>
      <div className="hidden max-md:block">
        
      </div>
    </Link>
  )
}

export default NavbarCard