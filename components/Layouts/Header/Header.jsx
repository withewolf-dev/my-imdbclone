import { Drawer, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import {
  ArrowDown,
  Imdb,
  MenuIcon,
  WatchlistIcon,
  ImdbPro,
} from "../../icons/icons";

import MenuIconMi from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export default function Header() {


    
  const [IsSearch, setIsSearch] = useState(false);
  const [IsMobileDrawer, setIsMobileDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [IsDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SearchBar = () => {
    return (
      <div className="box w-search-bar ">
        <div className="box-wrapper ">
          <div className=" bg-white rounded flex items-center  h-8 p-1 ">
            <div
              aria-haspopup="true"
              id="customized-menu"
              aria-controls="customized-menu"
              onClick={handleClick}
              className="select"
            >
              <button className="mr-2 hover:text-gray-600 focus:outline-none">
                All
              </button>
            </div>


            <input
              type="search"
              name=""
              id=""
              placeholder="search for images"
              x-model="q"
              className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
            />

              <button className="outline-none focus:outline-none">
              <svg
                className=" w-5 text-gray-600 h-5 cursor-pointer"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const MenuDrawer = () => {
    return (
      <div className="flex items-center">
        <div>
          <MenuIconMi />
        </div>
        <h6 className="text-xl">Menu</h6>
      </div>
    );
  };

  return (
    <>
      
      <div className="bg-gray-200 h-8 mx-2 my-2  md:mx-4 lg:mx-32 lg:flex lg:items-center ">

        {/* mobile menu  */}


        {!IsSearch && (
          <div className="flex justify-between lg:hidden">
            <ul className="flex items-center space-x-2">
              <li>
                <a
                  onClick={() => {
                    setIsMobileDrawer(true);
                  }}
                >
                  <MenuIconMi />
                </a>
              </li>
              <li>
                <a>
                  <Imdb />
                </a>
              </li>
            </ul>
            <ul className="flex items-center space-x-2 lg:invisible ">
              <li>
                <a
                  onClick={() => {
                    setIsSearch(true);
                  }}
                >
                  <SearchIcon />
                </a>
              </li>
              <li className=" text-xl">
                <a>Sign In</a>
              </li>
            </ul>
          </div>
        )}

        {IsSearch && (
          <div className="flex h-8 items-center justify-between px-2">
            <input
              className="h-7 bg-gray-300 w-72 rounded-sm p-1"
              placeholder="search IMdb"
            />
            <div
              onClick={() => {
                setIsSearch(false);
              }}
            >
              <CloseIcon />
            </div>
          </div>
        )}

        <Drawer
          anchor="left"
          open={IsMobileDrawer}
          onClose={() => {
            setIsMobileDrawer(false);
          }}
        >
          <ul>
            <li>name</li>
            <li>age</li>
          </ul>
        </Drawer>










        {/* desktop menu  */}

        <ul className=" hidden lg:flex items-center space-x-6 lg:justify-between ">
          <li>
            <a
              aria-haspopup="true"
              id="customized-menu"
              aria-controls="customized-menu"
              onClick={handleClick}
            >
              <Imdb />
            </a>
          </li>
          <li
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <MenuDrawer />
          </li>
          <li>
            <SearchBar />
          </li>
          <li>
            <a>
              <ImdbPro />
            </a>
          </li>
          <li>
            <a>
              <WatchlistIcon />
            </a>
          </li>
          <li>
            <a>Sign IN</a>
          </li>
        </ul>
      </div>

      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "top",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      <Drawer
        anchor="top"
        open={IsDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <ul>
          <li>name</li>
          <li>age</li>
        </ul>
      </Drawer>
    </>
  );
}
