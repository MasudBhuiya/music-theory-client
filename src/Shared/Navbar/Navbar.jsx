
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error.message)
    })
  }

    const navOptions = <>
    <li><Link to="/">HOME</Link></li>
        <li><Link to="/allinstructors">INSTRUCTORS</Link></li>
    <li><Link to="/order/salad">CLASSES</Link></li>
    {user && <li><Link to="/order/salad">DASHBOARD</Link></li>}
    </>
    return (
        <>
        <div className="navbar max-w-screen-xl fixed text-white bg-opacity-20 bg-black z-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <div>
    <Link to="/" className="btn btn-ghost normal-case"><div>
    <img className="w-24 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_-3LRclbRQuvVhzNiJSn-u5G2_Y0xehzUUiM3yBM&s" alt="logo" />
    <h1>MUSIC THEORY</h1>
      </div></Link>
    
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end ga">
  {user ? <><li onClick={handleLogOut} className="btn bg-lime-600 border-0 text-white hover:bg-lime-800 mr-2
  "><Link>LOG OUT</Link></li></>: <li className="btn bg-lime-600 hover:bg-lime-800 border-0 text-white mr-2
  "><Link to="/login">LOGIN</Link></li>}
    {user ? <img className="w-12 h-12 rounded-full" src={user?.photoURL
} alt="" />: <img className="w-12 h-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsSYuMnSziZqiTm7N3_cuyCNbBwkLCxtgN7V6rlV4VaMUje7vpgmUDRJxQiZM7TWI7xM&usqp=CAU" alt="" />}
  </div>
</div>
        </>
    );
};

export default Navbar;