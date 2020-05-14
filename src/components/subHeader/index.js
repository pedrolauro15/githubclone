import React from 'react';
import { GoLocation, GoLink, GoMail } from 'react-icons/go';

import './styles.css';

function SubHeader({imageUrl, name, location, site, email}) {
  return (
    <div className="subHeader" id="subHeader">
      <img
        alt="logo.png"
        className="user-img"
        src={imageUrl ? imageUrl : null }
      />

      <div className="sub-container">
        <span className="title">
          {name}
        </span>
        
        <div className="info-container">
          <div className="info-item">
            <GoLocation
              className="info-icon"
            />
            <span className="info-title">{location}</span>
          </div>

          <div className="info-item">
            <GoLink
              className="info-icon"
            />
            <span className="info-title">{site}</span>
          </div>

          <div className="info-item">
            <GoMail
              className="info-icon"
            />
            <span className="info-title">{email}</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SubHeader;