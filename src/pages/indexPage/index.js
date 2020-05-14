import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function IndexPage() {
  const history = useHistory();

  useEffect(()=> {
    history.push('/gitpage/camunda');
  }, []);

  return <div/>
}

export default IndexPage;