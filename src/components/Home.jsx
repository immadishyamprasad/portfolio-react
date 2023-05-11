import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[820px] h-full flex space-y-2 p-10 flex-col mx-auto justify-center'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl font-bold  sm:text-5xl text-[#ccd6f6]'>Shyam Immadi</h1>
            <h2 className='text-4xl font-bold  sm:text-5xl text-[#8892b0]'>I'm a Web Developer</h2>
            <p className='pb-[16px] max-w-[700px] text-[#8892b0]'> I'm a web developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive  web applications.</p>
          <Link  to="works" className='curser-pointer' smooth={true} duration={500}><button className=' flex group items-center space-x-3  border-2 w-fit px-3 py-2 text-[#ccd6f6] border-[#ccd6f6] hover:bg-pink-600 hover:border-pink-600'><span>View Work</span> <HiArrowNarrowRight className='group-hover:rotate-90  duration-300' /> </button></Link>
        </div>
    </div>
  )
}

export default Home