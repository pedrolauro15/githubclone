import React from 'react';
import { GoProject, GoRepo, GoPackage, GoPerson } from 'react-icons/go';

import './styles.css';

function InfoBar() {
  return(
    <div className="infoBar">
      <div className="item">
        <GoRepo
          className="icon"
        />
        <span className="item-title">Repositories</span>
      </div>

      <div className="item">
        <GoPackage
          className="icon"
        />
        <span className="item-title">Packages</span>
      </div>

      <div className="item">
        <GoPerson
          className="icon"
        />
        <span className="item-title">People</span>
      </div>

      <div className="item">
        <GoProject
          className="icon"
        />
        <span className="item-title">Projects</span>
      </div>
    </div>
  );
}

export default InfoBar;