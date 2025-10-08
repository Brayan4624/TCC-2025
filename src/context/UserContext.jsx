import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState('estudante'); // 'estudante' ou 'empresa'
  const [userData, setUserData] = useState({
    nome: 'João Paulo',
    email: 'joao.paulo@email.com',
    avatar: 'JP'
  });

  const login = (type, data) => {
    setUserType(type);
    if (data) {
      setUserData(data);
    }
  };

  const logout = () => {
    setUserType('estudante');
    setUserData({
      nome: 'João Paulo',
      email: 'joao.paulo@email.com',
      avatar: 'JP'
    });
  };

  return (
    <UserContext.Provider value={{ userType, userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
