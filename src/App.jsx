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

  useEffect(() => {
    basketService.getUserBaskets()
      .then((response) => {
        setDummyBaskets(response);
      })
      .catch((error) => console.error(error));
  }, []);

  const allBaskets = (dummyFooBaskets) => {
    console.log(dummyFooBaskets);
    return dummyFooBaskets.map(({basket_address}) => (
      <li key={basket_address} onClick={closeBasketMenu}>
        <Link to={`/basket/view/${basket_address}`}>
          basket {basket_address}
        </Link>
      </li>
    ));
  }
  
  const closeBasketMenu = () => {
    const details = document.getElementById('basketMenuDetails');
    details.removeAttribute('open');
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Team 4 (fka Team 5) Request Basket</a>
        </div>
        <div className="flex-none z-50">
          <ul className="menu menu-horizontal px-1">
              <li><Link to="/">home</Link></li>
            <li>
              <details id="basketMenuDetails">
                <summary>Baskets</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  {allBaskets(dummyBaskets)}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/basket/view/:basket_address" element={<Basket />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
