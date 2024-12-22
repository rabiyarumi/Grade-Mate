import { Link } from "react-router-dom";

const Navbar = () => {
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
    <Link to={"/login"} >Login</Link>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
        <li><a>Logout</a></li>
      </ul>
    </div>
  
  </div>
</div>
  );
};

export default Navbar;
