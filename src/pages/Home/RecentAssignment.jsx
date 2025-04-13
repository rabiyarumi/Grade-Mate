import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Assignment from '../Assignments/Assignment';
import { section } from 'framer-motion/client';

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
        <section className="bg-base-100 py-16 md:w-[85%] mx-auto">
          <div className='container mx-auto '>
                    <h2 className="text-3xl font-bold mb-8 text-center">Checkout Latest <span className="text-accent">Assignments</span> </h2>

            Recent Assignment {assignments.length}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {assignments.slice().reverse().slice(0,6).map(assignment => <Assignment key={assignment?._id} assignment={assignment}/>)}
            </div>
        </div>
        </section>
    );
};

export default RecentAssignment;