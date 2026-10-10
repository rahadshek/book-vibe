import Link from 'next/link';
import React from 'react';
import logo from '@/assets/book.ico'
import Image from 'next/image'


const Navbar = () => {
const links = (
  <>
  <li><Link href={'/'}>Home</Link></li> 
 <li><Link href={'/'}>Listed Books</Link></li> 
 <li><Link href={'/'}>Page to Read</Link></li> 
 
  </>
 
)
    return (
      <nav className=' sticky top-0 z-50 bg-base-100 shadow-sm' >
       <div className="navbar container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div >
    <div className='flex items-center gap-2 mx-auto lg:mx-0 ' >
      <Image src={logo} alt='logo' width={60} height={60} />
      <h2 className=' text-lg font-semibold hidden  lg:block' >Book Vide</h2>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
   
   <Link href={'/'} className="btn bg-[#23be0a] text-white  rounded-lg "> Sign In</Link>
   <Link href={'/'} className="btn bg-[#59c6d2] text-white  rounded-lg "> Sign Up</Link>

  </div>

  
</div>
</nav>
    );
  };
export default Navbar;