// functions/registerUser.js
export const registerUser = async (email, password) => {
    try {
      const res = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await res.json();
      
      if (res.status === 201) {
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.error };
      }
    } catch (error) {
      return { success: false, message: 'Error registering user' };
    }
  };
  