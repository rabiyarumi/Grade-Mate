import axios from "axios";
import { useEffect, useState } from "react";
import Assignment from "./Assignment";
import { div } from "framer-motion/client";

const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    const [filter, setFilter] = useState("")
    const [search, setSearch] = useState("")

    useEffect(() => {

        const fetchAllAssignments = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/assignments?filter=${filter}&search=${search}`)
            setAssignments(data)
          }

        fetchAllAssignments()
      }, [filter, search])

      //reset
      const handleReset = () => {
        setFilter('')
        setSearch('')
      }

      
    
     

    return (
      <>
       { assignments.length > 0 ?  <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
        <div>
          <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:justify-between '>
            <div>
              <select
                name='category'
                id='category'
                className='border border-accent p-3 rounded-lg'
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value=''>Filter By Category</option>
                <option value='Easy'>Easy</option>
                <option value='Medium'>Medium</option>
                <option value='Hard'>Hard</option>
              </select>
            </div>
  
        
              <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 border-accent '>
                <input
                  className='px-6   py-2  outline-none focus:placeholder-transparent'
                  type='text'
                  name='search'
                  onChange={e => setSearch(e.target.value)}
                  placeholder='Enter Job Title'
                  aria-label='Enter Job Title'
                />
  
               
              </div>
       
            
            <button onClick={handleReset} className='btn btn-accent'>Reset</button>
          </div>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                assignments?.map(assignment => <Assignment key={assignment._id} assignment={assignment} assignments={assignments} setAssignments={setAssignments}/>)
            }
          </div>
        </div>
      </div> : 
      <div className="flex justify-center items-center md:h-60">
        <span className="loading loading-spinner text-accent"></span>
      </div> }
      </>
    );
};

export default Assignments;