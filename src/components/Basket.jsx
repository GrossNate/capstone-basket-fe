import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import basketService from '../services';

const Basket = () => {
  const [basketRequests, setBasketRequests] = useState();
  const { basketName } = useParams();

  useEffect(() => {
    basketService.getBasketContents(basketName)
      .then((basketData) => {
        setBasketRequests(basketData);
      })
      .catch((error) => console.error(error));
  }, [basketName]);

  if (!basketName) return null;

  return (
    <>
      This is a basket and its name is {basketName}.
      <h2>All Requests:</h2>
      {basketRequests}
    </>
  );
} 

export default Basket;