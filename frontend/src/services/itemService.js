import httpService from "./httpService.js";
const BASE_URL = "/item";

export const itemService = {
  query,
};

async function query(filterBy) {
  let queryStr = "";
  const res = await httpService.get(`${BASE_URL}${queryStr}`, {
    params: filterBy,
  });
  return res;
}
async function getItemById(id) {
  const res = await httpService.get(`${BASE_URL}/${id}`);
  return res;
}
async function save(item) {
  if (item._id) {
    const res = await httpService.put(`${BASE_URL}/${item._id}`, item);
    return res;
  } else {
    const res = await httpService.post(`${BASE_URL}`, item);
    return res;
  }
}
async function remove(itemId) {
  await httpService.delete(`${BASE_URL}/${itemId}`);
}
