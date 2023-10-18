import  getCookieValue  from "../helpers/getCookie";
import { useEffect, useState } from "react";
import { getListUser } from "../../src/services/usersServices";
import { getListTopic } from "../services/topicServices";
import { getQuestion } from "../services/questionServices";
import {useDispatch } from "react-redux";
import setInforUser from "../actions/inforUser";
import setQuestionList from "../actions/questionList";
import setTopicList from "../actions/topicList";
let c=0;
const AuthMiddleware = (props) => {
    const [users, setUsers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [topics, setTopics] = useState([]);

    const fetchApi = async () => {
      const data = await getListUser();
      setUsers(data);
    }
    useEffect(() => {
      fetchApi();  
    }, []);
      const fetchApi2 = async () => {
        const data = await getQuestion();
        setQuestions(data);
    }
    useEffect(() => {
      fetchApi2();  
    }, []);
      const fetchApi3 = async () => {
        const data = await getListTopic();
        setTopics(data);
    }
    useEffect(() => {
      fetchApi3();  
    }, []);  
    const token = getCookieValue('token');
    const foundItem = users.find(item => item.token === token);
    const dispatch =useDispatch();
    if(foundItem ) dispatch(setInforUser(foundItem));
    if(questions && questions.length>0) dispatch(setQuestionList(questions));
    if(topics && topics.length>0) dispatch(setTopicList(topics))
    
    
    if(foundItem && questions && topics && questions.length>0 && topics.length>0){
       return <>{props.children}</>;
        
    }
    else {
      
      if(c==3){
        window.location.href="/login";
      }
    }
    c+=1;
};
export default AuthMiddleware;