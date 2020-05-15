import React, { useState, useEffect } from 'react';
import { GoRepo, GoGitBranch, GoStar, GoPrimitiveDot } from 'react-icons/go';
import api from '../../services/api';
import getLanguageColor from '../../utils/getLanguageColor';
import getRandomNumber from '../../utils/getRandomNumber';
import  './styles.css';


function Pinned({repo}) {
  const [arr, setArr] = useState([]);

  const getDataFromRepositories = async () => {
    try {
      const response = await api.get(`users/${repo}/repos`);
      
      const data = response.data;
      setArr([]);
      if(data.length == 0){
        setArr([]);
      } else if(data.length >= 6) {
        var i =0;
        var buffer = []; 

        while(i < 6){
          let newItem = data[i];
          buffer.push(newItem);
          i++;
        }

        setArr(buffer);
      }
      else {
        setArr(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { getDataFromRepositories() }, [])

  return(
    <div className="pinned">
      {
        arr.length !== 0 ? <span className="pinned-title">Pinned repositories</span> : null
      }
      <div className="pinned-container">
        {
          arr.map(pinned => (
            <div className="pinned-box">
              <div className="box-header">
                <GoRepo 
                  className="pinned-icon"
                />
                {pinned.name}
              </div>

              <span className="pinned-description">{pinned.description ? pinned.description : "Description of repositorie"}</span>

              <div className="pinned-footer">
                <div className="pinned-item">
                  <GoPrimitiveDot
                    className="pinned-icon"
                    color={getLanguageColor(pinned.language ? pinned.language : "language")}
                  />
                  <span className="pinned-foot">{pinned.language ? pinned.language : "Linguagem"}</span>
                </div>

                <div className="pinned-item">
                  <GoStar
                    className="pinned-icon"
                  />
                  <span className="pinned-foot">{getRandomNumber()}</span>
                </div>

                <div className="pinned-item">
                  <GoGitBranch
                    className="pinned-icon"
                  />
                  <span className="pinned-foot">{getRandomNumber()}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Pinned;