import  { useContext, useState } from 'react';
import AuthContext from '../../providers/AuthContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CreateAssignment = () => {

    const {user} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()

    const handleSubmit = async e => {
        e.preventDefault()

        const form = e.target;
        
        const title = form.title.value;
        const description = form.description.value;
        const level = form.level.value;
        const thumbnail = form.thumbnail.value;
        const deadline = startDate;
        const marks = form.marks.value;
        const userName = user?.displayName;
        const userEmail = user?.email;

        // console.table({title, description, thumbnail, deadline, level, marks, userName, userEmail})
        const data = {title, description, level, thumbnail, deadline, marks, author:{
            authorName: userName,
            authorEmail: userEmail
        }}


        try{
            //post request in DB
            await axiosSecure.post(`/assignments`, data)
            //reset form
            form.reset();
            //show Toast
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Assignment Added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            //navigate
            navigate("/assignments")
        }
        catch(err){
          Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    return (
        <div className='w-[85%] mx-auto md:my-10'>
          <h1 className="text-center text-2xl md:text-4xl font-bold">Create <span className='text-accent'>Assignment</span></h1>
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
            placeholder="image/thumbnail"
            className="input input-bordered"
            required
          />
        </div>
        {/* Difficulty Level */}
        <div className="form-control">
          <label className="label " htmlFor='level'>
            <span className="label-text  md:w-1/2">Level</span>
          </label>
          <select className="input input-bordered" name="level" id="type">
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
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="date" className="input input-bordered w-full"/>
          
        </div>
       
       
        <div className="form-control mt-4 md:col-span-2">
          <button className="btn btn-accent">Add Assignment</button>
        </div>
        </div>
      </form>
        </div>
    );
};

export default CreateAssignment;