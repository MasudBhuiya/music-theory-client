import React from 'react';
import { FaBook, FaHome,  FaShoppingCart,  FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useClass from '../../hooks/useClass';


const Dashboard = () => {
    const [classe] = useClass()
    // console.log(classes)

    // TODO: load data from the server
    const isAdmin = true;

    return (
        <div>
        <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu bg-sky-500 p-4 w-80 h-full  ">

      {
        isAdmin ? <>
        {/* Sidebar content here */}
      <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
      <li><NavLink to="/dashboard/reservations"> Add Classes</NavLink></li>
      <li><NavLink to="/dashboard/history"> Manage Classes</NavLink></li>
      <li><NavLink to="/dashboard/history"> Manage Classes</NavLink></li>
      
      <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>
      
        </>: <>
        {/* Sidebar content here */}
      {/* <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
      <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li> */}
      <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
      <li><NavLink to="/dashboard/myclasses"><FaShoppingCart></FaShoppingCart> My Class<span className="badge badge-secondary">+{classe?.length || 0}</span></NavLink></li>
      <li><NavLink to="/dashboard/history"> Enrolled Class</NavLink></li>
        </>
      }


      


      <div className="divider"></div>
      <li ><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
      <li><NavLink to="/menu"> Our Menu</NavLink></li>
      <li ><NavLink to="/order/salad">Order Food</NavLink></li>
      <li><Link>Contact</Link></li>
    </ul>
  
  </div>
</div>
      </div>
    );
};

export default Dashboard;