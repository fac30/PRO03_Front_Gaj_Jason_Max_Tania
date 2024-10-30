import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo_background.png';


const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on 'Esc' key press
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
              setMenuOpen(false);
          }
      };
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    return (
      <header className="bg-[#929cf8] text-[#383050] p-4 w-full"> 
       <div className="flex justify-between items-center w-full">
          
          {/* Left side: Logo and Brand Name */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src={logo}
              alt="Moodtime Logo"
              className="h-16 w-16 rounded-full spin-animation"
            />
            <h1 className="text-xl font-bold">MoodTime</h1>
          </div>

          {/* Right side: Menu with three dots */}
          <nav>
            <div className="relative">
              <button
                className="text-3xl focus:outline-none bg-[#929cf8]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                &#x22EE; {/* Unicode for vertical ellipsis */}
              </button>

              {/* Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg">
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/option"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        Go Again
                      </Link>
                    </li>
                  </ul>
                </div>
                )}
            </div>
          </nav>
        </div>
      </header>     
  )
}


export default Header;