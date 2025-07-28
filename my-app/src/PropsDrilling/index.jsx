import React, {useState} from 'react'
import HomePage from './homePage';



const Main = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false);


console.log(`Main component rendered & isLoggedIn = ${isLoggedIn}`);


//handle login event
const handleLogIn = ()=>{
    setIsLoggedIn(true);
    console.log("login");
}

// handle logout event
const handleLogOut =()=>{
    setIsLoggedIn(false);
    console.log("logout");
}




  return (
    <>
      <h1>Props Drilling Component</h1>
      <HomePage
        isLoggedIn={isLoggedIn}
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
      />
    </>
  );
}

export default Main
