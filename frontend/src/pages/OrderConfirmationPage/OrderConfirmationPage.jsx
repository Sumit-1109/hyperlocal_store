import React from 'react';
import './OrderConfirmationPage.scss';
import tick from '../../assets/tick.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setShowModal } from '../../store/slices/showModal.slice';
import { setCustomerName } from '../../store/slices/customerName.slice';

function OrderConfirmationPage() {

  const navigate = useNavigate();
  const customerName = useSelector(state => state.customerName);
  const dispatch = useDispatch();

  const backToHome = () => {
    dispatch(setShowModal(false));
    dispatch(setCustomerName(''));
    navigate('/');
  }

  return (
    <div className='orderPage'>
      <div className="top">
      <div className="image">
        <img src={tick} alt="" />
      </div>
      <div className="thankYou">
        <span>Thank You, {customerName}</span>
      </div>
      </div>

      <div className="second">
        <span>Your order has been placed successfully.</span>
        <button type='button' onClick={backToHome}>Go back to Home</button>
      </div>

    </div>
  )
}

export default OrderConfirmationPage
