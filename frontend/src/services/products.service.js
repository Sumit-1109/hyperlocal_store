const URL = import.meta.env.VITE_BACKEND_URL;

export const getProducts = async (storeId) => {
    return await fetch(`${URL}/api/products/${storeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const searchProducts = async (query) => {
    return await fetch(`${URL}/api/products/search?query=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
  };
  

export const searchStoreProducts = async (storeId, query) => {
    return await fetch(`${URL}/api/products/${storeId}/search?query=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
  };
  