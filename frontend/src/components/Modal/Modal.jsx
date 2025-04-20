import React, { useState } from 'react'
import './Modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerName } from '../../store/slices/customerName.slice';
import { setShowModal } from '../../store/slices/showModal.slice';
import { useNavigate } from 'react-router-dom';
import { clearCartApi } from '../../services/cart.service';
import { clearCart } from '../../store/slices/cart.slice';
import { placeOrderAPI } from '../../services/order.service';

function Modal() {

    const dispatch = useDispatch();
    const customerName = useSelector(state => state.customerName);
    const cart = useSelector(state => state.cart); 
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    const handleOrder = async () => {
      if (customerName.trim() !== ''){
        const products = cart.map(item => ({
          id : item.id,
          quantity : item.quantity
        }));
        console.log(products);
        await placeOrderAPI(products);
        await clearCartApi();
        dispatch(clearCart());
        navigate('/order-confirmation')
      } else {
        setShowError(true);
      }
    }

  return (
    <div className='modalContainer' onClick={() => dispatch(setShowModal(false))}>
      <div className="modalBox" onClick={(e) => e.stopPropagation()}>
        <span>Enter Name to confirm order</span>
        <input type="text" value={customerName} onChange={(e) => {
          dispatch(setCustomerName(e.target.value));
          setShowError(false);
          }} placeholder='Name' />
        <div className="button-container">
        <button type='button' onClick={handleOrder}>Confirm Order</button>
        <p>{showError ? "Please enter your name" : ""}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal;
