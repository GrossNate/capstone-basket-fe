import axios from 'axios';

const BASE_URL = '/';

async function getBasketContents(basket_address) {
  const response = await axios.get(`${BASE_URL}/${basket_address}/web`); // may not be correct API endpoint
  return response.data;
}

export default {
  getBasketContents,

}