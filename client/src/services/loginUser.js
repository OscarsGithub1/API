export const loginUser = async (email, password) => {
    try {
        const res = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        return res.status === 200
            ? { success: true, message: data.message }
            : { success: false, message: data.error };
    } catch (error) {
        return { success: false, message: 'Error logging in' };
    }
};
