import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo-f.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogeOut = () => {
        navigate('/')
        logOut()
            .then(() => { 
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        {
            user&& <li><Link to ='/add'>Add Toys</Link></li>
        }
        {
            user&& <li><Link to='/myToys'>My Toys</Link></li>
        }

    </>
    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div>
                        <img src={logo} alt="logo" className="w-24" />
                        <p className="font-extrabold">Toy Cars</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    { user&&
                        <FaUserCircle title={user&& user?.email} className="text-4xl me-4 "></FaUserCircle>    
                    }
                    {user ?
                        <Link onClick={handleLogeOut} className="btn btn-outline btn-primary">log Out</Link>
                        :
                        <Link to='/login' className="btn btn-outline btn-primary">Login</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;