import Image from "next/image"
import NavbarCard from "./NavbarCard"

const WorkspaceNavbar = () => {
    
    const navLink = [
        {link:'/workspace/cohorts', name: 'Cohorts', icon: '/assets/images/workusers.png'},
        {link:'/workspace/programs', name: 'Programs', icon: '/assets/images/briefcase(1).png'},
        {link:'/workspace/instructors', name: 'Instructors', icon: '/assets/images/book-open.png'},
        {link:'/workspace/learners', name: 'Learners', icon: '/assets/images/workuser.png'},
    ]
  return (
    <div>
        {
            navLink.map((item, index) =>(
                <NavbarCard link={item.link} name={item.name} icon={item.icon} key={index}/>
            ))
        }
    </div>
  )
}

export default WorkspaceNavbar