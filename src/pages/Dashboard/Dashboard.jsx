import React from 'react';
import { Helmet } from 'react-helmet';
import { FaBook, FaHome,  FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    // const {classes} = useCart()
    // console.log(classes)
    const isAdmin = true;
    return (
        <div>
          <Helmet>
                <title>Music Theory | Dashboard</title>
            </Helmet>
        <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu bg-lime-500 p-4 w-80 h-full  ">

      {
        !isAdmin ? <>
        {/* Sidebar content here */}
      <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
      <li><NavLink to="/dashboard/reservations"><FaUtensils></FaUtensils> Add Items</NavLink></li>
      <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Items</NavLink></li>
      <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
      
      <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>
      
        </>: <>
        {/* Sidebar content here */}
      {/* <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
      <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li> */}
      
      <li><NavLink to="/dashboard/myclasses"> My Selected Class</NavLink></li>
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