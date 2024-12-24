import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../providers/AuthContext";
import AttemptedAssignmentRows from "./AttemptedAssignmentRows";

const MyAttemptedAssignments = () => {
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAllAssignments = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/submittedAssignment/${user?.email}`
      );
      setAssignments(data);
    };

    fetchAllAssignments();
  }, [user?.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              
            </th>
            <th>Title</th>
            <th>Marks</th>
            <th>Obtained Marks</th>
            <th>Status</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
            {assignments.map(assignment => <AttemptedAssignmentRows key={assignment._id} assignment={assignment} />)}
         
         
        </tbody>
        
      </table>
    </div>
  );
};

export default MyAttemptedAssignments;
