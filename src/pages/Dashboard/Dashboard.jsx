import React, { useContext, useEffect, useState } from 'react';
import { FaBook, FaHome,  FaShoppingCart,  FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useClass from '../../hooks/useClass';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Shared/useTitle';


const Dashboard = () => {
    const [classe] = useClass();
    const [roles, setRoles] = useState([])
    const [role, setRole] = useState({})
    // console.log(role);
    const {user} = useContext(AuthContext);
    useTitle('Dashboard')
    useEffect(()=>{
      fetch(`https://assignment-twelve-server-gilt.vercel.app/roleusers?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setRoles(data)
      })
    },[])

    useEffect(()=>{
      roles.map(role => setRole(role))
    },[roles])


    return (
        <div>
        <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu bg-sky-500 p-4 w-80 h-full  ">

      
      {
          role.role === 'admin' && <>
        {/* Sidebar content here */}
      {/* <li><NavLink to="/dashboard/reservations"> Manage Users</NavLink></li> */}
      <li><NavLink to="/dashboard/history"> Manage Classes</NavLink></li>
      <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>Manage Users</NavLink></li>
        </>
      }
      {
          role.role === 'instructor' && <>
        {/* Sidebar content here */}
      <li><NavLink to="/dashboard/addclass"><FaHome></FaHome> Add a class</NavLink></li>
      <li><NavLink to="/dashboard/myaddedclass">My Classes</NavLink></li>
        </>
      }
      {
         !role.role  && <>
        {/* Sidebar content here */}
      <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
      <li><NavLink to="/dashboard/myclasses"><FaShoppingCart></FaShoppingCart> My Selected Class<span className="badge badge-secondary">+{classe?.length || 0}</span></NavLink></li>
      <li><NavLink to="/dashboard/enrolled"> Enrolled Class</NavLink></li>
        </>
      }


      <div className="divider"></div>
      <li ><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
      <li><NavLink to="/allinstructors">All Instructors</NavLink></li>
      <li><NavLink to="/allclasses">All Classes</NavLink></li>
    </ul>
  
  </div>
</div>
      </div>
    );
};

export default Dashboard;