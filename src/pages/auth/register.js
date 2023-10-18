import randomString from "../../helpers/stringRandomToken";
import { createUser } from "../../services/usersServices";
const Register = ()=>{

    const token = randomString(30);
    const handleSubmit = (e) => {
        e.preventDefault();
        //chưa sửa
        
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
        </form>
        
        </>
    )
}
export default Register;