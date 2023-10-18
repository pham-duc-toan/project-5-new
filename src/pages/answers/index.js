import { useEffect, useState } from "react";
import  getCookieValue  from "../../helpers/getCookie";
import { getAnswers } from "../../services/answersServices";
import { getQuestion } from "../../services/questionServices";
import { getListUser } from "../../services/usersServices";
import checkAnswer from "../../helpers/checkAnswers";
import { useDispatch } from "react-redux";
import setAnswerOfUser from "../../actions/answerOfUsers";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss"
const Answer = () => {
  const dispatch = useDispatch();
  // const answerOfUserReducer = useSelector((state) => state.answerOfUserReducer);
  const questions = useSelector(state => state.questionList);
  const [answers, setAnswers] = useState([]);
  const foundItem = useSelector(state => state.inforUser);

  useEffect(() => {
    const fetchApi2 = async () => {
      const data = await getAnswers();
      setAnswers(data);
    };
    fetchApi2();
  }, []);
  

  
    if (  questions.length > 0 && foundItem && answers.length > 0) {
     
      const userId = foundItem.id;
      const listAnswers = answers.filter((item) => item.userId === userId);
      
      dispatch(setAnswerOfUser(listAnswers));
      const printfListAnswers= listAnswers.reverse();
      
      return (
        <>
          <h1>History </h1>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên chủ đề</th>
                <th>Số câu đúng</th>
                <th>Xem chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {printfListAnswers.map((item,stt) => (
                <tr key={item.id}>
                  <td>{stt+1}</td>
                  <td> Chủ đề {item.topicId} </td>
                  <td>
                    {checkAnswer(
                      item.answers,
                      questions.filter((it) => it.topicId === item.topicId)
                    )}
                  </td>
                  <td>
                    <NavLink to={`/detail/${item.id}`}>Chi tiết</NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
  
    
  
};

export default Answer;
