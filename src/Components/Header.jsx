import React, { use, useState } from 'react'
import { menuItems } from './Constant'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';



function Header() {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const navigate=useNavigate();

    return (
        <div className="flex items-center shadow-sm px-5 py-2 justify-between max-w-full sticky top-0 bg-[#cdcdcc] ">
            {/* Logo */}
            <div className="font-bold text-md   md:text-2xl">
                <p className='hidden md:flex'>TechSphere Blog</p>
                <p className='flex md:hidden'>TBlog</p>
            </div>

            {/* Menu */}
            <div className="items-center space-x-6 hidden md:flex" >
                {menuItems.map((item, key) => (
                    <div key={key}
                        className="cursor-pointer text-lg hover:shadow-md px-2 py-1 rounded-md"
                    >
                        {item.link.startsWith('#') ? <a href={item.link}  > {item.name}</a> : <a  onClick={()=>navigate(item.link)}> {item.name}</a>}
                    </div>
                    
                ))}
            </div>
            {/* menu for mobile */}
            <div className='md:hidden'>
               
                {toggle ? <RxCross2 className='text-2xl md:hidden cursor-pointer' onClick={handleToggle} /> : <IoMenu className='text-2xl md:hidden cursor-pointer' onClick={handleToggle} />}
                
                {toggle && <div className='absolute top-12 right-5 bg-[#cdcdcc] shadow-lg px-5 py-3 rounded-md'>
                    {menuItems.map((item, key) => (
                        <div key={key} className='cursor-pointer text-lg px-4py-2 hover:underline '>
                            <p onClick={handleToggle}>{item.name}</p>
                        </div>
                    ))}


                </div>}
            </div>

        </div>
    )
}

export default Header
