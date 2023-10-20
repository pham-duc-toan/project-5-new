const checkAnswer= (answer, correct)=>{
    if(answer.length>0 && correct.length>0){
        
        let cnt =0;
        for(let i = 0;i<correct.length;i++){
            let ans = answer.find((item) => item.questionId === correct[i].id);
            if(ans){
                if(ans.answer === correct[i].correctAnswer)cnt+=1;
            }
        }
        return `${cnt}/${correct.length}`;
    }
}
export default checkAnswer;