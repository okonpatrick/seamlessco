"use client";
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:3000/auth/login', {
      email,
      password,
    });
    const { access_token } = response.data;
    localStorage.setItem('token', access_token);
    const user = jwtDecode(access_token);
    setUser(user);
  };

  const register = async (firstname, lastname, email, dateofbirth, password, confirmpassword, role) => {
    await axios.post('http://localhost:3000/auth/register', {
      firstname,
      lastname,
      email,
      dateofbirth,
      password,
      confirmpassword,
      role
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
