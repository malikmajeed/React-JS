import React, {useState, createContext} from 'react'
import HomePage from './child_01';



export const LogInContext = createContext();


const Main = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false);


// creating a custom hook, loginContext
// we'll use this to pass the isLoggedIn state and the login/logout functions to the child components


//we'll pass thse props as index.jsx --> homPage --> Dashbard --> Last Child. 



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
      <h1>Context API</h1>
      {/* wrap the HomePage component with a LogInContext provider: context provider injects the props into the child components. */}
      <LogInContext.Provider value={{ isLoggedIn, handleLogIn, handleLogOut }}>
        <HomePage />
      </LogInContext.Provider>
    </>
  );
}

export default Main
