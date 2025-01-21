import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Basket from './components/Basket';
import Home from './components/Home';
import basketService from './services';

import {
	Routes,
	Route,
	Link,
	Navigate,
	useParams,
	useNavigate,
} from "react-router-dom";

function App() {

  const [ dummyBaskets, setDummyBaskets ] = useState([]);

  // useEffect to grab all baskets so we can map through collection and display
  useEffect(() => {
    basketService.getUserBaskets()
      .then((response) => {
        setDummyBaskets(response);
      })
      .catch((error) => console.error(error));
  }, []);
  //

  const allBaskets = (dummyFooBaskets) => {
    console.log(dummyFooBaskets);
    return dummyFooBaskets.map(({basket_address}) => (
      <li key={basket_address}>
        <Link to={`/basket/view/${basket_address}`}>basket {basket_address}</Link>
      </li>
    ));
  }

  return (
    <>
      <h1>This is a header</h1>
      <ul>
        <li key="home"><Link to="/">home</Link></li>
        {allBaskets(dummyBaskets)}
      </ul>

      <Routes>
        <Route path="/basket/view/:basket_address" element={<Basket />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
