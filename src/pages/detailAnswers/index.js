// làm biến redux, nếu ko tồn tại biến redux thì quay lại trang login để set lại cho redux
import  { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getQuestion } from "../../services/questionServices";
import "./style.scss"
const DetailAnswer = ()=>{

    var { id } = useParams();
    id = parseInt(id);

    const questions = useSelector(state => state.questionList);
    const answerOfUserReducer = useSelector((state) => state.answerOfUserReducer);

    if(answerOfUserReducer.length>0 && answerOfUserReducer){

      const foundAnswer = answerOfUserReducer.find((item) => item.id === id);
    
      const quesListQuiz= questions.filter((item) => item.topicId === foundAnswer.topicId);
      
      const foundAnswers=foundAnswer.answers;
      
      
      
      return (
          <>
            <h1>Trang detail answer</h1>
            {quesListQuiz.map((item, id) =>{
              const foundAn = foundAnswers.find((item2) => item2.questionId === item.id);
               
            return (
              <div key={id}>
                <div>
                  Câu hỏi số {id + 1}: {item.question}
                </div>
                {item.answers.map((it, idd) => {
                  
                  var isChecked = foundAn && foundAn.answer === idd;
                  var isRedBG = isChecked && foundAn.answer!==item.correctAnswer;
                  return (
                    <div key={idd}>
                      <input
                        type="radio"
                        id={`answer_${idd}`}
                        name={`question_${id}`}
                        value={it}
                        defaultChecked={isChecked}
                        
                      />
                      <label
                        className={`${idd === item.correctAnswer ? "colorGreen" : ""} ${ isRedBG ? "colorRed" : ""}`}
                        htmlFor={`answer_${idd}`}
                      >
                        {it}
                      </label>
                    </div>
                  );
                })}
              </div>
            )}
            )}
          </>
        );
    }

      
    else window.location.href="/answers";
}
export default DetailAnswer;