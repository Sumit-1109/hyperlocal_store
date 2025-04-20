const URL = import.meta.env.VITE_BACKEND_URL;

export const getStores = async () => {
    return await fetch(`${URL}/api/stores`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}