import { format } from "date-fns";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const data = useLoaderData();
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  const { _id, title, description, level, thumbnail, deadline, marks, author } =
    data || {};


    const verifyUser = (id) => {
      if(user.email === author.authorEmail){
        return  Swal.fire({
                icon: "error",
                title: "Sorry",
                text: "You can't take your own Assignment!",
               
              });
      }
      else{
        navigate(`/assignmentSubmit/${id}`)
      }
    }
   
 

  return (
    <div className="hero bg-base-200 w-[85%] mx-auto md:my-20">
      <div className="hero-content flex-col gap-10 md:flex-row">
        <img
          src={thumbnail}
          className="max-w-sm rounded-lg shadow-2xl h-60 w-48"
        />
        <div className="space-y-3">
          <div className="flex items-center gap-20">
            <span className="text-xs font-light  ">
              Due Date: {format(new Date(deadline), "P")}
            </span>
            <span className="text-xs font-light  ">{level}</span>
          </div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="">{description}</p>
          <p>Marks: {marks}</p>
          <p>Author: {author.authorName}</p>
          <button onClick={() => verifyUser(_id)}
           
            className="btn btn-primary"
          >
            Take Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
