// import React from 'react';

import { NavLink, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const EventDetails = () => {
    
    const { id } = useParams();
    return (
      <div>
        <Navbar></Navbar>
        <NavLink>{id}</NavLink>
        <div>
        </div>
      </div>
    );
};

export default EventDetails;