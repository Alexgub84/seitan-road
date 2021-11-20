import httpService from "./httpService.js";
const BASE_URL = "/group";

export const groupService = {
  query,
  save,
};

async function query(filterBy) {
  const res = await httpService.get(`${BASE_URL}`);
  return res[0];
}

async function save(group) {
  const res = await httpService.put(`${BASE_URL}`, group);
  return res;
}
