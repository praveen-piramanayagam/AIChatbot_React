// Save token to localStorage
export const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  
  // Retrieve token from localStorage
  export const getToken = () => {
    return localStorage.getItem("authToken");
  };
  
  // Clear token from localStorage (on logout)
  export const clearToken = () => {
    localStorage.removeItem("authToken");
  };
  