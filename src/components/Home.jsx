import { Link } from "react-router-dom";
import basketService from "../services";


const allBaskets = (baskets, setBaskets) => {

  // Note this returns a function because we're creating different event
  // handlers for each basket. Also it's in `allBaskets()` because we need
  // access to `baskets` and `setBaskets`.
  const handleDeleteBasket = (basket_address) => {
    return () => {
      basketService.deleteBasket(basket_address)
        .then((status) => {
          console.log(status);
          if (status === 204) {
            setBaskets(baskets.filter((basket) => basket.basket_address !== basket_address));
          }
        })
        .catch(error => console.error(error));
    };
  };
  
  return baskets.map(({ basket_address }) => (
    <li key={basket_address}>
      <Link to={`/basket/view/${basket_address}`}>
        basket {basket_address}
      </Link>
      <button
        className="btn btn-circle btn-warning"
        onClick={handleDeleteBasket(basket_address)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  ));
}

const Home = ({ baskets, setBaskets }) => (
  <>
    <button>create basket</button>
    <h2>Baskets</h2>
    <ul>
      {allBaskets(baskets, setBaskets)}
    </ul>
  </>
);

export default Home;
