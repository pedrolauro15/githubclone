import React from 'react';
import { GoMarkGithub } from 'react-icons/go';

import './styles.css';

//commit

function Footer() {
  return(
    <div className="footer">
       <div className="left">
         <span className="corp">© 2020 Pedro Lauro, Inc.</span>
         <span className="link">Terms</span>
         <span className="link">Privacy</span>
         <span className="link">Security</span>
         <span className="link">Status</span>
         <span className="link">Help</span>
       </div>

       <div className="center">
        <GoMarkGithub
          className="icon"
        />
       </div>

       <div className="right">
        <span className="link">Contact GitHub</span>
        <span className="link">Pricing</span>
        <span className="link">API</span>
        <span className="link">Training</span>
        <span className="link">Blog</span>
        <span className="link">About</span>
       </div>
    </div>
  );
}

export default Footer;