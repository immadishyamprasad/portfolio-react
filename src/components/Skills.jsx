import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div name="skills" className="w-full h-full sm:h-screen bg-[#0a192f] text-[#ccd6f6]">
        <div className=" px-10 max-w-[850px] mx-auto space-y-6 flex flex-col justify-center w-full h-full">
            
            <div>
                <h1 className="text-4xl font-bold border-b-4 inline border-pink-600">
                    Skills
                </h1>
                <p className='py-6'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full font-sans grid grid-cols-2 sm:grid-cols-4 gap-6'>
                <div className='shadow-md  text-center shadow-black hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-16 mx-auto py-2' src={HTML} alt="" />
                    <p className='py-2'>Html</p>

                </div>
                <div className='shadow-md text-center shadow-black hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-16 mx-auto py-2' src={CSS} alt="" />
                    <p className='py-2'>Css</p>

                </div>
                <div className='shadow-md text-center shadow-black hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-16 mx-auto py-2' src={JavaScript} alt="" />
                    <p className='py-2'>JavaScript</p>

                </div>
                <div className='shadow-md text-center shadow-black hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-16 mx-auto py-2' src={ReactImg} alt="" />
                    <p className='py-2'>React</p>

                </div>
                <div className='shadow-md text-center shadow-black hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-16 mx-auto py-2' src={Tailwind} alt="" />
                    <p className='py-2'>TailWind</p>

                </div>
                <div className='shadow-md text-center shadow-black hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-16 mx-auto py-2' src={GitHub} alt="" />
                    <p className='py-2'>GitHub</p>

                </div>
                

                
            </div>
        </div>
    </div>
  )
}

export default Skills