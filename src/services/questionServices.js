import { get } from "../utils/request";

export const getQuestion = async () => {
  const data = await get("questions");
  return data;
}