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
    <tr key={basket_address}>
      <td>
      <Link to={`/basket/view/${basket_address}`}>
        <span className="">{basket_address}</span>
      </Link>
      </td>
      <td>
        <button
          className="btn btn-sm btn-error"
          onClick={handleDeleteBasket(basket_address)}>
          delete
        </button>
      </td>
    </tr>
  ));
}

const Home = ({ baskets, setBaskets }) => {
  const maybeBasketList = () => {
    if (baskets.length === 0) return null;

    return (
      <>
        <table className="table table-lg">
          <thead>
            <tr>
              <th colSpan='2' className="text-xl">Baskets</th>
            </tr>
          </thead>
          <tbody>
            {allBaskets(baskets, setBaskets)}
          </tbody>
        </table>
      </>
    )
  }
  
  return (
    <div className="p-5">
      <button className="btn btn-secondary">create basket</button>
      {maybeBasketList()}
    </div>
  );
}

export default Home;
