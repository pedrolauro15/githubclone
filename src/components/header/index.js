import React from 'react';
import { IoMdNotifications } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai';
import { MdArrowDropDown } from 'react-icons/md';
import logo from '../../assets/logo.png'

import './styles.css';

function Header() {
  return(
    <div className="header" id="header">
      <div className="headerLeft" id="headerLeft">
        <div className="header-button">
          <img
            className="header-logo" 
            alt="logo.png"
            src={logo}
          />
        </div>

        <input
          className="header-input"
          id="header-input"
          placeholder="Search or jump to"
        />

        <span className="header-span">Pull requests</span>
        <span className="header-span">Issues</span>
        <span className="header-span">Marketplace</span>
        <span className="header-span">Explore</span>
      </div>

      <div className="headerRight" id="headerRight">
        <IoMdNotifications 
          className="icon-button"
        />

        <div className="row-item">
          <AiOutlinePlus
            className="icon-button"
            style={{marginRight: -3}}
          />

          <MdArrowDropDown
            className="user-arrow"
          />
        </div>
        
        <div className="row-item">
          <img
            src={"https://avatars3.githubusercontent.com/u/44732156?s=88&v=4"}
            alt="pic.png"
            className="user-picture"
          />
          <MdArrowDropDown
            className="user-arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;