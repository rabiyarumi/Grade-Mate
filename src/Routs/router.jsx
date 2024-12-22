import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Assignments from "../pages/Assignments/Assignments";
import Home from "../pages/Home/Home";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAttemptedAssignments from "../pages/MyAttemptedAssignments/MyAttemptedAssignments";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>

        },
        {
          path: "/assignments",
          element: <Assignments/>

        },
        {
          path: "/assignments/:id",
          element: <AssignmentDetails/>

        },
        {
          path: "/pendingAssignments",
          element: <PendingAssignments/>

        },
        {
          path: "/createAssignment",
          element: <CreateAssignment/>

        },
        {
          path: "/attemptedAssignments",
          element: <MyAttemptedAssignments/>

        },
        {
          path: "/login",
          element: <Login/>

        },
        {
          path: "/register",
          element: <Register/>

        },
      ]
    },
  ]);

export default router;