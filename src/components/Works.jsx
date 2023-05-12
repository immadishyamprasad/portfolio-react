import React from 'react'

import dawnblog from '../assets/projects/two.png'




const Works = () => {
  return (
    <div name="works" className="w-full h-full md:h-screen bg-[#0a192f] text-[#ccd6f6]">
        <div className=" px-10  pt-30 md:pt-0 max-w-[850px] mx-auto space-y-6 flex flex-col justify-center w-full h-full">
            
            <div>
                <h1 className="text-4xl font-bold border-b-4 inline border-pink-600">
                    Works
                </h1>
                <p className='py-4'>// Check out some of my recent works</p>
            </div>
            <div className='w-full font-sans px-16 sm:px-18 md:px-0 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${dawnblog})`,backgroundPosition:'left'}}  className=" shadow-md rounded-md  group shadow-black content-div">
                    <div className='w-full h-full opacity-0 group-hover:opacity-100 flex flex-col justify-center '>
                        <div className='text-[17px] text-center  pb-8 font-bold text-white'>
                            Django Application
                        </div>
                        <div className='flex mx-auto justify-center space-x-6'>
                            <a href="https://immadishyamprasad.pythonanywhere.com/" target='blank'>
                                <button className='p-4 py-2 bg-white rounded-md text-black text-[14px] font-semibold'>Demo</button>
                                
                            </a>
                            <a href="/">
                                
                                <button className='p-4 py-2 bg-white rounded-md text-black text-[14px] font-semibold'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Works