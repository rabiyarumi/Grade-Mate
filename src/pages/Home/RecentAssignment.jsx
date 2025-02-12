import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RecentAssignment = () => {

    const [assignments, setAssignments] = useState([])

    useEffect(() => {

        const fetchAssignments = async () => {
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/assignments`)
          setAssignments(data)
          }

        fetchAssignments()
      }, [])

      console.log(assignments)
    return (
        <div>
            {/* Recent Assignment {assignments.length} */}
        </div>
    );
};

export default RecentAssignment;