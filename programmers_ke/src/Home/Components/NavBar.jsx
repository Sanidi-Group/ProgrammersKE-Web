import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import { VscTerminalPowershell } from 'react-icons/vsc'
import { BsPeopleFill, BsNewspaper, BsSearch, BsPersonFill } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RiChatQuoteLine, RiLoginBoxLine } from 'react-icons/ri'


const NavBar = () =>
{
    return(
        <div>
          <nav className="absolute w-full top-0 left-0
                          backdrop-blur-md
                          flex flex-row justify-between z-20">
            <div className="w-[60%] flex flex-row justify-around my-1.5">
              <Link to="/tutorials">
                  <NavItem icon={<FaRegLightbulb size="15"/>}>
                      <div className='fixed top-14 left-0 bg-slate-300
                                    dark:bg-slate-900 dark:bg-opacity-90 p-3
                                    w-full h-[350px] bg-opacity-90 grid grid-flow-auto gap-3'>
                        <section className='col-span-5 flex flex-col items-end'>
                          <span className='text-primary dark:text-secondary 
                                          font-audiowide text-[30px] my-1'>TUTORIALS</span>
                          <hr className='ml-10 border-primary dark:border-secondary w-full'/>
                        </section>
                        <section className='row-span-6 col-span-1 overflow-y-scroll scrollBar p-2'>
                          <ul>
                            <DropdownLink>Getting Started</DropdownLink>
                            <DropdownLink>The Computer</DropdownLink>
                            <DropdownLink>Data Structures and Algorithms</DropdownLink>
                            <DropdownLink>Logical Thinking and Problem Solving</DropdownLink>
                            <DropdownLink>System Analysis and Design</DropdownLink>
                            <DropdownLink>Computer Programming</DropdownLink>
                            <DropdownLink>The Internet and the Web</DropdownLink>
                          </ul>
                        </section>
                         <section className='row-span-6 drop-shadow-lg 
                                            col-span-4 grid grid-flow-col'>
                           <div className='col-span-4 overflow-hidden 
                                            rounded-l-lg bg-nav-image1 bg-cover'>
                            
                           </div>
                           <div className='bg-white dark:bg-black col-span-1 rounded-r-lg'>
                             <p className='text-slate-900 dark:text-white font-adventpro text-[18px]
                                           text-right p-3 my-auto'>
                               Whether you're starting out as a newbie in Computer Science with<br/>
                               zero knowledge, or whetting your appetite to the <br/> 
                               next level of tech, these series of lessons and resources <br/> 
                               are built with that in mind. Start out in CS with confidence <br/> 
                               from the most basic level, or sharpen up what you already know.
                             </p>
                            </div>
                         </section>
                      </div>
                  </NavItem> 
              </Link>
              <Link to="/community">
                  <NavItem icon={<BsPeopleFill size="15"/>} />
              </Link>
              <Link to="/tech">
                  <NavItem icon={<HiOutlineDesktopComputer size="15"/>}>
                     <div className='fixed top-14 left-0 bg-slate-300
                                    dark:bg-slate-900 dark:bg-opacity-90 p-3
                                    w-full h-[350px] bg-opacity-90 grid grid-flow-auto gap-3'>
                        <section className='col-span-5 flex flex-col items-end'>
                          <span className='text-primary dark:text-secondary 
                                          font-audiowide text-[30px] my-1'>TECH</span>
                          <hr className='ml-10 border-primary dark:border-secondary w-full'/>
                        </section>
                        <section className='row-span-6 col-span-1 overflow-y-scroll scrollBar p-2'>
                          <ul>
                            <DropdownLink>Android Development</DropdownLink>
                            <DropdownLink>Windows Development</DropdownLink>
                            <DropdownLink>E-commerce</DropdownLink>
                            <DropdownLink>Web Development</DropdownLink>
                            <DropdownLink>Open Source Software</DropdownLink>
                            <DropdownLink>Apple Development</DropdownLink>
                            <DropdownLink>Social Media</DropdownLink>
                            <DropdownLink>Game Development</DropdownLink>
                            <DropdownLink>Robotics</DropdownLink>
                            <DropdownLink>Web 3.0: Blockchain Development</DropdownLink>
                            <DropdownLink>Cybersecurity</DropdownLink>
                            <DropdownLink>Machine Learning and AI</DropdownLink>
                            <DropdownLink>Advanced Engineering</DropdownLink>
                          </ul>
                        </section>
                         <section className='row-span-6 drop-shadow-lg 
                                            col-span-4 grid grid-flow-col'>
                           <div className='col-span-4 bg-nav-image2 bg-cover rounded-l-lg'>
                            
                           </div>
                           <div className='bg-white dark:bg-black col-span-1 rounded-r-lg'>
                              <p className='text-slate-900 dark:text-white font-adventpro text-[18px]
                                           text-right p-3 my-auto'>
                               Ready to hop on to the next level of being a tech pro? <br/>
                               These series of lessons and paths will help you take your<br/> 
                               elementary level knowledge to the advanced stage, with real-life <br/>
                               projects, to work on, problems to solve both big or small, trends<br/> 
                               to catch up with and actual projects, to benchmark with as case studies.<br/> 
                               It's basically PBL on steroids!
                             </p>
                           </div>
                         </section>
                      </div>
                  </NavItem> 
              </Link>
              <Link to="/blogs">
                  <NavItem icon={<RiChatQuoteLine size="15"/>} />
              </Link>
              <Link to="/news">
                  <NavItem icon={<BsNewspaper size="15"/>} />
              </Link>
              <Link to="/online_compiler">
                  <NavItem icon={<VscTerminalPowershell size="15" />} />
              </Link>
            </div>
              <div className='pr-4 flex flex-row'>
                <SearchBar icon={<BsSearch size="15" />} />
                <Profile>
                   <ProfileMenu/>
                </Profile>
              </div>
            </nav>
        </div>
      
    )
}

