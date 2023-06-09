import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
            }).catch((err) => {
                alert("User Logout error ", err.message)
            });
    }

    const navLinkItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="instructors">Instructors</Link></li>
        <li><Link to="classes">Classes</Link></li>
        {user && <>
            <li><Link to="dashboard">Dashboard</Link></li>
            <li><Link onClick={handleLogOut}>LogOut</Link></li>
        </>}
    </>

    return (
        <div className="navbar bg-black bg-opacity-20 text-white z-10 fixed top-0 max-w-screen-lg mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinkItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost p-0 normal-case text-xl"><img className="w-12 bg-white py-2 rounded-full" src="https://i.ibb.co/zVLzY4T/artcraft-high-resolution-logo-color-on-transparent-background.png" alt="" /> ArtCraft-School</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinkItems}
                </ul>
            </div>
            <div className="navbar-end md:w-fit md:pl-4">
                {user ?
                    <Link to={`my-profile`} ><img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" /></Link>
                    :
                    <Link to="/login" className="btn btn-accent text-white normal-case">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;