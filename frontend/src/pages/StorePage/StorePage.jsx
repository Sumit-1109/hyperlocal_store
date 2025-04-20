import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProducts, searchStoreProducts } from '../../services/products.service';
import { setProducts } from '../../store/slices/products.slice';
import ProductCard from '../../components/ProductCard/ProductCard';
import './StorePage.scss';
import SearchBar from '../../components/SearchBar/SearchBar';

function StorePage() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { storeId } = useParams();
  const [storeName, setStoreName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const res = await getProducts(storeId);

        if (res.status === 200) {
          const data = await res.json();
          dispatch(setProducts(data.products));
          setStoreName(data.storeName)
        }
      } catch (err) {
        alert("Failed to Fetch Products");
        console.error(err);
      }
    };

    fetchProducts(storeId);
  }, [storeId]);

  const handleSearch = async (query) => {
    if (!query) return setSearchResults([]);

    try {
      setLoading(true)
      const res = await searchStoreProducts(storeId, query);
      if (res.status === 200) {
        const data = await res.json();
        setSearchResults(data.products);
      }
    } catch (err) {
      alert("Failed to Search Products");
      console.log(err);
    } finally {
      dispatch(setLoading(false))
    }
  } 

  return (
    <div className='storePage'>
{
  !loading  && (
    <>
      
    <div className="storeName">
        <p>{storeName}</p>
        <SearchBar placeholder={`Search in ${storeName}`} onSearch={handleSearch} />

      </div>

      <div className="productsList">
      {
          searchResults.length > 0 ? (
            searchResults.map((product) => (
              <ProductCard key={product._id} name={product.name} price={product.price} quantity={product.quantity} id={product._id} />
            ))
          ) : (
            products.length > 0 && (
              products.map((product) => (
                <ProductCard key={product._id} name={product.name} price={product.price} quantity={product.quantity} id={product._id} />
              ))
            )
          )
        }
      </div>
    </>
  )
}
    </div>
  )
}

export default StorePage
