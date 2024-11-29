import React, { useState, useEffect, useRef } from "react";
import logo from '../assets/logo_background.png';

interface HeaderProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<'dummy' | 'landing' | 'input' | 'loading' | 'playlist'>> | null;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    // Close menu on 'Esc' key press
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
              setMenuOpen(false);
              buttonRef.current?.focus();//return focus to the button menu
          }
      };
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    //close menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          menuRef.current &&
          !menuRef.current?.contains(event.target as Node) &&
          !buttonRef.current?.contains(event.target as Node)
        ) {
          setMenuOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <header className="bg-[#929cf8] text-[#383050] p-4 w-full"> 
        <div className="flex justify-between items-center w-full">
          
          {/* Left side: Logo and Brand Name */}
          <div
            onClick={() => setCurrentPage && setCurrentPage('landing')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src={logo}
              alt="Moodtime Logo"
              className="h-16 w-16 rounded-full"
            />
            <h1 className="text-xl font-bold">MoodTime</h1>
          </div>

          {/* Right side: Menu with three dots */}
          <nav aria-label="Main Navigation">
            <div className="relative">
              <button
                ref={buttonRef}
                className="text-3xl focus:outline-none bg-[#929cf8]"
                aria-haspopup="true"
                aria-expanded={menuOpen}
                aria-controls="menu"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                &#x22EE; {/* Unicode for vertical ellipsis */}
              </button>

              {/* Dropdown Menu */}
              {menuOpen && (
                <div 
                  ref={menuRef}
                  id="menu"
                  role="menu"
                  className="absolute right-0 w-48 bg-[#d4cfe2] text-gray-900 rounded-md shadow-lg cursor-pointer"
                  aria-labelledby="menu-button"
                  >
                  <ul className="py-1">
                    <li role="none">
                    <button
                        role="menuitem"
                        className="block px-4 py-2 text-sm bg-[#d4cfe2] focus:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setMenuOpen(false);
                          setCurrentPage && setCurrentPage('landing');
                        }}
                    >
                      Home
                    </button>
                    </li>
                    <li role="none">
                    <button
                          role="menuitem"
                          className="block px-4 py-2 text-sm bg-[#d4cfe2] focus:bg-gray-200 cursor-pointer"
                          onClick={() => {
                            setMenuOpen(false);
                            setCurrentPage && setCurrentPage('input');
                          }}
                    >
                        Create playlist
                    </button>

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