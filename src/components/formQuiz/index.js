import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { createAnswers } from "../../services/answersServices";
import "./style.scss"
const FormQuiz = ()=>{
    const navigate = useNavigate();
    const questions = useSelector(state => state.questionList);
    var { topicId } = useParams();
    topicId = parseInt(topicId);
    const inforUser =  useSelector(state => state.inforUser);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inforUser && inforUser.length!=0){
          const elementsArray = Array.from(e.target.elements);
          let arrOfAnswer= [];
          let tmp ;
          elementsArray.forEach((input) => {
              if (input.checked && input.type === 'radio') {
                
                tmp={
                      "questionId": parseInt(input.name.substring(9)),
                      "answer": parseInt(input.value)
                    };
                  arrOfAnswer.push(tmp);
              }
            });
            
            var inforUserAnswer = {
              "userId":inforUser.id,
              "topicId": topicId,
              "answers":arrOfAnswer
            }
            
            const createAnswer = async () => {
              await createAnswers(inforUserAnswer);
            };
            createAnswer();
            window.location.href="/answers";
        }
        else {
          navigate('/login')
        }
      };
    
    
    const quesListQuiz= questions.filter((item) => item.topicId === topicId);
    
    return (
        <>
        {!(inforUser && inforUser.length!=0)&&<h2>Vui lòng đăng nhập để làm bài</h2>}
        <form className="question" onSubmit={handleSubmit}>
        {quesListQuiz.map((item,index) => (
          
            <div key={index}>
                <div>Câu hỏi số {index+1}: {item.question}</div>
                {item.answers.map((it,idd)=>(
                  <div key={idd}>
                    <input 
                      type="radio" 
                      id={`answer_for_${index}_${idd}`} 
                      name={`question_${item.id}`} 
                      value={idd} 
                      disabled={!(inforUser && inforUser.length!=0)}
                    />
                    <label 
                      htmlFor={`answer_for_${index}_${idd}`}
                    > 
                      {it}
                    </label>
                    
                  </div>
                ))} 
            </div>
        ))}
        <button type="submit">Nộp bài</button>
        </form>
        </>
    )
}
export default FormQuiz;