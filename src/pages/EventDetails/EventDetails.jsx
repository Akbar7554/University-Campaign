// import React from 'react';

import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const EventDetails = () => {
    
    const { id } = useParams();
    return (
      <div>
        <Navbar></Navbar>
        <div>{id}</div>
        <div>
        </div>
      </div>
    );
};

export default EventDetails;