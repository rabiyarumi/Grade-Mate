/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Assignment = ({assignment}) => {

    const  {_id, title, description, level, thumbnail, deadline, marks, author} = assignment || {}

    return (
        (
            <Link
              to={`/assignment/${_id}`}
              className='w-full max-w-sm px-4 py-3 rounded-md shadow-md hover:scale-[1.05] transition-all'
            >
              <div className='flex items-center justify-between'>
                <span className='text-xs font-light  '>
                  Due Date: {format(new Date(deadline), 'P')}
                </span>
                <span className='px-3 py-1 text-[10px] text-blue-800 uppercase bg-blue-100 rounded-full '>
                  {level}
                </span>
              </div>
        
              <div>
                <h1 className='mt-2 text-lg font-semibold  '>{title}</h1>
        
                <p className='mt-2 text-sm  '>
                  {description.substring(0, 70)}...
                </p>
                <p className='mt-2 text-sm font-bold '>
                 Marks: {marks}
                </p>
              </div>
            </Link>
          )
    );
};

export default Assignment;