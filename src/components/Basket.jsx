import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import basketService from '../services';
import Request from './Request';

const Basket = () => {
  const [basketRequests, setBasketRequests] = useState([]);
  const { basket_address } = useParams();

  useEffect(() => {
    basketService.getBasketContents(basket_address)
      .then((basketData) => {
        setBasketRequests(basketData);
      })
      .catch((error) => console.error(error));
  }, [basket_address]);

  return (
    <>
      This is a basket and its name is {basket_address}.
      <h2>All Requests:</h2>
      <ol>
      {basketRequests.map((request) => (
        <li key={request.timestamp}>
          <Request request={request}/>
        </li>
        ))}
      </ol>
    </>
  );
} 

export default Basket;