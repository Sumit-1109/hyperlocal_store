import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../../components/CartCard/CartCard';
import './CartPage.scss';
import { selectTotalAmount } from '../../store/slices/cart.slice';
import { setShowModal } from '../../store/slices/showModal.slice';
import Modal from '../../components/Modal/Modal';

function CartPage() {

    const dispatch = useDispatch();
    const showModal = useSelector(state => state.showModal); 
    const cart = useSelector(state => state.cart);
    const totalPrice = useSelector(selectTotalAmount);
    const [message, setMessage] = useState(false);

    const handleOrderClick = () => {
      if(cart.length === 0) {
        setMessage(true);
        setTimeout(() => setMessage(false), 5000);
      } else {
        dispatch(setShowModal(true));
      }
    }

  return (
    <div className='cartPage'>
      <div className="cart-summary">
      {
        cart.length > 0 ? (
            cart.map((item) => (
                <CartCard key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} />
            ) ) 
        ) : (
            <span>Cart is empty !!</span>
        )
      }
      </div>

      <div className="order-section">
        <div className="total-price">
          <span className="price-label">Total:</span>
            <span>Rs.{totalPrice}</span>
        </div>


          <span className='error-message'>{message ? "Add items to cart to proceed" : ''}</span>



          <button type="button" className="order-btn" onClick={handleOrderClick}>Place Order</button>
      </div>

      {
        showModal && cart.length > 0 && <Modal />
      }
    </div>
  )
}

export default CartPage
