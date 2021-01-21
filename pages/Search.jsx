import { AppBar, Button, ClickAwayListener, Divider,Select, Drawer, FormControl, Grow, IconButton, InputAdornment, Menu, MenuItem, MenuList, OutlinedInput, Paper, Popper, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  Imdb,
  MenuIcon,
  WatchlistIcon,
  ImdbPro,
} from "../components/icons/icons";

import MenuIconMi from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { ArrowDropDown, ArrowDropDownCircle, ArrowDropDownCircleTwoTone } from "@material-ui/icons";
import axios from "axios";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';




  



export default function Search() {


    
  const [IsSearch, setIsSearch] = useState(false);
  const [IsMobileDrawer, setIsMobileDrawer] = useState(false);

  const [SearchTerm, setSearchTerm] = useState([])
  const [LiveSearch, setLiveSearch] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [IsDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [newValue, setnewValue] = useState()
   
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e)=>{
    setSearchTerm(e.target.value)

  }

  
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

  console.log(newValue,"$$$");
  return (
    <>
      {/* <div className="bg-gray-200 h-8 mx-2 my-2  md:mx-4 lg:mx-32 lg:flex lg:items-center "> */}
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

      <AppBar position="static" color="primary">
        <Toolbar className=" flex justify-between mx-32 ">
          <Imdb />
          <MenuIcon />

          <SearchBar onChange={(value)=>setnewValue(value)} SearchTerm={SearchTerm} handleSearch={handleSearch}/>

          <ImdbPro />
          <WatchlistIcon />

          <Typography variant="h9">Sign In</Typography>
        </Toolbar>
      </AppBar>
       {SearchTerm !== "" && SearchTerm.length !== 0 && <SearchResults Term={SearchTerm}/>}
       <div>
         asjdhadg
       </div>
    </>
  );
}




export const SearchBar =({SearchTerm,handleSearch,onChange})=>{

  const [newValue, setnewValue] = useState()

  // useEffect(() => {

  //   onChange(newValue)

  // }, [newValue])

  onChange(newValue)


  console.log(newValue,"....");

  
  return(
    <>
    <div className="box w-search-bar ">
        <div className="box-wrapper ">
          <div className=" bg-gray-200 rounded flex items-center  h-8 p-1 ">
            <div              
            >
              <DropDownAll  onChange={(value)=>setnewValue(value)}/>
            </div>

            
            <input
              type="search"
              placeholder="search for images"
              value={SearchTerm}
              onChange={handleSearch}
              className="w-full text-gray-600 text-sm pl-2 outline-none focus:outline-none bg-transparent"
            />

              <button className="outline-none text-gray-600 focus:outline-none">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}




export const DropDownAll =(props)=>{

  const options = [
    'All',
    'Titles',
    'Tv Episodes',
    'Celebs',
    'Companies'
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);


  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // non async code
  const handleMenuItemClick = (event, index) => {
     setSelectedIndex(index); 
     props.onChange(options[index]) 
     setAnchorEl(null);
  };
  console.log(options[selectedIndex],"selected");

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
          {options[selectedIndex]} <ArrowDropDown/>
        </div>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={2}
        getContentAnchorEl={null}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 100, left: 375  }}
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
           selected={index === options[selectedIndex]}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
