import React, { useState } from 'react'
import { FaBars, FaBomb, FaDribbble, FaFacebook, FaTwitter, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom'
import Model from './Model';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const[isModelOpen,setIsModelOpen]=useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    //model details

    function openModel()
    {
        setIsModelOpen(true);
    }

    function closeModel()
    {
        setIsModelOpen(false);

    }

    return (
        <header className='bg-black text-white '>
            <nav className='px-4 py-4 flex justify-between max-w-7xl mx-auto items-center'>

                <Link to="/" className='text-xl font-bold text-white items-center'>Designt<span className='text-orange-500'>Dk</span>

                </Link>

                <ul className='md:flex gap-12 text-lg hidden'>
                    <NavLink to="/" className='text-white'>Home</NavLink>
                    <NavLink to="/services" className='text-white'>Services</NavLink>
                    <NavLink to="/about" className='text-white'>About</NavLink>
                    <NavLink to="/blogs" className='text-white'>Blogs</NavLink>
                    <NavLink to="/contact" className='text-white'>Contact</NavLink>
                </ul>

                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <NavLink to="/" className='hover:text-orange-400'><FaFacebook /></NavLink>
                    <NavLink to="/" className='hover:text-orange-400'><FaDribbble /></NavLink>
                    <NavLink to="/" className='hover:text-orange-400'><FaTwitter /></NavLink>
                    <button onClick={openModel} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Login</button>
                </div>

                {/*our model component is here*/ }
                <Model isOpen={isModelOpen} onClose={closeModel} />

                {/* mobile menu btn,display mobile screen */}
                <div className='md:hidden block'>
                    <button onClick={toggleMenu} className='cursor-pointer' >
                        {
                            isMenuOpen ? <FaXmark /> : <FaBars />
                        }
                    </button>
                </div>



            </nav>
            {/* 
            Menu items only for mobile */}

            {isMenuOpen ? <div>
                <ul className={`md:hidden gap-12 text-lg space-y-4 px-4 py-6 flex flex-col bg-white mt-14 ${isMenuOpen?'fixed top-0 left-0 w-full transition-all ease-out duration-150':'hidden'}`}>
                    <NavLink onClick={toggleMenu} to="/" className='text-black '>Home</NavLink>
                    <NavLink to="/services" className='text-black'>Services</NavLink>
                    <NavLink onClick={toggleMenu} to="/contact" className='text-black'>Contact</NavLink>
                    <NavLink onClick={toggleMenu} to="/about" className='text-black'>About</NavLink>
                    <NavLink to="/blogs" className='text-black'>Blogs</NavLink>
                    <NavLink onClick={toggleMenu} to="/contact" className='text-black'>Contact</NavLink>
                </ul>
            </div> : ''}

        </header>
    )
}

export default Navbar
