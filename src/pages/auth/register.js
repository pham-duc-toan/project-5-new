import randomString from "../../helpers/stringRandomToken";
import { createUser } from "../../services/usersServices";
import { useEffect,useState } from "react";
import { getListUser } from "../../services/usersServices";
import { NavLink } from "react-router-dom";

const Register = ()=>{
    const [users, setUsers] = useState([]); 
    const fetchApi = async () => {
      const data = await getListUser();
      setUsers(data);
    }
    useEffect(() => {
      fetchApi();  
    }, []);
    
    const token = randomString(30);
    const handleSubmit = (e) => {
        e.preventDefault();
        //tìm email đã tồn tại
        const existEmail = users.find(user => user.email === e.target.elements.email.value );
        if(!existEmail)  {
          var inforUser = {
            "email":e.target.elements.email.value,
            "password": e.target.elements.password.value,
            "fullName":e.target.elements.fullName.value,
            "token":token
          }
          //
          const createU = async () => {
            await createUser(inforUser);
          };
        //   console.log(inforUser);
          createU();
          window.location.href="/login";
          // console.log("cho phép email");
        }
        else {
          alert("email này đã tồn tại");
        }
        
      };
    return (
        <>
        <h1>Trang đăng ký</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nhập họ tên </label>
                <br/> 
                <input id="name" type="text" name="fullName" required/>
            </div>
            <div>
                <label htmlFor="email">Nhập email </label>
                <br/> 
                <input id="email" type="email" name="email" required/>
            </div>
            <div>
                <label htmlFor="pass">Nhập mật khẩu </label>
                <br/> 
                <input id="pass" type="text" name="password" required/>    
            </div>
            <button type="submit">Tạo tài khoản</button>
            <br/>
            
            <NavLink to="/">Trở lại trang chủ</NavLink>
        </form>
        
        </>
    )
}
export default Register;