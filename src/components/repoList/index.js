import React, { useState, useEffect } from 'react';
import { GiPlainCircle } from 'react-icons/gi';
import api from '../../services/api';

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

  const getRandomColor = () => {
    const chars = '0123456789ABCDEF';
    var hash = '#';

    for(var i = 0; i < 6; i++){
      hash += chars[Math.floor(Math.random() * 16)];
    }

    return hash;
  }

  return (
    <div className="list-container">
      {data.map(repo => (
        <div className="repo-container">
          <h3 className="repo-title">{repo.name}</h3>
          <span className="repo-description">{repo.description ? repo.description : "Repositório sem descrição"}</span>
          <div className="repo-footer">
            <div className="repo-language-container">
              <GiPlainCircle 
                className="repo-language-icon"
                color={getRandomColor()}
              />
              <span className="repo-language">{repo.language ? repo.language : "Linguagem"}</span>
            </div>
            <span className="repo-updated">{"Modificado em: " + formatDate(repo.updated_at)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RepoList;