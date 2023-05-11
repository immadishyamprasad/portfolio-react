import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen  bg-[#0a192f] ">
      <div className="flex pt-20 px-10 flex-col max-w-[750px] mx-auto justify-center w-full h-full">
        <div className='py-2 text-[#ccd6f6]'>
          <h1 className="text-4xl font-bold border-b-4 inline border-pink-600">
            Contact
          </h1>
          <p className='py-4'>// Submit the form or write a email <span className='inline-block text-white float-right md:float-none '>- shyamimmadi7@gmail.com</span> </p>
         
        </div>
        <form className='w-full flex flex-col ' method='POST' action="https://getform.io/f/cbaf3ed6-1d01-419b-87e5-20d1427fdae2">
          <input name='name' type="text" className='w-full my-2 p-2 bg-[#ccd6f6]' placeholder='Name' />
          <input name='email' type="email" className='w-full my-2 p-2 bg-[#ccd6f6]' placeholder='Email' />
          <textarea name="message" className='p-2 my-2 w-full bg-[#ccd6f6]' id=""  rows="8" placeholder='Message' ></textarea>
          <button className=' my-3 mx-auto  border-2  px-3 py-2 text-[#ccd6f6] border-[#ccd6f6] hover:bg-pink-600 hover:border-pink-600 whitespace-nowrap '>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact