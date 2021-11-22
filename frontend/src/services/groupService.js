import httpService from "./httpService.js";
const BASE_URL = "/group";

export const groupService = {
  query,
  save,
};

async function query(filterBy) {
  let queryStr = "";
  console.log("query");
  const res = await httpService.get(`${BASE_URL}${queryStr}`);
  return res[0];
}

async function save(group) {
  const res = await httpService.put(`${BASE_URL}`, group);
  return res;
}
