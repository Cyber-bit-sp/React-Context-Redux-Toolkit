import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser({...userData, loggedIn: true});
  }

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isLoggedIn: !!user
  };

  return (
    <UserProvider.Provider value={value}>
      {children}
    </UserProvider.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  if(!context) {
    throw new Error('useUser must be used within UserProvider');
  }

  return context;

}