import React from "react";
import DriverDetail from "./DriverDetail";

const DragOverlayContent = ({ chofer, index, handleDelete }) => {
    return (
        <div className='shadow-xl'>
            <div className='transform scale-105'>
                <DriverDetail chofer={chofer} index={index} handleDelete={handleDelete} />
            </div>
        </div>
    );
};

export default DragOverlayContent;
