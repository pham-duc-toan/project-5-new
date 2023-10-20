// làm biến redux, nếu ko tồn tại biến redux thì quay lại trang login để set lại cho redux
import  { useEffect, useState } from "react";
import { Link, Navigate, useParams } from 'react-router-dom';
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
      console.log();
      const foundAnswers=foundAnswer.answers;
      
      
      
      return (
          <>
            <h1>Trang detail answer</h1>
            {quesListQuiz.map((item, id) =>{
              const foundAn = foundAnswers.find((item2) => item2.questionId === item.id);
               var checkAnswer = 0;
            return (
              <div className="questions" key={id}>
                <div>
                  Câu hỏi số {id + 1}: {item.question}
                </div> 
                {item.answers.map((it, idd) => {
                  
                  var isChecked = foundAn && foundAn.answer === idd;//check có khoanh ko
                  var isRedBG = isChecked && foundAn.answer!==item.correctAnswer;//check khoanh sai ko
                  if(isChecked)checkAnswer=-1;
                  if(isChecked && foundAn.answer===item.correctAnswer)checkAnswer=1;
                  //checkAnswer =0 là chưa khoanh, =-1 là đã khoanh và sai, =1 là khoanh đúng
                  return (
                    <div key={idd}>
                      <input
                        type="radio"
                        id={`answer_${idd}`}
                        name={`question_${id}`}
                        value={it}
                        defaultChecked={isChecked}
                        disabled
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
                {checkAnswer ? <div className="answer">Câu trả lời: {checkAnswer==1? <span className="AC">Đúng</span>: <span className="WA">Sai</span>}</div> : <div className="CE">Bạn chưa trả lời câu hỏi này</div>}
              </div>
            )}
            )}
            <Link to={`/quiz/${foundAnswer.topicId}`}><button>Làm lại bài</button></Link>
          </>
        );
    }

      
    else window.location.href="/answers";
}
export default DetailAnswer;