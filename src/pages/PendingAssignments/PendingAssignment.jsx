/* eslint-disable react/prop-types */
import { compareAsc, format } from 'date-fns';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../providers/AuthContext';
import Swal from 'sweetalert2';

const PendingAssignment = ({assignment, idx}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()


    const  {
        _id,
        docs,
        notes,
        title,
        level,
        thumbnail,
        marks,
        deadline,
        status,
        feedback,
        givenMarks,
        assignee, assigneeName
      } = assignment|| {};

      const verifyUser = (id) => {
            if(user.email === assignee){
              return  Swal.fire({
                      icon: "error",
                      title: "Sorry",
                      text: "You can't Mark your own Assignment!",
                     
                    });
            }
            else if(compareAsc(new Date(), new Date(deadline)) === 1){
                return Swal.fire({
                    icon: "error",
                    title: "Sorry",
                    text: "Deadline is Crossed for Assignment!",
                   
                  });
            }
                
            else{
              navigate(`/giveMark/${id}`)
            }
          }
         

    return (
        <tr>
        <th>
          {idx + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={thumbnail}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div
               className="text-sm opacity-50">{format(new Date(deadline), "P")}</div>
            </div>
          </div>
        </td>
        <td>
         
            {marks}
         
        </td>
        <td>{ assigneeName}</td>
        <th>
          <button className="text-accent">{status}</button>
        </th>
        <th>
          <button onClick={() => verifyUser(_id)} className="btn btn-ghost hover:bg-accent btn-xs">Give marks</button>
        </th>
      </tr>
    );
};

export default PendingAssignment;