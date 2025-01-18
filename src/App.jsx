import { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import Basket from './components/Basket';
import Home from './components/Home';

import {
	Routes,
	Route,
	Link,
	Navigate,
	useParams,
	useNavigate,
} from "react-router-dom";

function App() {

  const [ dummyBaskets, setDummyBaskets ] = useState(["abc", "def"]);

  // useEffect to grab all baskets so we can map through collection and display

  //

  const allBaskets = (dummyFooBaskets) => {
    console.log(dummyFooBaskets);
    return dummyFooBaskets.map(basketName => (
      <li key={basketName}>
        <Link to={`/basket/view/${basketName}`}>basket {basketName}</Link>
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
        <Route path="/basket/view/:basketName" element={<Basket />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
