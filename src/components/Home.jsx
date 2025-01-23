import { Link } from "react-router-dom";
import basketService from "../services";


const Home = ({ baskets, setBaskets, createBasket }) => {
  const allBaskets = () => {
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

  const handleDeleteBasket = (basket_address) => {
    return () => {
      basketService.deleteBasket(basket_address)
        .then((status) => {
          if (status === 204) {
            setBaskets(baskets.filter((basket) => basket.basket_address !== basket_address));
          }
        })
        .catch(error => console.error(error));
    };
  };
  
  const handleCreateBasket = (event) => {
    event.preventDefault();
    createBasket();
  }
  
  return (
    <div className="p-5">
      <button onClick={handleCreateBasket} className="btn btn-secondary">create basket</button>
      {maybeBasketList()}
    </div>
  );
}

export default Home;
