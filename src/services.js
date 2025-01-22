import axios from 'axios';

const BASE_URL = 'https://tamerjohn.work';
// const BASE_URL = 'http://localhost:3000';

async function getUserBaskets() {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
}

async function getBasketContents(basket_address) {
  const response = await axios.get(`${BASE_URL}/${basket_address}/web`);
  return response.data;
}

async function deleteBasket(basket_address) {
  const response = await axios.delete(`${BASE_URL}/${basket_address}/web`);
  return response.status;
}

export default {
  getBasketContents,
  getUserBaskets,
  deleteBasket
};
