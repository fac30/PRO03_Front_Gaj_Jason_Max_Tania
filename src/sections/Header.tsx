import React, { useState} from "react";
import {Link} from 'react-router-dom';


// declare the component with a capitalised name
const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
      <header className="bg-[#929cf8] text-black p-4"> 
        <div className="container mx-auto flex justify-between items-center">
		    {/* Left side: Logo and Brand Name */}
			    <div className="flex items-center space-x-3">
                <img
                    src="../assets/logo_background.png" // Replace this with the actual path to your logo
                    alt="Brand Logo"
                    className="h-8 w-8"
                />
                <span className="text-xl font-bold">SpotifyMoodList</span>
          </div>
        </div>

			{/* Right side: Menu with three dots */}
      <nav>
      <div className="relative">
          <button
            className="text-3xl focus:outline-none"
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
    </header>
      
  )
}

// separate export statement, so it is easy to see at a glance
export default Header;