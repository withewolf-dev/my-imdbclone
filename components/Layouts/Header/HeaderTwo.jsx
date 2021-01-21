import { Drawer, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  Imdb,
  MenuIcon,
  WatchlistIcon,
  ImdbPro,
} from "../../icons/icons";

import MenuIconMi from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { ArrowBack, ArrowDropDown } from "@material-ui/icons";
import SearchResults from "../../Search/SearchResults/SearchResults";
import List from "@material-ui/core/List";

export default function HeaderTwo() {
  const [IsSearch, setIsSearch] = useState(false);
  const [IsMobileDrawer, setIsMobileDrawer] = useState(false);

  const [SearchTerm, setSearchTerm] = useState([]);
  const [LiveSearch, setLiveSearch] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [IsDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [newValue, setnewValue] = useState();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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

  console.log(newValue,"&&&");
  return (
    <>
      {/* mobile menu  */}
      <div className="flex justify-between px-3 py-3 lg:hidden">
        {!IsSearch && (
          <>
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
          </>
        )}

        {IsSearch && (
          <div className="relative flex">
            <SearchBar
              onChange={(value) => setnewValue(value)}
              SearchTerm={SearchTerm}
              handleSearch={handleSearch}
            />
            <div onClick={() => setIsSearch(false)}>
              <ArrowBack />
            </div>
            <div className="absolute z-20  top-9  right-16">
              {SearchTerm !== "" && SearchTerm.length !== 0 && (
                <SearchResults Term={SearchTerm} />
              )}
            </div>
          </div>
        )}
      </div>
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
      <div className="hidden lg:block">
        <div className="bg-gray-600 text-white">  
          <Toolbar className=" flex justify-between mx-32 ">
            <Imdb />
            <MenuIcon />

            <div className="relative">
              <SearchBar
                onChange={(value) => setnewValue(value)}
                SearchTerm={SearchTerm}
                handleSearch={handleSearch}
              />
              <div className="absolute z-20  top-9 right-24">
                {SearchTerm !== "" && SearchTerm.length !== 0 && (
                  <SearchResults category={newValue} Term={SearchTerm} />
                )}
              </div>
            </div>

            <ImdbPro />
            <WatchlistIcon />

            <Typography variant="h9">Sign In</Typography>
          </Toolbar>
        </div>
      </div>
    </>
  );
}

export const SearchBar = ({ SearchTerm, handleSearch, onChange }) => {
  const [newValue, setnewValue] = useState();

  useEffect(() => {
    
    onChange(newValue);

    
  }, [newValue])

  console.log(newValue, "....");

  return (
    <>
      <div className="box  w-96 lg:w-search-bar ">
        <div className="box-wrapper ">
          <div className=" bg-gray-200 rounded flex items-center  h-8 p-1 ">
            <div className="hidden lg:block">
              <DropDownAll onChange={(value) => setnewValue(value)} />
            </div>

            <input
              type="search"
              placeholder="search for images"
              value={SearchTerm}
              onChange={handleSearch}
              className=" w-full text-gray-600 text-sm lg:pl-2 outline-none focus:outline-none bg-transparent"
            />

            <button className="hidden lg:outline-none text-gray-600 focus:outline-none">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const DropDownAll = (props) => {


  const options = ["All", "Movies", "Tv Shows", "celebs", "Companies"];
  const OptionsForApi =["multi","movie","tv","person","company"]


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    props.onChange(OptionsForApi[index]);
    setAnchorEl(null);
  };

  async function handleMenuItem (event, index){

   await setSelectedIndex(index);
   await  props.onChange(OptionsForApi[0]);
    setAnchorEl(null);

    return
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List component="nav" aria-label="Device settings">
        <div
          aria-haspopup="true"
          onClick={handleClickListItem}
          className="whitespace-nowrap  text-gray-700"
        >
          {options[selectedIndex]} <ArrowDropDown />
        </div>
      </List>
      <Menu
        defaultValue={0}
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={2}
        getContentAnchorEl={null}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 50, left: 378 }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === options[0]}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};