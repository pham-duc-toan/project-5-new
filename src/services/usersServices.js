import { get ,post } from "../utils/request";

export const getListUser = async () => {
  const data = await get("users");
  return data;
}
export const createUser = async (options) => {
  const data = await post("users", options);
  return data;
}