import React from 'react'
import "./StoreCard.scss";
import { useNavigate } from 'react-router-dom';
import locationImg from '../../assets/location.png';

function StoreCard({ name, location, id }) {

    const navigate = useNavigate();

  return (
    <div className='storeCard' onClick={() => navigate(`/store/${id}`)}>
      <div className="info">
      <p className='name'>{name}</p>
      <p className='location'><img src={locationImg} alt="" /> {location}</p>
      </div>
        <div className="visit">
            <span className='visitText'>Visit</span>
        </div>
    </div>
  )
}

export default StoreCard
