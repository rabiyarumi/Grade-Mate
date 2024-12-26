import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AssignmentSubmit = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure()


  const { _id, title, description, level, thumbnail, deadline, marks } =
    data || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const docs = form.docs.value;
    const notes = form.notes.value;

    const newData = {
      docs,
      notes,
      title,
      level,
      thumbnail,
      marks,
      deadline,
      description,
      assignmentId: _id,
      status: "pending",
      feedback:"",
      givenMarks: 0,
      assignee: user.email,
      assigneeName:user.displayName

    };


    try{
        //post request in DB
        await axiosSecure.post(`/submittedAssignments`, newData)
        //reset form
        form.reset();
        //show Toast
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Assignment Submitted Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        //navigate
        navigate("/attemptedAssignments")
    }
    catch(err){
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${err.response.data
            }`,
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/assignments")
    }
  };


  return (
    <div className="max-w-lg mx-auto my-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold">Submit <span className='text-accent'>Assignment</span></h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Google Docs</span>
          </label>
          <input
            type="url"
            name="docs"
            placeholder="Google Docs url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quick Notes</span>
          </label>
          <textarea
            name="notes"
            className="textarea textarea-bordered"
            rows={5}
            placeholder="Quick Notes"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentSubmit;
