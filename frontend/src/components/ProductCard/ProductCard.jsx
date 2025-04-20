import React from 'react'
import './ProductCard.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cart.slice';
import { addToCartAPI } from '../../services/cart.service';

function ProductCard({ name, price, id }) {

    const dispatch = useDispatch();

    const handleAddToCart = async () => {
        dispatch(addToCart({name, price, id}));

        try {
          await addToCartAPI({ name, price, product : id, quantity: 1 });
          
        } catch (err) {
          console.error(err);
        }
    }

  return (
    <div className='productCard'>
      <div className="productInfo">
        <p>{name}</p>
        <p className='price'>Rs.{price}</p>
      </div>
      <button className="addToCart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
