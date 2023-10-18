import { get,post } from "../utils/request";

export const getAnswers = async () => {
  const data = await get("answers");
  return data;
}
export const createAnswers = async (options) => {
  const data = await post("answers", options);
  return data;
}