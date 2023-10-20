import { useSelector } from "react-redux";

import { Link, NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.scss"
const LayoutDefault = ()=>{
    const inforUser = useSelector(state => state.inforUser);
    // console.log(inforUser);
    return (
        <>
        <header>
            <Link to="/" >
                <div className="logo">
                    Logo
                </div>
            </Link>
            <div className="menu">
                <NavLink to="/"><div className="menu--item">Home</div></NavLink>
                <NavLink to="/topic"><div className="menu--item">Topic</div></NavLink>
                <NavLink to="/answers"><div className="menu--item">Answers History</div></NavLink>
                {(inforUser && inforUser.length!=0)?<NavLink to="/logout"><div className="menu--item">Log out</div></NavLink> :<NavLink to="/login"><div className="menu--item">Log in</div></NavLink>}
                
                
            </div>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>footer...</footer>
        </>
    )
}
export default LayoutDefault;