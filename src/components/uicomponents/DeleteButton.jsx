import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const DeleteButton = () => {
    return (
        <button className='text-red-200 py-2 px-2 bg-red-600 border-red-500 border-2 rounded-sm hover:border-red-800 active:border-red-700'>
            <DeleteOutlineIcon />
        </button>
    );
};

export default DeleteButton;
