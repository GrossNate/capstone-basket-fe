import axios from 'axios';

const BASE_URL = 'https://tamerjohn.work';

async function addBasket() {
  const response = await axios.post(`${BASE_URL}/new`);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(`Failed to create basket. Status: ${response.status}`);
  }
}

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
  addBasket,
  getBasketContents,
  getUserBaskets,
  deleteBasket
};
