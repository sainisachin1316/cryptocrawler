import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom'
import logoSvg from "../assets/logo.svg"
import { NavLink } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 bg-[#c3c3c3] pt-4 rounded-b-lg w-full">
      <nav >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to='/' className="flex items-center ">
                    <img src={logoSvg} alt="logo-img" />
                    <span className="text-lg">Crypto<span className=" text-cyan">Crawler</span></span>
                </Link>
              </div>
              <div className="hidden md:block ">
                <div className=" ml-40 flex items-baseline space-x-4 text-lg font-nunito ">
                  

                    <NavLink to="/" end className={({isActive}) => {return `
                            ${
                                isActive
                                ? " text-cyan font-bold"
                                : " text-gray-300 hover:text-cyan font-medium"
                            }
                            
                            px-3 py-2 rounded-md `;
                        }}>
                        Home
                    </NavLink>


                    <NavLink to="/crypto" className={({isActive}) => {return `
                            ${
                                isActive
                                ? " text-cyan font-bold"
                                : " text-gray-300 hover:text-cyan font-medium"
                            }
                            
                            px-3 py-2 rounded-md `;
                        }}>
                        Crypto
                    </NavLink>

                    <NavLink to="/trending" className={({isActive}) => {return `
                            ${
                                isActive
                                ? " text-cyan font-bold"
                                : " text-gray-300 hover:text-cyan font-medium"
                            }
                            
                            px-3 py-2 rounded-md `;
                        }}>
                        Trending
                    </NavLink>

                    

                    <NavLink to="/watchlist" className={({isActive}) => {return `
                            ${
                                isActive
                                ? " text-cyan font-bold"
                                : " text-gray-300 hover:text-cyan font-medium"
                            }
                            
                            px-3 py-2 rounded-md `;
                        }}>
                        Watchlist
                    </NavLink>


                </div>
              </div>
            </div>

            <div className=" -mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-in duration-300 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-md ml-2.5 font-nunito">
                

                <NavLink onClick={() => setIsOpen(!isOpen)} to="/" end className={({isActive}) => {return `
                            ${
                                isActive
                                ? " text-cyan font-bold"
                                : " text-gray-300 hover:text-cyan font-medium"
                            }
                            
                            px-3 py-2 rounded-md block `;
                        }}>
                        Home
                </NavLink>  

                <NavLink onClick={() => setIsOpen(!isOpen)} to="/crypto" className={({isActive}) => {return `
                            ${
                                isActive
                                ? " text-cyan font-bold"
                                : " text-gray-300 hover:text-cyan font-medium"
                            }
                            
                            px-3 py-2 rounded-md block `;
                        }}>
                        Crypto
                </NavLink>

                <NavLink onClick={() => setIsOpen(!isOpen)} to="/trending" className={({isActive}) => {return `
                            ${
                                isActive
                                ? " text-cyan font-bold"
                                : " text-gray-300 hover:text-cyan font-medium"
                            }
                            
                            px-3 py-2 rounded-md block `;
                        }}>
                        Trending
                </NavLink>

                

                <NavLink onClick={() => setIsOpen(!isOpen)} to="/watchlist" className={({isActive}) => {return `
                            ${
                                isActive
                                ? " text-cyan font-bold"
                                : " text-gray-300 hover:text-cyan font-medium"
                            }
                            
                            px-3 py-2 rounded-md block `;
                        }}>
                        Watchlist
                </NavLink>

                
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
      
    </div>
  );
}

export default Nav;
