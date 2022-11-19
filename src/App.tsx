import { useSelector } from "react-redux";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbor from "./components/navbor/Navbor";
import { getDarcModeState } from "./redux/darckMode.slice";

function App() {

  const {darckmode} = useSelector(getDarcModeState)
  
  return (   
    <div className={`${darckmode ? "dark" : ""}`}>
      <Container>
        <div className="App">
          <Navbor/>
          <div className="app-content">
            <Header/>
            <Main/>
          </div>
        </div>
      </Container>
    </div> 
  );
}

export default App;
 