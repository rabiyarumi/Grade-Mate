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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
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
          path: "/assignment/:id",
          element: <PrivateRoute>
             <AssignmentDetails/>
          </PrivateRoute>

        },
        {
          path: "/pendingAssignments",
          element: <PrivateRoute>
            <PendingAssignments/>

          </PrivateRoute>
        },
        {
          path: "/createAssignment",
          element: <PrivateRoute>
            <CreateAssignment/>
          </PrivateRoute>

        },
        {
          path: "/attemptedAssignments",
          element: <PrivateRoute>
            <MyAttemptedAssignments/>
          </PrivateRoute>

        },
        {
          path: "/updateAssignment/:id",
          element: <PrivateRoute>
            <UpdateAssignment/>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)

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