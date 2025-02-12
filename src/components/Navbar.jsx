/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../providers/AuthContext";
import { Tooltip } from "react-tooltip";
import { GiBookCover } from "react-icons/gi";
import { div } from "framer-motion/client";

const Navbar = ({ theme, setTheme }) => {
  const { user, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logOut = () => {
    userLogout();
    navigate("/");
    setIsOpen(false);
  };

  //toggle theme
  const handleToggle = (e) => {
    // e.preventDefault()

    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `bg-transparent font-semibold  ${isActive ? "text-accent" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/assignments"}
        className={({ isActive }) =>
          `bg-transparent font-semibold  ${isActive ? "text-accent" : ""}`
        }
      >
        Assignments
      </NavLink>
      <NavLink
        to={"/about-us"}
        className={({ isActive }) =>
          `bg-transparent font-semibold  ${isActive ? "text-accent" : ""}`
        }
      >
        About Us
      </NavLink>
      {/* <NavLink
        to={"/faq"}
        className={({ isActive }) =>
          `bg-transparent font-semibold  ${isActive ? "text-accent" : ""}`
        }
      >
        FAQ
      </NavLink>
 */}
      {user && (
        <>
          <NavLink
            to={"/pendingAssignments"}
            className={({ isActive }) =>
              `bg-transparent font-semibold  ${isActive ? "text-accent" : ""}`
            }
          >
            Pending Assignments
          </NavLink>

          <NavLink
            to={"/attemptedAssignments"}
            className={({ isActive }) =>
              `bg-transparent font-semibold  ${
                isActive ? "text-accent" : ""
              }`
            }
          >
            Attempted Assignments
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-200 bg-opacity-60 w-full">
      <div className="navbar md:w-[85%] mx-auto  z-20">
        <div className="navbar-start items-center gap-2 justify-start">
          <Link to={"/"}>
            <GiBookCover size={25} className="text-accent" />
          </Link>

          <Link
            to={"/"}
            className=" text-xl md:text-2xl text-accent  font-bold hidden md:block"
          >
            GradeMate
          </Link>
        </div>
        <div className="navbar-center gap-4 hidden md:flex">{links}</div>

        <div className="navbar-end">
          {user ? (
            <div className="flex">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="avatar"
                      src={user.photoURL}
                      data-tooltip-id="user-tooltip"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
                >
                  <li>
                    <NavLink
                      to={"/assignments"}
                      className={({ isActive }) =>
                        `bg-transparent font-semibold md:hidden ${
                          isActive ? "text-accent" : ""
                        }`
                      }
                    >
                      Assignments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/pendingAssignments"}
                      className={({ isActive }) =>
                        `bg-transparent font-semibold md:hidden ${
                          isActive ? "text-accent" : ""
                        }`
                      }
                    >
                      Pending Assignments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/createAssignment"}
                      className={({ isActive }) =>
                        `bg-transparent font-semibold  ${
                          isActive ? "text-accent" : ""
                        }`
                      }
                    >
                      Create Assignments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/attemptedAssignments"}
                      className={({ isActive }) =>
                        `bg-transparent font-semibold md:hidden ${
                          isActive ? "text-accent" : ""
                        }`
                      }
                    >
                      Attempted Assignments
                    </NavLink>
                  </li>
                  <li onClick={logOut} className="btn btn-sm btn-accent">
                    <a>Logout</a>
                  </li>
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
              <Link to={"/login"} className="btn btn-accent mr-4 btn-sm">
                Log in
              </Link>
            </div>
          )}

          {/* theme toggole */}
          <label className="swap swap-rotate ">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}
            <svg
              className="swap-on h-8 w-8 fill-current text-accent"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-8 w-8 fill-current text-accent"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
