import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

import { images } from '../constants';

const navItemsInfo = [
  { name: 'Home', type: "Link" },
  { name: 'Articles', type: "Link" },
  { name: 'Pages', type: "dropdown", items: ['About us', 'Contact us'] },
  { name: 'Pricing', type: "Link" },
  { name: 'Faq', type: "Link" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((prevState) => !prevState);
  };

  return (
    <li className='relative group'>
      {item.type === "Link" ? (
        <>
          <a href='/' className='px-4 py-2'>
            {item.name}
          </a>
          <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>
            /
          </span>
        </>
      ) : (
        <div className='flex flex-col items-center'>
          <button className='px-4 py-2 flex gap-x-1 items-center' onClick={toggleDropdownHandler}>
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div className={`${dropdown ? "block" : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
            <ul className='bg-dark-soft lg:bg=transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
              {item.items.map((page, index) => (
                <a href='/' key={index} className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

function Header() {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const toggleNavVisibilityHandler = () => {
    setNavIsVisible((prevState) => !prevState);
  };

  return (
    <section>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div>
          <img className='w-16' src={images.Logo} alt='Logo' />
        </div>
        <div className='lg:hidden z-50'>
          {navIsVisible ? (
            <AiOutlineClose
              className='w-6 h-6'
              onClick={toggleNavVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu
              className='w-6 h-6'
              onClick={toggleNavVisibilityHandler}
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? 'right-0' : '-right-full'
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className='text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold'>
            {navItemsInfo.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
          <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;