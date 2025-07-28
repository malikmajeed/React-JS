import React from 'react'
import Dashboard from './dashboard'

const HomePage = ({isLoggedIn, handleLogIn, handleLogOut}) => {

  console.log(`HomePage component rendered & isLoggedIn = ${isLoggedIn}`);
  return (
    <div>
      <h1>Home Page</h1>
      <Dashboard
        isLoggedIn={isLoggedIn}
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
      />
    </div>
  );
}

export default HomePage
