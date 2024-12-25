import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateAssignment = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(data?.deadline);
  console.log(data);
  const { _id, title, description, level, thumbnail, deadline, marks, author } =
    data || {};
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure()

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const description = form.description.value;
    const level = form.level.value;
    const thumbnail = form.thumbnail.value;
    const deadline = startDate;
    const marks = form.marks.value;

    const data = { title, description, level, thumbnail, deadline, marks };

    if (user?.email === author.authorEmail) {
      const result = axiosSecure.patch(
        `/assignment/${_id}`,
        data
      );
      console.log(result);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Assignment Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/assignments");
      
    }
    else{
         Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Don't have Permission to Update this assignment!",
                
               
              });
    }
   
  };
  return (
    <div className="w-[85%] mx-auto">
      <form onSubmit={handleSubmit} className="md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-x-8">
          {/* title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text  md:w-1/2">Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Assignment title"
              className="input input-bordered"
              required
            />
          </div>
          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text  md:w-1/2">Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="description"
              className="input input-bordered"
              required
            />
          </div>
          {/* Thumbnail */}
          <div className="form-control">
            <label className="label">
              <span className="label-text  md:w-1/2">Thumbnail</span>
            </label>
            <input
              type="text"
              name="thumbnail"
              defaultValue={thumbnail}
              placeholder="image/thumbnail"
              className="input input-bordered"
              required
            />
          </div>
          {/* Difficulty Level */}
          <div className="form-control">
            <label className="label " htmlFor="level">
              <span className="label-text  md:w-1/2">Level</span>
            </label>
            <select
              defaultValue={level}
              className="input input-bordered"
              name="level"
              id="type"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          {/* amount */}
          <div className="form-control">
            <label className="label">
              <span className="label-text  md:w-1/2">Marks</span>
            </label>
            <input
              type="number"
              name="marks"
              defaultValue={marks}
              placeholder="Marks"
              className="input input-bordered"
              required
            />
          </div>

          {/* Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text  md:w-1/2">Due Date</span>
            </label>
            <DatePicker
              defaultValue={startDate}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              name="date"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mt-4 md:col-span-2">
            <button className="btn btn-primary">Update Assignment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateAssignment;
