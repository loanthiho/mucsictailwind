import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/st.jpg";
import { navBar } from "../assets/data/Data";


export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  const [isMenu, setIsMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogoClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
      window.location.reload();
    }, 1000);


    setIsSearchOpen(false);
  };


  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  return (
    <>
        <header className="fixed top-0 left-0 z-50 w-screen h-[8vh] md:shadow-md shadow-sm bg-white">
          <div className="hidden md:flex justify-between px-7 p-2">
            <div className="logo flex cursor-pointer" onClick={handleLogoClick}>
              <div>
                <img src={logo} alt="logo" width="40px" height="40px" />
              </div>
              <h2 className="text-2xl font-semibold ml-3">pluse</h2>
            </div>
            {/* navlinks */}
            <div className="menu">
              <ul className="flex">
                {navBar.map((list, i) => (
                  <li className={`mx-5 py-2  ${activeNavLink}`} key={i}>
                    <NavLink to={list.path}>{list.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* profile */}
            <div className="profile flex items-center">
              <AiOutlineSearch
                size={22}
                onClick={handleSearchClick}
                className="cursor-pointer"
              />
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-lg px-2 py-1 ml-2"
                />
              )}
              <button className="bg-primary hover:bg-gray-600 px-6 py-1.5 text-white rounded-full mx-3">
                Upload
              </button>
              <div className=" img w-10 h-10 rounded-full">
                <img
                  src={profile}
                  alt="profile"
                  className="img w-10 h-10 bg-red-300 rounded-full object-cover cursor-pointer "
                ></img>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="flex items-center justify-between md:hidden h-full pl-2 pr-8 ">
            <Link to={"/"} className="flex items-center gap-2 ">
              <div
                className="logo flex cursor-pointer"
                onClick={handleLogoClick}
              >
                <div>
                  <img
                    src={logo}
                    alt="logo"
                    width="40px"
                    height="40px"
                  ></img>
                </div>
                <h2 className="text-2xl font-semibold ml-3">pluse</h2>
              </div>
            </Link>
            <div>
              {isMenu && (
                <div className="bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-0 w-full ">
                  <ul className="flex flex-col">
                    {navBar.map((list, i) => (
                      <li
                        className={`mx-5 py-2  ${activeNavLink}`}
                        key={i}
                      >
                        <NavLink to={list.path}>{list.name}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <AiOutlineMenu
                size={20}
                onClick={() => setIsMenu(!isMenu)}
              />
            </div>
          </div>
        </header>
      {isLoading && <div className="loading-overlay"></div>}
    </>
  );
}
