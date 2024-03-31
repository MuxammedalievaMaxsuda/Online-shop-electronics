import { BiSearch } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import React, { useState } from 'react'
import Container from './Container'
import { Link, NavLink } from 'react-router-dom'
import { IconButton, Input } from '@material-tailwind/react'
import { useSelector } from "react-redux";

const Header = () => {
  const [menu, setMenu] = useState(false)
  const { favourite } = useSelector(state => state.favourite)
  const {basket}=useSelector(state=>state.basket)


  return (

    <div className="py-[20px] w-full bg-white border-b-[1px] sticky top-0 z-40 border-b-gray-300 shadow-sm">
      <Container>
        <div className="flex  justify-between gap-2 items-center">
          <div className="flex gap-5 items-center">
            <div className="relative">
              <div onClick={() => setMenu(!menu)} data-ripple-light="true" data-popover-target="menu-1" data-popover-nested="true" className="select-none rounded-lg text-center align-middle font-sans text-xs font-bold uppercase transition-all">
                <BiMenu className="text-[24px] text-gray-900 xs:block sm:hidden cursor-pointer" />
              </div>
              <div className={menu ? 'block' : 'hidden'}>
                <ul role="menu" data-popover="menu-1" data-popover-placement="bottom"
                  className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                  <Link to={'/'} onClick={() => setMenu(false)}>
                    <li role="menuitem"
                      className="block hover:underline w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all ">Home</li>
                  </Link>
                  <Link to={'/new-arrivals'} onClick={() => setMenu(false)}>
                    <li role="menuitem"
                      className="whitespace-nowrap hover:underline block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all">New Arrivals</li>
                  </Link>
                  <Link to={'/filters'} onClick={() => setMenu(false)}>
                    <li role="menuitem"
                      className="block hover:underline w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all">Filters</li>
                  </Link>
                </ul>
              </div>
            </div>
            <Link>
              <h1 className="font-bold xs:text-[20px] md:text-[24px] text-gray-800">SHOP.CO</h1>
            </Link>
            <ul className="xs:hidden sm:flex gap-3 items-center font-[400] text-gray-800">
              <Link to={'/'}>
                <li className="transition duration-75 hover:text-gray-400">Home</li>
              </Link>
              <Link to={'/new-arrivals'}>
                <li className="whitespace-nowrap transition duration-75 hover:text-gray-400">New Arrivals</li>
              </Link>
              <Link to={'/filters'}>
                <li className="transition duration-75 hover:text-gray-400">Filters</li>
              </Link>
            </ul>
          </div>

          <div className="flex gap-3 items-center">
            <div className="md:w-full sx:w-0">
              <div className="relative xs:hidden md:block">
                <Input size={'md'} placeholder="Search..." className="md:min-w-[280px] lg:min-w-[400px]  placeholder:text-gray-800  bg-gray-100 rounded-full outline-none py-[7px] pl-[30px] w-full" />
                <BiSearch className="absolute top-[6px] left-[7px] text-[20px] text-gray-500" />
              </div>
            </div>
             
            <ul className="flex gap-3 items-center">
              <Link to={'/basket'}>
                <li className="relative">
                  <GiShoppingCart className="text-[24px] text-gray-900 hover:text-gray-500 transition duration-75" />
                  <span className="text-[12px] rounded-full text-gray-800 bg-gray-100 py-0.5 px-1.5 top-[-13px] right-[-11px] absolute">{basket.length}</span>
                </li>
              </Link>
              <Link to={'/favourite'}>
                <li className="relative">
                  <BiHeart className="text-[24px] text-gray-900 hover:text-gray-500 transition duration-75" />
                  <span className="text-[12px] rounded-full text-gray-800 bg-gray-100 py-0.5 px-1.5 top-[-13px] xs:right-[-7px] md:right-[-10px] absolute">{favourite.length}</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default Header