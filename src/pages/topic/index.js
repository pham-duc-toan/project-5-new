import { NavLink } from "react-router-dom";
import "./topic.scss"
import { useSelector } from "react-redux";
const Topic =()=>{
    const topics = useSelector(state => state.topicList);
    return (
        <>
            <h1>Danh sách chủ đề luyện tập</h1>
            <table>
                <thead>
                    <tr>
                    <th>Số thứ tự</th>
                    <th>Tên chủ đề</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {topics.map(item => (
                    <tr key={item.id}>
                        <td> {item.id} </td>
                        <td> {item.name} </td>
                        <td><NavLink to={`/quiz/${item.id}`}>Làm bài</NavLink></td>
                    </tr> 
                    ))}
                    
                    
                
                </tbody>
            </table>
        </>
    )
}
export default Topic;