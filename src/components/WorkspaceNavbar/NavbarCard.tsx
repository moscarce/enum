'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react";

interface NavbarCardProps {
    link: string;
    name: string;
    icon: ReactNode;
}

const NavbarCard = ({link, name, icon}: NavbarCardProps) => {
    const pathname = usePathname()
    const isActive = pathname.startsWith(link)
  return (
        <Link href={link}>
          <div className={`${isActive ? 'bg-[#F6FCFF] font-bold text-[#008EEF] rounded-3xl' : ''} flex px-6 pr-12 mb-7 py-2 items-center gap-3 max-md:hidden`}>
            <div>{icon}</div>
            <p>{name}</p>
          </div>
        </Link>
  )
}

export default NavbarCard