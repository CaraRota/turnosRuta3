import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DriverDetail from "./DriverDetail";

const SortableDriverCard = ({ chofer, index, handleDelete, isDragging }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: index.toString(),
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || "transform 300ms ease, opacity opacity 200ms ease",
        opacity: isDragging ? 0.4 : 1,
        zIndex: isDragging ? 10 : 1,
        position: "relative",
        cursor: "grab",
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className='w-2/12 transition-all duration-300'>
            <div
                className={`transform ${
                    isDragging ? "scale-105" : "scale-100"
                } transition-transform duration-200`}>
                <DriverDetail chofer={chofer} index={index} handleDelete={handleDelete} />
            </div>
        </div>
    );
};

export default SortableDriverCard;
