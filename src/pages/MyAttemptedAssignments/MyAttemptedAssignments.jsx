import { useContext, useEffect, useState } from "react";
import AuthContext from "../../providers/AuthContext";
import AttemptedAssignmentRows from "./AttemptedAssignmentRows";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyAttemptedAssignments = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAllAssignments = async () => {
      const { data } = await axiosSecure.get(`/submittedAssignment/${user?.email}`);
      setAssignments(data);
    };

    fetchAllAssignments();
  }, [user?.email, axiosSecure]);
  return (
    <div className="overflow-x-scroll md:w-[85%] mx-auto md:my-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">My Submitted <span className='text-accent'>Assignment</span></h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Marks</th>
            <th>Obtained Marks</th>
            <th>Status</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {assignments.map((assignment) => (
            <AttemptedAssignmentRows
              key={assignment._id}
              assignment={assignment}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAttemptedAssignments;
