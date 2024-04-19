import Image from "next/image"

const Hero = () => {
  return (
    <div className="hero-container | py-14 px-16 font-bold">
        <div className="bg-white bg-opacity-60 w-52 p-2 rounded flex flex-col justify-center items-center gap-2">
            <div className="flex items-center gap-2">
                <p className="text-white bg-[#8F47F4] px-2 text-xl border-[1px] rounded  ">S</p>
                <p>Semicolon Africa</p>
            </div>
            <div className="bg-white w-[100%] text-center py-2 rounded-md flex justify-center items-center gap-3">
                <p>View Profile</p>
                <img src="/assets/images/arrow-left.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero