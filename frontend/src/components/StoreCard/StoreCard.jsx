import React from 'react'
import "./StoreCard.scss";
import { useNavigate } from 'react-router-dom';

function StoreCard({ name, location, id }) {

    const navigate = useNavigate();

  return (
    <div className='storeCard' onClick={() => navigate(`/store/${id}`)}>
      <div className="info">
      <p>{name}</p>
      <p>( {location} )</p>
      </div>
        <div className="visit">
            <span className='visitText'>Visit</span>
        </div>
    </div>
  )
}

export default StoreCard
