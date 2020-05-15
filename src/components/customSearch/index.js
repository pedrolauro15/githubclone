import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import './styles.css';

function CustomSearch() {
  return(
    <div className="custom-search">
      <input
        className="custom-input"
        placeholder="Find a repository..."
      />

      <button className="custom-button">
        Type: <strong style={{marginLeft: 5}}>All</strong>
        <IoMdArrowDropdown size={16}/>
      </button>

      <button className="custom-button">
        Language: <strong style={{marginLeft: 5}}>All</strong>
        <IoMdArrowDropdown size={16}/>
      </button>
    </div>
  );
}

export default CustomSearch;