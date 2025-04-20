const URL = import.meta.env.VITE_BACKEND_URL;

export const addToCartAPI = async ({ product, quantity = 1, name, price }) => {
    return await fetch(`${URL}/api/orders/addToCart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product, quantity, name, price })
    });
}

export const getCartAPI = async () => {
    return await fetch(`${URL}/api/orders/cart`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const increaseCartApi = async (id) => {
    return await fetch (`${URL}/api/orders/cart/increase/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const decreaseCartApi = async (id) => {
    return await fetch (`${URL}/api/orders/cart/decrease/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const clearCartApi = async () => {
    return await fetch (`${URL}/api/orders/cart/clear`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
