import React from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import Logo from '../assets/brand-logo1.png'
import { useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const handleClick = ()=>{
    setNav(!nav);
    
  }

  return (
    <div className='fixed px-10 w-full h-[80px] flex justify-between items-center bg-[#0a192f]'>
        {/*brand-logo*/}
        <div>
            <img className=' logo' src={Logo} alt="" />
        </div>
        {/*nav-items*/}
        <div className='hidden md:block text-white '>
            <ul className='flex space-x-6 text-[16px]'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        
        {/*mobile-navbar*/}
        {nav && <div >
            <ul className='fixed top-0 left-0 z-20  bg-[#0a192f] w-full h-screen text-white flex flex-col justify-center items-center space-y-6 text-3xl'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>}
        {/*side-nav*/}
        <div className='hidden md:flex flex-col fixed left-0 text-white  top-[35%]'>
            <ul>
                <li className='flex w-[160px] ml-[-108px] hover:ml-[0px] duration-300 h-[50px]  justify-between items-center  bg-blue-600 text-lg' >
                    <span >LinkedIn</span>
                    <FaLinkedin size={25} />
                </li>
                <li className='flex w-[160px] ml-[-108px] hover:ml-[0px] duration-300 h-[50px]  justify-between items-center  bg-[#333333] text-lg' >
                    <span >GitHub</span>
                    <FaGithub size={25} />
                </li>
                <li className='flex w-[160px] ml-[-108px] hover:ml-[0px] duration-300 h-[50px]  justify-between items-center  bg-[#6fc2b0] text-lg' >
                    <span >E-Mail</span>
                    <HiOutlineMail size={25} />
                </li>
                <li className='flex w-[160px] ml-[-108px] hover:ml-[0px] duration-300 h-[50px]  justify-between items-center  bg-[#565f69] text-lg' >
                    <span >Resume</span>
                    <BsFillPersonLinesFill size={25} />
                </li>
                
                
            </ul>

        </div>

        {/*hamburger*/}
        <div onClick={()=> handleClick()} className='md:hidden z-20 text-white'>
            {!nav ? <FaBars size={22} />:<FaTimes size={22}/>}
        </div>
        
    </div>
  )
}

export default Navbar