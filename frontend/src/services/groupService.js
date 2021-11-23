import httpService from "./httpService.js";
const BASE_URL = "/group";

export const groupService = {
  query,
  save,
  remove,
};

async function query(filterBy = "") {
  let queryStr = "";
  const res = await httpService.get(`${BASE_URL}${queryStr}`);
  return res;
}

async function save(group) {
  console.log(group);
  const res = await httpService.put(`${BASE_URL}`, group);
  return res;
}

async function remove(groupId) {
  await httpService.delete(`${BASE_URL}/${groupId}`);
}
