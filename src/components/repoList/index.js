import React, { useState, useEffect } from 'react';
import { GiPlainCircle } from 'react-icons/gi';
import { GoGitBranch, GoStar, GoGitPullRequest } from 'react-icons/go';
import api from '../../services/api';
import getLanguageColor from '../../utils/getLanguageColor';
import getRandomNumber from '../../utils/getRandomNumber';

import './styles.css';

function RepoList({url}) {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    try {
      const response = await api.get(`/users/${url}/repos`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const formatDate = (date) => {
    const updated = new Date(date);

    const years = updated.getFullYear();
    const month = updated.getMonth();
    const day = updated.getDay();

    return (`${day}/${month}/${years}`);
  }

  return (
    <div className="list-container">
      {data.map(repo => (
        <div key={repo.id} className="repo-container">
          <div className="repo-left">
            <h3 className="repo-title">{repo.name}</h3>
            <span className="repo-description">{repo.description ? repo.description : "Repositório sem descrição"}</span>
            <div className="repo-footer">
              <div className="repo-language-container">
                <GiPlainCircle 
                  className="repo-language-icon"
                  color={getLanguageColor(repo.language ? repo.language : "linguagem")}
                />
                <span className="repo-language">{repo.language ? repo.language : "Linguagem"}</span>
              </div>

              <div className="repo-language-container">
                <GoGitBranch 
                  className="repo-language-icon"
                  color={'#444'}
                />
                <span className="repo-language">{getRandomNumber()}</span>
              </div>

              <div className="repo-language-container">
                <GoStar 
                  className="repo-language-icon"
                  color={'#444'}
                />
                <span className="repo-language">{getRandomNumber()}</span>
              </div>

              <div className="repo-language-container">
                <GoGitPullRequest 
                  className="repo-language-icon"
                  color={'#444'}
                />
                <span className="repo-language">{getRandomNumber()}</span>
              </div>

              <span className="repo-updated">{"Modificado em: " + formatDate(repo.updated_at)}</span>
            </div>
          </div>

          <div className="repo-graphic">
            
          </div>

        </div>
      ))}
    </div>
  );
}

export default RepoList;