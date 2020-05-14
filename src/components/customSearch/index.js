import React from 'react';

import './styles.css';

function CustomSearch() {
  return(
    <div className="custom-search">
      <input
        className="custom-input"
        placeholder="Find a repository..."
      />

      <button className="custom-button">Type: All</button>
      <button className="custom-button">Language: All</button>
    </div>
  );
}

export default CustomSearch;