import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const login = (phone, password) => {
    const user = users.find(u => u.phone === phone);
    if (user) {
      if (user.password === password) {
        setCurrentUser(phone);
        return true;
      } else {
        alert('Wrong password!');
        return false;
      }
    } else {
      setUsers([...users, { phone, password }]);
      setCurrentUser(phone);
      return true;
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};