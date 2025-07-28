# 🔐 React Context API – Login Example

This guide demonstrates how to use the React Context API to manage login state (`isLoggedIn`) and authentication functions (`handleLogIn`, `handleLogOut`) across deeply nested components—without props drilling.

---

## 📁 Folder Structure

```
src/
│
├── LogInContext.js    # Context creation
├── LogInProvider.js   # Provider component
├── Main.js            # Top-level component using provider
├── HomePage.js        # First child
├── Dashboard.js       # Nested child
└── LastChild.js       # Final child accessing context
```

---

## ⚙️ Step 1: Create the Context
2346a5 
**LogInContext.js**
```js
import { createContext } from 'react';

const LogInContext = createContext();

export default LogInContext;
```

---

## 🧠 Step 2: Create the Provider

**LogInProvider.js**
```js
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
```

---

## 🧩 Step 3: Use Provider in Main Component

**Main.js**
```js
import React from 'react';
import HomePage from './HomePage';
import LogInProvider from './LogInProvider';

const Main = () => (
  <LogInProvider>
    <h1>Welcome to the App</h1>
    <HomePage />
  </LogInProvider>
);

export default Main;
```

---

## 👶 Step 4: Access Context in Any Child

**LastChild.js**
```js
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
```

---

## 📝 Notes & Benefits

- **No props drilling:** Context API eliminates the need to pass props through many layers.
- **Global state access:** Any component can access authentication state/functions.
- **Clean & scalable:** Easy to maintain and extend.
- **Easy authentication management:** Centralized logic for login/logout.

> You can add more values to the context (e.g., user, token, role) as your app grows.  
> For complex state logic, consider combining Context API with `useReducer`.
