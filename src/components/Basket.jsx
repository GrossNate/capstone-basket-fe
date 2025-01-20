import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import basketService from '../services';

const Basket = () => {
  const [basketRequests, setBasketRequests] = useState();
  const { basket_address } = useParams();

  useEffect(() => {
    basketService.getBasketContents(basket_address)
      .then((basketData) => {
        setBasketRequests(basketData);
      })
      .catch((error) => console.error(error));
  }, [basket_address]);

  if (!basket_address) return null;

  return (
    <>
      This is a basket and its name is {basket_address}.
      <h2>All Requests:</h2>
      {basketRequests}
    </>
  );
} 

export default Basket;