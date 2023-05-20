import { Link } from "react-router-dom";
import logo from '../../assets/car-logo.png'

const Navbar = () => {
    const navItems = <>
        <li><Link>Home</Link></li> 
        <li><Link>Blog</Link></li> 
        <li><Link>All Toys</Link></li> 
        
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
                        <img src={logo} alt="logo" className="w-12" />
                        <p className="font-extrabold">Toy Cars</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-outline btn-primary">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;