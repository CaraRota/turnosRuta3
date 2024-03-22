import React from "react";
import SendIcon from "@mui/icons-material/Send";

const AddButton = () => {
    return (
        <button className='text-blackRussian-200 py-2 px-2 bg-blackRussian-600 border-blackRussian-500 border-2 rounded-sm hover:border-blackRussian-800 active:border-blackRussian-700'>
            <SendIcon /> Agregar
        </button>
    );
};

export default AddButton;
