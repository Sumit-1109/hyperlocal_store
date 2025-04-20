import React, { useEffect, useState } from 'react'
import './HomePage.scss';
import { getStores } from '../../services/store.service';
import { useDispatch, useSelector } from 'react-redux'
import { setStores } from '../../store/slices/store.slice';
import StoreCard from '../../components/StoreCard/StoreCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { searchProducts } from '../../services/products.service';
import ProductCard from '../../components/ProductCard/ProductCard';
import { setProducts } from '../../store/slices/products.slice';

function HomePage() {

    const dispatch = useDispatch();
    const stores = useSelector((state) => state.stores);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        dispatch(setProducts([]));

        const fetchStores = async () => {
            try {
                const res = await getStores();

                if(res.status === 200) {
                    const data = await res.json();
                    dispatch(setStores(data));
                }
            } catch (err) {
                alert("Failed to Fetch Stores");
                console.error(err);
            }
        };
        fetchStores();

    }, []);

    const handleSearch = async (query) => {
        if (!query) return setSearchResults([]);

        try {
            const res = await searchProducts(query);
            if (res.status === 200) {
                const data = await res.json();
                setSearchResults(data.products);
            }
        } catch (err) {
            console.log("Search failed", err);
        }
    };

  return (
    <div className='homePage'>

        <div className="searchBar-container">
            <SearchBar placeholder={"Search products"} onSearch={handleSearch} />
        </div>

      <div className="storeList">
      {
        searchResults.length > 0 ? (
            searchResults.map((product) => (
              <ProductCard key={product._id} name={product.name} price={product.price} id={product._id} />
            ))
        ) : (
          stores.length > 0 && (
            stores.map((store) => (
              <StoreCard key={store._id} name={store.name} location={store.location} id={store._id} />
            ))
          )
        )
      }
      </div>
    </div>
  )
}

export default HomePage
