import React from 'react'
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import StartPage from './StartPage';
import InfoPage from './InfoPage';

function Start() {
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const handleChangePage = (data) => {
        if (data === 2) {
          navigate("/content");
          setPage(0);
        } else {
          setPage(data);
        }
    }
    
  return (
    <>
      {page === 0 && <StartPage changePage={handleChangePage}/>}
      {page === 1 && <InfoPage/>}
    </>
  )
}

export default Start
