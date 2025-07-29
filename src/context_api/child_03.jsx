import React, {useContext} from 'react'

import { LogInContext } from './index';

// Child of Dashboard component

 const LastChild = () => {


  const { isLoggedIn, handleLogIn, handleLogOut } = useContext(LogInContext);




  return (
    <>
      {isLoggedIn ? (
        <div>
          <h3>Welcome, You are logged In</h3>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <div>
          <h3>Please LogIn</h3>
          <button onClick={handleLogIn}>Log In</button>
        </div>
      )}
    </>
  );
};


export default LastChild;