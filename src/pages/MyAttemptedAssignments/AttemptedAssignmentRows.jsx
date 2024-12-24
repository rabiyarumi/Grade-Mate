/* eslint-disable react/prop-types */

const AttemptedAssignmentRows = ({assignment}) => {
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
      } = assignment|| {};
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox"  className="checkbox" />
          </label>
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
               className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
         
            {marks}
         
        </td>
        <td>{status == "pending" ? "" : givenMarks}</td>
        <th>
          <button className="">{status}</button>
        </th>
        <td>
           {feedback}
        </td>
      </tr>
    );
};

export default AttemptedAssignmentRows;