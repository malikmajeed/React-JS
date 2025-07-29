import React from 'react'


// Child of Dashboard component

 const LastChild = ({ isLoggedIn, onLogIn, onLogOut }) => {


  console.log(`LastChild component rendered & isLoggedIn = ${isLoggedIn}`);



  return (
    <>
      {isLoggedIn ? (
        <div>
          <h3>Welcome, You are logged In</h3>
          <button onClick={onLogOut}>Log Out</button>
        </div>
      ) : (
        <div>
          <h3>Please LogIn</h3>
          <button onClick={onLogIn}>Log In</button>
        </div>
      )}
    </>
  );
};


export default LastChild;