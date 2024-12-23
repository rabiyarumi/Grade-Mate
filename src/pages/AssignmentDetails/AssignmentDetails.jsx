import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AssignmentDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            details
        </div>
    );
};

export default AssignmentDetails;