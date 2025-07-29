import React from 'react'
import LastChild from './child_03'

const Dashboard = ({isLoggedIn, handleLogIn, handleLogOut}) => {

  console.log(`Dashboard component rendered & isLoggedIn = ${isLoggedIn}`);

  return (
    <div>
        
      <h1>Dashboard</h1>
      {/* receiving from parant as handleLogin and passing to child as OnLogIn */}
      <LastChild isLoggedIn={isLoggedIn} onLogIn={handleLogIn} onLogOut={handleLogOut} />
     
    </div>
  );
}

export default Dashboard
