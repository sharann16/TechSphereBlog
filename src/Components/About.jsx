import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



function About() {
  return (
    <div id='about'>
        <div className='flex justify-center w-full  mt-20 bg-[#cdcdcc] max-h-fit rounded-2xl scroll-mt=24'>
            
            <div className='col-span-3 flex flex-col space-y-3 max-h-fit'> 
                <h3 className='text-xl font-bold underline underline-offset-4 flex justify-center'> About   TechSphere Blogs</h3>
                <p className='tracking-wider mt-5'>Insightful Reads is a platform created to share thought-provoking articles, expert 
                    opinions, and fresh ideas across technology, lifestyle, and personal growth.</p>
                <p className='tracking-wider'>Our mission is to deliver content that inspires learning, sparks curiosity, and 
                    encourages meaningful discussions in a simple and accessible way.</p>
                <p className='tracking-wider'>Founded in 2025 as a simple idea-sharing project, Insightful Reads has grown into
                    a space where curious minds come together to explore knowledge and ideas.</p>
            </div>      
        </div>

        <div className='flex justify-center items-center gap-10 mt-10 mb-5' id='contact'>
              <p>© 2025 Techsphere Reads. All rights reserved.</p>
              <div className='flex space-x-5 text-xl'>
                  <FaXTwitter className='cursor-pointer'/>
                  <FaInstagram className='cursor-pointer' />
                  <MdOutlineEmail className='cursor-pointer' />

              </div>

        </div>
    </div>
  )
}

export default About
