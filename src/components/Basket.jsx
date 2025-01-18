import { useParams } from 'react-router-dom';

const Basket = () => {

  const { basketName } = useParams();

  return (
    <>
      This is a basket and its name is {basketName}.
    </>
  );
} 

export default Basket;