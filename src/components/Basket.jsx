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
    <div className='prose p-5'>
      <h1>{basket_address}</h1>
      <ol>
        {basketRequests.map((request) => (
          <li key={request.timestamp} className="py-4 flex">
            <Request request={request}/>
          </li>
        ))}
      </ol>
    </div>
  );
} 

export default Basket;