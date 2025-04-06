import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const DriverDetail = ({ chofer, index, handleDelete }) => {
    return (
        <>
            <div className='text-blackRussian-950 bg-blackRussian-200 rounded-xl border-l-4 border-l-blackRussian-600 p-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='text-5xl'>{index + 1}.</span>
                    <div className='flex flex-col ml-4 text-3xl'>
                        <p>{chofer.name.toUpperCase()}</p>
                        <p>{chofer.surname.toUpperCase()}</p>
                    </div>
                </div>
                <div className='flex justify-center text-red-900 hover:text-red-800'>
                    <button onClick={() => handleDelete(index)}>
                        <DeleteOutlineIcon />
                    </button>
                </div>
            </div>
        </>
    );
};
export default DriverDetail;
