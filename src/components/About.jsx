import React from 'react'

const About = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] ">
        <div className='flex flex-col w-full space-y-4 p-10 h-full justify-center '>
            <div className='max-w-[900px] w-full mx-auto grid grid-col-1 sm:grid-cols-2 gap-8 '>
                <div className=' mb-[20px] text-left md:text-right '>
                    <p className='  text-4xl border-b-4  border-pink-600 inline font-bold text-[#ccd6f6]'>About</p>
                </div>
                <div ></div>
            </div>
            <div className='max-w-[900px] w-full mx-auto grid grid-col-1 md:grid-cols-2 gap-8 '>
                <div className=' text-3xl font-bold text-left md:text-right text-[#ccd6f6]'>
                    <p>Hi. I'm Shyam Immadi, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className='text-[#ccd6f6] font-[16px]' >I am passionate about building excellent software that improves
                    the lives of those around me. I specialize in creating software
                    for clients ranging from individuals and small-businesses all the
                    way to large enterprise corporations. What would you do if you had
                    a software expert available at your fingertips?</p>  
                </div>
            </div>
        </div>

    </div>
  )
}

export default About