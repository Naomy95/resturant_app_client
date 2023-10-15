import React, { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";
import './Demo.css';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  return (
    <div className={`Demo ${scrolled ? 'scrolled' : ''}`}>
   <div className={`navbar2 ${scrolled ? 'scrolled' : ''}`}>
   <div className="navbar px-4  lg:px-28">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} >
              <svg
                
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#04DAC9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-navbarcolor rounded-box w-52"
            >
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a href="/">Home</a>
              </li>
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a href="/services">Services</a>
              </li>
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a href="/aboutclinic">Offers</a>
              </li>
              {token ? (
                <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                  <a href="/blogs">Blogs</a>
                </li>
              ) : (
                <li onClick={()=>navigate('/login')} className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                 
                    <a>Blogs</a>
                
                </li>
              )}

              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <ul className="menu menu-horizontal hidden lg:flex ">
            <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
              <a href="/">Home</a>
            </li>
            <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
              <a href="/services">Services</a>
            </li>
            <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
              <a href="/aboutclinic">Offers</a>
            </li>
            {token ? (
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a href="/blogs">Blogs</a>
              </li>
            ) : (
             
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
              <label htmlFor="my-modal-4" >
                <a>Blogs</a>
              </label>
              <input
                type="checkbox"
                id="my-modal-4"
                className="modal-toggle"
              />
    
          
            </li>
            )}

         
          </ul>
        </div>

        <div className="navbar-center lg:hidden ">
         
        </div>
        
        <div className="navbar-end">
          <div className="lg:flex hidden  lg:items-center  p-2 border rounded-md border-[1px] border-white">
           

            {token ? (
              <div className="flex ">
                <a
                  className=" text-white text-xs lg:text-lg hover:bg-hoverBackground hover:text-black font-sans lg:pl-2"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload(true);
                  }}
                >
                  Logout
                </a>
           
              </div>
            ) : (
              <label >
                {" "}
                <a className=" lg:text-white border-[1px] border-buttoncolor p-2 lg:p-0 rounded-lg text-buttoncolor  text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans ml-2 font-semibold lg:font-normal">
                  Login
                </a>
                <input
                type="checkbox"
                id="login-modal"
                className="modal-toggle"
              />
       
              </label>
             
           
           
            )}
          </div>

          <div className="flex  lg:hidden  border rounded-md border-[1px] border-white">

            {token ? (
              <div>
               
              
              </div>
            ) : (
              <label onClick={()=>{navigate('/login')}}>
                {" "}
                <a className=" lg:text-white border-[1px] border-buttoncolor p-2 lg:p-0 rounded-lg text-buttoncolor  text-md hover:bg-hoverBackground hover:text-black  font-sans ml-2 font-semibold lg:font-normal">
                  Login
                </a>
            
              </label>
             
           
           
            )}
          </div>

  
        </div>
      </div>
   </div>

     
    </div>
  );
};

export default Navbar;
