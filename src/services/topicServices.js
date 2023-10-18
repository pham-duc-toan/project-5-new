import { get } from "../utils/request";

export const getListTopic = async () => {
  const data = await get("topics");
  return data;
}