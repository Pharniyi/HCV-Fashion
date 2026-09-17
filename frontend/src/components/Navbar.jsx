import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  LogOut,
  MessageSquare,
  Settings,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleLogout = async () => {
    const success = await logout();
    setIsProfileMenuOpen(false);

    if (success) {
      navigate("/login");
    }
  };

  return (
    //<header className='bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop'>
    <header className="bg-white/95 text-slate-900 border-b border-gray-200 fixed w-full top-0 z-40 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/*Left side with logo and title */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src="/HCV_Logo.png" alt="HCV Fashion Hub logo" className="h-full w-full object-contain" />
              </div>
              <h1 className="text-lg font-bold">HCV Fashion Hub</h1>
            </Link>
          </div>

          {/*Center side with buttons */}

          <nav className="hidden md:flex items-center gap-10 uppercase text-xs tracking-widest font-medium">
            <NavLink
              to="/men"
              style={({ isActive }) => ({
                color: isActive ? "#C5A059" : "#000000",
              })}
              className={({ isActive }) =>
                `text-black pb-1 border-b-2 transition-all duration-200 ${
                  isActive
                    ? "text-camel-500 border-coffee"
                    : "text-black border-transparent"
                }`
              }
            >
              Men
            </NavLink>

            <NavLink
              to="/women"
              style={({ isActive }) => ({
                color: isActive ? "#C5A059" : "#000000",
              })}
              className={({ isActive }) =>
                `text-black pb-1 border-b-2 transition-all duration-200 ${
                  isActive
                    ? "text-camel-500 border-coffee"
                    : "text-black border-transparent"
                }`
              }
            >
              Women
            </NavLink>

            <NavLink
              to="/kids"
              style={({ isActive }) => ({
                color: isActive ? "#C5A059" : "#000000",
              })}
              className={({ isActive }) =>
                `text-black pb-1 border-b-2 transition-all duration-200 ${
                  isActive
                    ? "text-camel-500 border-coffee"
                    : "text-black border-transparent"
                }`
              }
            >
              Kids
            </NavLink>

            <NavLink
              to="/newarrivals"
              style={({ isActive }) => ({
                color: isActive ? "#C5A059" : "#000000",
              })}
              className={({ isActive }) =>
                `text-black pb-1 border-b-2 transition-all duration-200 ${
                  isActive
                    ? "text-camel-500 border-coffee"
                    : "text-black border-transparent"
                }`
              }
            >
              New Arrivals
            </NavLink>

            <NavLink
              to="/aboutus"
              style={({ isActive }) => ({
                color: isActive ? "#C5A059" : "#000000",
              })}
              className={({ isActive }) =>
                `text-black pb-1 border-b-2 transition-all duration-200 ${
                  isActive
                    ? "text-camel-500 border-coffee"
                    : "text-black border-transparent"
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#C5A059" : "#000000",
              })}
              className={({ isActive }) =>
                `text-black pb-1 border-b-2 transition-all duration-200 ${
                  isActive
                    ? "text-camel-500 border-coffee"
                    : "text-black border-transparent"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/*Right side with profile and logout */}

          <div className="flex items-center gap-5">
            <button className="hover:text-gray-600 transition cursor-pointer">
              <Search size={18} />
            </button>

            <button className="relative hover:text-gray-600 transition cursor-pointer">
              <ShoppingCart size={18} />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                className="hover:text-gray-600 transition cursor-pointer"
                aria-label="Open profile menu"
              >
                <User className="size-5" />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 top-full mt-3 w-48 rounded-md border border-gray-200 bg-white p-2 shadow-lg z-50">
                  <Link
                    to="/profile"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="size-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
