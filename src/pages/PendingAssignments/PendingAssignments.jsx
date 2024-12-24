import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../providers/AuthContext';
import axios from 'axios';
import PendingAssignment from './PendingAssignment';

const PendingAssignments = () => {
    const { user } = useContext(AuthContext);
    const [assignments, setAssignments] = useState([]);
  
    useEffect(() => {
      const fetchAllAssignments = async () => {
        const { data } = await axios.get(
          "http://localhost:5000/pendingAssignments"
        );
        setAssignments(data);
      };
  
      fetchAllAssignments();
    }, []);

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
              <th>Assignee</th>
              <th>Status</th>
              <th>Give Mark</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
              {assignments.map((assignment, idx) => <PendingAssignment key={assignment._id} assignment={assignment} idx={idx} />)}
           
           
          </tbody>
          
        </table>
      </div>
    );
};

export default PendingAssignments;