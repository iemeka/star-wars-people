import ContextProvider from "./assets/environ/ContextProvider";
import Main from './Main'
// import People from "./People";

function App() {
  return <ContextProvider> <Main /> {/* <People /> */}</ContextProvider>;
}

export default App;
