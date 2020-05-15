import React from 'react';
import { GiPlainCircle } from 'react-icons/gi';
import getLanguageColor from '../../utils/getLanguageColor';

import './styles.css';

function HomeRight() {
  return(
    <div className="grid-right">
      <div className="grid-box">
        <span className="grid-title">Top languages</span>
        <div className="grid-item-container">
          <div className="grid-item">
            <GiPlainCircle
              className="grid-icon"
              color={getLanguageColor("JavaScript")}
            />
            <span className="grid-item-title">JavaScript</span>
          </div>

          <div className="grid-item">
            <GiPlainCircle
              className="grid-icon"
              color={getLanguageColor("HTML")}
            />
            <span className="grid-item-title">HTML</span>
          </div>

          <div className="grid-item">
            <GiPlainCircle
              className="grid-icon"
              color={getLanguageColor("TypeScript")}
            />
            <span className="grid-item-title">TypeScript</span>
          </div>

          <div className="grid-item">
            <GiPlainCircle
              className="grid-icon"
              color={getLanguageColor("Dart")}
            />
            <span className="grid-item-title">Dart</span>
          </div>
        </div>
      </div>

      <div className="grid-box">
        <span className="grid-title">Most used topics</span>
        
        <div className="grid-item-container">
          <div className="topic-button">
            programação
          </div>

          <div className="topic-button">
            React
          </div>

          <div className="topic-button">
            Node
          </div>

          <div className="topic-button">
            SQL
          </div>

          <div className="topic-button">
            Liv Saúde
          </div>
        </div>
      </div>

      <span className="report">Report abuse</span>
    </div>
  );
}

export default HomeRight;