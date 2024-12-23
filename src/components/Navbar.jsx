import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../providers/AuthContext";
import { Tooltip } from "react-tooltip";

const Navbar = () => {

  const {user, userLogout} = useContext(AuthContext)
  const navigate = useNavigate();

  // console.log(user?.photoURL)

  const logOut = () => {
    userLogout();
    navigate("/");
    // setIsOpen(false);
  };


  return (
    <div className="navbar bg-base-100">

<div className="navbar-start">
    <Link to={"/"} className=" text-xl font-bold">GradeMate</Link>
  </div>
  <div className="navbar-center gap-4">
    <Link to={"/assignments"} >Assignments</Link>
    <Link to={"/pendingAssignments"} >Pending Assignments</Link>
  </div>
  
  <div className="navbar-end">

  {user ? (
          <div className="flex">

<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="avatar"
            src={user.photoURL}
            data-tooltip-id="user-tooltip" />
        </div>
       
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to={"/createAssignment"} >Create Assignments</Link>
        </li>
        <li>
          <Link to={"/attemptedAssignments"} >My Attempted Assignments</Link>
        </li>
        <li onClick={logOut} ><a>Logout</a></li>
      </ul>
    </div>
           
            <Tooltip
              id="user-tooltip"
              place="bottom"
              clickable
              content={
                <div>
                  <p>{user.displayName}</p>
                </div>
              }
            />
          </div>
        ) : (
          <div>
            <Link to={"/login"} className="btn btn-primary btn-sm">
              Log in
            </Link>
           
          </div>
        )}

 
  
  </div>
</div>
  );
};

export default Navbar;
