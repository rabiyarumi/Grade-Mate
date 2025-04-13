import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RecentAssignment = () => {
      const [assignments, setAssignments] = useState([])
      const [filter, setFilter] = useState("")
      const [search, setSearch] = useState("")
      console.log(assignments)
  
      useEffect(() => {
  
          const fetchAllAssignments = async () => {
              const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/assignments?filter=${filter}&search=${search}`)
              setAssignments(data)
            }
  
          fetchAllAssignments()
        }, [filter, search])

      console.log(assignments)
    return (
        <div>
            Recent Assignment {assignments.length}
        </div>
    );
};

export default RecentAssignment;