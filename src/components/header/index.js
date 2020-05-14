import React from 'react';
import { IoMdNotifications } from 'react-icons/io'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
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
        <AiOutlinePlus
          className="icon-button"
        />
        <AiOutlineUser
          className="icon-button"
        />
      </div>
    </div>
  );
}

export default Header;