import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "./components/cardList/cardList.slice";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbor from "./components/navbor/Navbor";
import { getDarcModeState } from "./redux/darckMode.slice";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products',
    })
    .then(function (response) {
      dispatch(allProducts(response.data))
    });

    console.log("salom");
  },[])

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
 