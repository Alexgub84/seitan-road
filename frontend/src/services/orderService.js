import httpService from "./httpService.js";
const BASE_URL = "/order";

export const orderService = {
  query,
  getById,
  save,
  remove,
};

async function query(filterBy = {}, filterName) {
  if (filterBy) {
    const queryStr = filterBy ? `?${filterName}=${filterBy}` : "";
    const res = await httpService.get(`${BASE_URL}${queryStr}`, {
      params: filterBy,
    });
    return res;
  }
}

async function getById(id) {
  const res = await httpService.get(`${BASE_URL}/${id}`);
  return res;
}

async function save(order) {
  order.createdAt = new Date(Date.now()).toLocaleString();
  console.log();
  const res = await httpService.post(`${BASE_URL}`, order);
  return res;
}

async function remove(orderId) {
  await httpService.delete(`${BASE_URL}/${orderId}`);
}
