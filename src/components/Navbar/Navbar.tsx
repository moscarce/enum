import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav>
        <Link href='/'>
            <img src="/assets/images/logo.png" alt="" />
        </Link>
        <div>
            <Link href='/'>
                Home
            </Link>
        </div>

    </nav>
  )
}

export default Navbar