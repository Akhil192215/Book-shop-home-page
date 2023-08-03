import {useState} from "react";
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar: React.FC = () => {
    const [nav,setNav] = useState<boolean>(true)
  return (
    <div className=" bg-primary  ">

    <div className="flex justify-between w-[65%] m-auto pt-[3rem] items-center   ">
      <div  className="flex gap-3 items-center ">
        <img
          alt=""
          src="/logo.svg"
        />
        <h2 className="text-[2rem] font-bold text-white" >
          Pages
        </h2>
      </div>
      <div>
      <div
        className="cursor-pointer pr-4 z-10   text-[#ccac69] md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      </div>
       <div className="hidden md:flex gap-6 items-center ">
        <ul className="flex gap-5 text-white">
          <li>Home</li>
          <li>about</li>
          <li>Services</li>
          <li>Appointment</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      <div>
        <button className="bg-secondary px-[25px] py-[8px] text-primary" > Order Today</button>
      </div>
      </div>
    </div>
   { !nav &&<div className="hidden md:flex gap-6 items-center">
        <ul className="flex gap-5 text-white">
          <li>Home</li>
          <li>about</li>
          <li>Services</li>
          <li>Appointment</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      <div>
        <button className="bg-secondary px-[25px] py-[8px] text-primary" > Order Today</button>
      </div>
      </div>}
    </div>

    
  );
}

export default Navbar;
