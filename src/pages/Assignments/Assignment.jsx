/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import AuthContext from "../../providers/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const Assignment = ({ assignment, assignments, setAssignments }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, description, level, thumbnail, deadline, marks, author } =
    assignment || {};

   
  const handleDelete = (id) => {
    if (user?.email === author.authorEmail) {

      // swet alart
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //delete data from database

          const { data } = axios.delete(
            `http://localhost:5000/assignment/${id}`
          );

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          console.log(data);

          const remaining = assignments.filter((camp) => camp._id !== id);
          setAssignments(remaining);
        }
      });

      // sweet alart end
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This is not yours assignment!",
       
      });
    }
  };


  // //handle Update
  // const handleUpdate = (id) => {
  //   console.log(id)
  //   if (user?.email !== author.authorEmail){
  //     return Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "You can't Update this data !",
       
  //     });
  //   }
  //   if (user?.email === author.authorEmail){
  //     navigate(`/updateAssignment/${id}`)
  //   }
    
  // }

  return (
    <Link
      // to={`/assignment/${_id}`}
      className="w-full max-w-sm px-4 py-3 rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="flex gap-10">
        <div>
          <div className="flex items-center ">
            <img src={thumbnail} alt="" className="h-10 w-10 rounded-full" />
            <span className="px-3 py-1 text-sm font-bold text-blue-800 uppercase  ">
              {level}
            </span>
          </div>

          <div>
            <h1 className="mt-2 text-lg font-semibold  ">{title}</h1>

            <p className="mt-2 text-sm  ">{description.substring(0, 70)}...</p>
            <span className="text-xs font-light  ">
              Due Date: {format(new Date(deadline), "P")}
            </span>
            <p className="mt-2 text-sm font-bold ">Marks: {marks}</p>
            <p>{author.authorEmail}</p>
          </div>
        </div>

        {/* all action button */}
        <div className="flex flex-col justify-between py-4">
          <Link to={`/updateAssignment/${_id}`} data-tooltip-id="edit-tooltip">
            <MdEdit size={22} />
          </Link>
          <Link
            onClick={() => handleDelete(_id)}
            data-tooltip-id="delete-tooltip"
          >
            <MdDeleteForever size={22} />
          </Link>
          <Link to={`/assignment/${_id}`} data-tooltip-id="details-tooltip">
            <FaEye size={20} />
          </Link>
        </div>

        <Tooltip
          id="edit-tooltip"
          place="bottom"
          content={
            <div>
              <p>Update</p>
            </div>
          }
        />
        <Tooltip
          id="delete-tooltip"
          place="bottom"
          content={
            <div>
              <p>Delete</p>
            </div>
          }
        />
        <Tooltip
          id="details-tooltip"
          place="bottom"
          content={
            <div>
              <p>View Details</p>
            </div>
          }
        />
      </div>
    </Link>
  );
};

export default Assignment;
