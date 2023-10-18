import { combineReducers } from "redux";
import { questionList } from "./questionList";
import { answerOfUserReducer } from "./answerOfUser";
import { inforUser } from "./inforUser";
import { topicList } from "./topicList";
export const allReducer = combineReducers({
  
  answerOfUserReducer,
  inforUser,
  questionList,
  topicList
  // Thêm các reducer khác ở đây
});