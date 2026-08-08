import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogOut, MessageSquare, Settings,Search, ShoppingCart, User } from 'lucide-react'
import { useAuthStore } from '../store/useAuthStore'

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
  //<header className='bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop'>
    <header className='bg-white/95 text-slate-900 border-b border-gray-200 fixed w-full top-0 z-40 backdrop-blur-md shadow-sm'>
    <div className='container mx-auto px-4 h-16'>
      
      <div className='flex items-center justify-between h-full'>
        {/*Left side with logo and title */}
        <div className='flex items-center gap-8'>
          <Link to = "/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
            <div className='size-12 rounded-lg bg-primary/10 flex items-center justify-center'>
              
              <img src="HCV_Logo.png" alt="" />
            </div>
            <h1 className='text-lg font-bold'>HCV Fashion Hub</h1>
          </Link>
        </div>

        {/*Center side with buttons */}

        <nav className="hidden md:flex items-center gap-10 uppercase text-xs tracking-widest font-medium">
  
          <NavLink to="/men" className={({ isActive }) => `text-black pb-1 border-b-2 transition-all duration-200 ${
            isActive ? "text-camel-500 border-coffee" : "text-black border-transparent"}`}>
              Men
          </NavLink>

          <NavLink to="/women" className={({ isActive }) => `text-black pb-1 border-b-2 transition-all duration-200 ${
            isActive ? "border-black" : "border-transparent"}`}>
            Women
          </NavLink>

          <NavLink to="/kids" className={({ isActive }) => `text-black pb-1 border-b-2 transition-all duration-200 ${
            isActive ? "border-black" : "border-transparent "}`}>
            Kids
          </NavLink>

          <NavLink to="/newarrivals" className={({ isActive }) => `text-black pb-1 border-b-2 transition-all duration-200 ${
            isActive ? "border-black" : "border-transparent "}`}>
            New Arrivals
          </NavLink>

          <NavLink to="/aboutus" className={({ isActive }) => `text-black pb-1 border-b-2 transition-all duration-200 ${
            isActive ? "border-black" : "border-transparent "}`}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `text-black pb-1 border-b-2 transition-all duration-200 ${
            isActive ? "border-black" : "border-transparent "}`}>
            Contact
          </NavLink>
        </nav>

        {/*Right side with profile and logout */}

        <div className='flex items-center gap-5'>
          
          <button className='hover:text-gray-600 transition cursor-pointer'>
            <Search size={18} />
          </button>

          <button className="relative hover:text-gray-600 transition cursor-pointer">
            <ShoppingCart size={18} />
          </button>

            <Link to={"/profile"} className="hover:text-gray-600 transition cursor-pointer">
              <User className='size-5'/>
            </Link>

            {/*<button className='flex gap-2 items-center' onClick={logout}>
              <LogOut className='size-5'/>
            </button>*/}

        </div>

      </div>
    </div>
  </header>
  )
}

export default Navbar
