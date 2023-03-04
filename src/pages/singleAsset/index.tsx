import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SingleAssetPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>SingleAssetPage</h1>
      <h2 style={{border: '1px solid pink'}} onClick={()=>navigate(-1)}>Go back</h2>
    </div>
  );
};
