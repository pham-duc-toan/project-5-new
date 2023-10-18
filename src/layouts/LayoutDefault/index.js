
import { Link, NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.scss"
const layoutDefault = ()=>{
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
                <NavLink to="/logout"><div className="menu--item">Log out</div></NavLink>
            </div>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>footer...</footer>
        </>
    )
}
export default layoutDefault;