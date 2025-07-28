# 🔐 React Context API – Login Example
This example demonstrates how to use React Context API to manage login state (isLoggedIn) and authentication functions (handleLogIn, handleLogOut) across deeply nested components without props drilling.
 ## 📁 Folder Structure
src/
│
├── LogInContext.js       # Context creation
├── LogInProvider.js      # Provider component
├── Main.js               # Top-level component using provider
├── HomePage.js           # First child
├── Dashboard.js          # Nested child
└── LastChild.js          # Final child accessing context
## ⚙️ 1. Create the Context
LogInContext.js
import { createContext } from 'react';

const LogInContext = createContext();

export default LogInContext;
## 🧠 2. Create the Provider
LogInProvider.js
import React, { useState } from 'react';
import LogInContext from './LogInContext';

const LogInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => setIsLoggedIn(true);
  const handleLogOut = () => setIsLoggedIn(false);

  return (
    <LogInContext.Provider value={{ isLoggedIn, handleLogIn, handleLogOut }}>
      {children}
    </LogInContext.Provider>
  );
};

export default LogInProvider;

## 🧩 3. Use Provider in Main Component

Main.js
import React from 'react';
import HomePage from './HomePage';
import LogInProvider from './LogInProvider';

const Main = () => {
  return (
    <LogInProvider>
      <h1>Welcome to the App</h1>
      <HomePage />
    </LogInProvider>
  );
};

export default Main;

## 👶 4. Access Context in Any Child

LastChild.js
import React, { useContext } from 'react';
import LogInContext from './LogInContext';

const LastChild = () => {
  const { isLoggedIn, handleLogIn, handleLogOut } = useContext(LogInContext);

  return (
    <div>
      <p>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default LastChild;
## 📝 Notes
This setup provides a clean and scalable way to manage authentication state and access it across your app. It's a great starting point for building more complex applications.
🚀 Benefits of Context API in This Setup
✅ No props drilling
✅ Global state access across components
✅ Clean and scalable codebase
✅ Easier to manage authentication
📝 Notes
You can add other values to the context later (e.g., user, token, role, etc.).
If your app grows, consider combining this with useReducer for more robust state logic.
