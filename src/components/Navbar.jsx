import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { AlignRight, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    };

  return (
    <div>
      <nav className=" fixed w-full top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            {/* Logo and Brand Name */}
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">Ford9Solutions</span>
            </div>

            {/* Navigation Links */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-gray-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className='py-2 px-3 border rounded-md'>
                    Sign In
                </a>
                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
            </div>
            {/* now for mobile screen */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {
                  mobileMenuOpen ? <X /> : <AlignRight />
                }
              </button>
            </div>
          </div>
          {
            mobileMenuOpen && (
              <div className='flex flex-col justify-center items-center lg:hidden w-full bg-neutral-900 p-12 fixed right-0 z-20'> 
             <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-4'>
                  <a href={item.href} className="hover:text-gray-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex gap-5 justify-center items-center w-full'>
            <a href="#" className='py-2 text-nowrap px-3 border rounded-md'>
                    Sign In
                </a>
                <a href="#" className='bg-gradient-to-r text-nowrap from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
            </div>
              </div>
            )
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
