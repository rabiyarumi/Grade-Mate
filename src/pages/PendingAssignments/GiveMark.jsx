import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const GiveMark = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    docs,
    notes,
    title,
    level,
    thumbnail,
    marks,
    deadline,

    assignee,
    assigneeName,
  } = data || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const givenMarks = form.givenMark.value;
    const feedback = form.feedback.value;

    const newData = { status: "completed", givenMarks, feedback };

    if (givenMarks > marks)
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Max Mark is: ${marks} `,
        showConfirmButton: false,
        timer: 1500,
      });

    try {
      const result = await axiosSecure.patch(
        `/pendingAssignment/${_id}/`,
        newData
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Mark Given Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/pendingAssignments");
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-10  mx-auto md:my-20 md:w-[85%] p-8 shadow-md rounded-xl">
      <div className="w-1/3 flex flex-col justify-center gap-2 font-bold">
        <p>
          Title: <span className="opacity-75 text-accent">{title}</span>
        </p>
        <a href={docs} target="_blank">
          Docs:
        <span className="opacity-75 text-accent"> Google Docs</span>
         
        </a>
        <p>Marks:  <span className="opacity-75 text-accent">{marks}</span></p>
        <p>Assignee:  <span className="opacity-75 text-accent">{assigneeName}</span></p>
        <h4>Notes: <span className="opacity-75"> {notes}</span></h4>
      </div>

      <div className="mx-w-lg   flex-grow px-10">
        <form onSubmit={handleSubmit} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mark</span>
            </label>
            <input
              type="number"
              name="givenMark"
              placeholder="Mark"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <textarea
              name="feedback"
              className="textarea textarea-bordered"
              rows={3}
              placeholder="Feedback"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveMark;
