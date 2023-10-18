import  setCookie  from "../../helpers/setCookie";
import { useEffect, useState } from "react";
import { getListUser } from "../../services/usersServices";
import { NavLink } from "react-router-dom";
import "./login.scss";
const Login = () => {
    const [users, setUsers] = useState([]);

    const fetchApi = async () => {
        const data = await getListUser();
        setUsers(data);
    }

    useEffect(() => {
        fetchApi();  
    }, []);

    
    const handleSubmit = (e) => {
        e.preventDefault();   
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const foundItem = users.find(item => item.email === email && item.password===password);
        if(foundItem){
            setCookie('token',foundItem.token,7);
            window.location.href="/";
        }
        else {
            alert("sai mật khẩu");
            
        }
    };
    
    return (
        <>
            <h1>Trang đăng nhập</h1>
            <form className="question" onSubmit={handleSubmit}>
                <div>
                    <label id="emailinput">email</label>
                    <input id="emailinput" name="email" type="email" required />
                </div>
                <div>
                    <label id="passinput">password</label>
                    <input id="passinput" name="password" type="password" required />
                </div>

                <button type="submit">Đăng nhập</button>
            </form>
            <NavLink to="/register">Chưa có tài khoản ?</NavLink>
        </>
    )
}

export default Login;
