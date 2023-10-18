import deleteCookie from "../../helpers/deleteCookie"
const Logout =()=>{
    deleteCookie('token');
    window.location.href="/login";
}
export default Logout;