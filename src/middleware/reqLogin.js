import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom"
const ReqLogin = (props)=>{
    const inforUser = useSelector(state => state.inforUser);
    if(inforUser && inforUser.length!=0)
        
            
        return <>{props.children}</>;
            
        
    else {
        return(
            <>
            <h2>Bạn chưa đăng nhập</h2>
            <button><NavLink to= "/login"> Click vào đây để đăng nhập </NavLink></button>
            </>
        )
    }
}
export default ReqLogin;