/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaSignInAlt,
  FaUser,
  FaCog,
  FaPowerOff,
  FaDatabase,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext.jsx";
import ThemeSwitch from "./ThemeSwitch.jsx";
import logo from "../assets/EC1-01.svg";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = user
    ? [
        { name: "Dashboard", to: "/dashboard", icon: <FaUser /> },
        { name: "Template", to: "/whiteSpace/template", icon: <FaInfoCircle /> },
      ]
      : [
        { name: "Home", to: "/", icon: <FaHome /> },
        { name: "Team About", to: "/teamAbout", icon: <FaUsers /> },
        { name: "About", to: "/about", icon: <FaInfoCircle /> },
        { name: "Login", to: "/login", icon: <FaSignInAlt /> },
      ];

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileMenu = () => setIsMobileOpen(false);

  const handleLogout = () => {
    console.log("Logout");
    logout()
    navigate("/login")
  }

  return (
    <nav className="w-full bg-[#471953] text-white py-2">
      <div className="max-w-7xl bg-transparent mx-auto px-4 py-4 flex justify-between items-center">
 
        <Link to="/" className="flex items-center space-x-2 font-bold text-2xl">
   
        EntityCraft
       
        </Link>


        <ul className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="flex items-center space-x-2 hover:text-[#da498e]"
              >
                {item.icon} <span>{item.name}</span>
              </Link>
            </li>
          ))}

          {user ? (
            <li>
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none hover:text-gray-300"
                >
                  <img
                    src={
                      user.profileImage ||
                      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    }
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user.name}</span>
                </button>
                {isProfileMenuOpen && (
                  <ul className="absolute z-40 right-0 flex flex-col justify-center items-center mt-2 w-48 bg-[#7c294f] shadow-lg rounded-md text-sm">
                    <li>
                      <ThemeSwitch />
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 hover:bg-[#da498e]"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          ) : (
            <ThemeSwitch />
          )}
        </ul>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <ul className="md:hidden bg-[#471953] py-4 space-y-4 text-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="flex items-center justify-center space-x-2 hover:text-gray-300"
                onClick={closeMobileMenu}
              >
                {item.icon} <span>{item.name}</span>
              </Link>
            </li>
          ))}
          {!user && (
            <li>
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none hover:text-gray-300"
                >
                  <img
                    src={user.profileImage || "/placeholder.png"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user.name}</span>
                </button>
                {isProfileMenuOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-[#7c294f] shadow-lg rounded-md text-sm">
                    <li>
                      <ThemeSwitch />
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 hover:bg-[#da498e]"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
