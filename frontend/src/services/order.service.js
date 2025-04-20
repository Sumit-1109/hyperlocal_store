const URL = import.meta.env.VITE_BACKEND_URL;

export const placeOrderAPI = async (products) => {
    return await fetch(`${URL}/api/orders/success`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ products })
    });
}