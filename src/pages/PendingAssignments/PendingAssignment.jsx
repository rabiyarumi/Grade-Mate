/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import React from 'react';

const PendingAssignment = ({assignment, idx}) => {
    const  {
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
          <button className="">{status}</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">Give marks</button>
        </th>
      </tr>
    );
};

export default PendingAssignment;