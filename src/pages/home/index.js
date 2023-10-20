import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Home =()=>{
    const inforUser = useSelector(state => state.inforUser);
    
        return (
            <>
                <h1>Xin chào bạn, {inforUser.fullName} </h1>
            </>
        )
    
}
export default Home;