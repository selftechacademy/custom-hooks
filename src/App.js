import React, { useState, createContext } from "react";
import AdminPage from "./components/adminPage/AdminPage";
import HomePage from "./components/homePage/HomePage";
import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";

//create context and export it.
//
export const UserContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        <p>App Js {isAuthenticated}</p>

        {!isAuthenticated ? (
          <LoginPage />
        ) : (
          <>
            <AdminPage />
            <HomePage />
          </>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
