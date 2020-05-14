import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

import Header from '../../components/header';
import SubHeader from '../../components/subHeader';
import CustomSearch from '../../components/customSearch';
import InfoBar from '../../components/infoBar';
import RepoList from '../../components/repoList';
import Footer from '../../components/footer';
import './styles.css';

export default function Home() {
  const [data, setData] = useState([]);
  const { repo } = useParams();

  const getData = async () => {
    try {
      const response = await api.get(`users/${repo}`);
      setData(response.data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return(
    <div className="home">
      <Header/>
      <div className="home-box">
        <SubHeader 
          imageUrl={data.avatar_url}
          name={data.name}
          location={data.location ? data.location : "localização"}
          site={data.blog}
          email={data.email}
        />
        <InfoBar />

        <CustomSearch />

        <RepoList
          url={repo}
        />

        <Footer />
      </div>
    </div>
  );
}