const NavItem = (props) =>{
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className="relative">
      <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r to-secondary from-primary rounded-xl blur-sm group-hover:opacity-100 animate-tilt"></div>
        <button className="text-primary dark:text-sky-blue bg-white dark:bg-black p-3
                          rounded-xl relative group" 
                          onMouseEnter={() =>setOpenNav(!openNav)} onMouseLeave={() =>setOpenNav(!openNav)}>
          {openNav && props.children}
          {props.icon}
        </button>
    </div>
   
  )
}

const SearchBar = ({icon}) => {
  return (
    <div className="flex flex-row">
      <input className="searchBar" type="search" placeholder='Search'  />
      <button className="bg-primary hover:bg-secondary transition-all delay-300 
                      text-white hover:text-primary h-10 px-3 my-auto rounded-r-xl ">{icon}
      </button>
    </div>
  )
}

const Profile = (props) => {
  const [open, setopen] = useState(false);
  return (
    <button className="mx-10 items-center flex flex-row" onClick={() => setopen(!open)}>
    <img src="../../../assets/layered-steps-haikei.svg" className='w-8 h-8 
                  rounded-full bg-cover group'/>

      {open && props.children}
    </button>
  )
}

const ProfileMenu = () => {
  const ProfileItem = (props) => {
   return(
     <>
        <a href='#' className='w-11/12 flex flex-row px-4 text-white my-3'>
          <span className='mx-2'>{props.leftIcon}</span>
          {props.children}
          {/* <span className>{props.rightIcon}</span> */}
        </a>
     </>
   )
  }
  const ProfileItem2 = (props) => {
    return (
      <>
        <button className='bg-primary flex flex-row w-11/12 my-3 py-2
                          text-secondary mx-auto rounded-lg font-novaflat'>
          <span className='mx-2 my-auto'>{props.leftIcon}</span>
          {props.children}
          {/* <span className>{props.rightIcon}</span> */}
        </button>
      </>
    )
  }
  return (
    <div className='absolute top-16 right-16 bg-white 
                    dark:bg-black bg-opacity-70 w-1/5
                    rounded-lg h-auto p-4 z-20'>
      <img src="../../../assets/layered-steps-haikei.svg" className='w-16 h-16 
                  rounded-full bg-cover group ml-[65%]'/>
      <Link to='/login'>
        <ProfileItem2 leftIcon={<RiLoginBoxLine size="20"/>}>Login</ProfileItem2>
      </Link>
    </div>
  )
}

const DropdownLink = (props) => {
  return (
    <li>
        <h1 className='my-3 font-novaflat text-left text-sm ml-10 p-2 
                      text-primary hover:text-black hover:text-shadow-md shadow-primary 
                      hover:bg-white dark:text-secondary dark:hover:text-sky-blue
                      dark:hover:text-shadow-md dark:hover:shadow-sky-blue 
                    dark:hover:bg-black hover:rounded-md transition-all delay-300'>
          {props.children}
        </h1>
        <hr className='w-3/4 mx-auto border-white dark:border-black'/>
    </li>
  )
}


export default NavBar