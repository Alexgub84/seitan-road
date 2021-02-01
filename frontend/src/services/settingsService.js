import httpService from "./httpService.js";
const BASE_URL = "/settings";

export const settingsService = {
  query,
  save,
};

async function query(filterBy) {
  const res = await httpService.get(`${BASE_URL}`);
  return res[0];
}

async function save(settings) {
  const res = await httpService.put(`${BASE_URL}`, settings);
  return res;
}
