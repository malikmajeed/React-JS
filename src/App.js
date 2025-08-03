// import logo from './logo.svg'; 
import './App.css';
// import PropsDrillingComponent from "./props_drilling";
// import ContextApiComponent from "./context_api";

// import Todos from "./todos_contextApi";
import GetCount from './zustand/';

function App() {
  return (
    <>
      {/* <h1>Props Drilling Component</h1>
      <PropsDrillingComponent /> */}

      {/* <h1>Props Drilling Component</h1>
      <ContextApiComponent /> */}

      {/* todos context api */}
      {/* <h1>Todos Context API</h1>
      <Todos /> */}

      {/* zustand */}
      <h1>Zustand Store Example</h1>
      <GetCount />
    </>
  );
}

export default App;
