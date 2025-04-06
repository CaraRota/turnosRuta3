import React, { useState, useEffect } from "react";
import Form from "./Form";
import DriverDetail from "./DriverDetail";
import { toast } from "react-toastify";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Sortable Driver Card component with smooth animations
const SortableDriverCard = ({ chofer, index, handleDelete, isDragging }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: index.toString(),
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || "transform 300ms ease, opacity 200ms ease",
        opacity: isDragging ? 0.4 : 1,
        zIndex: isDragging ? 10 : 1,
        position: "relative",
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

// Component to render in the drag overlay
const DragOverlayContent = ({ chofer, index, handleDelete }) => {
    return (
        <div className='w-2/12 shadow-xl'>
            <div className='transform scale-105'>
                <DriverDetail chofer={chofer} index={index} handleDelete={handleDelete} />
            </div>
        </div>
    );
};

const Homepage = () => {
    const [choferes, setChoferes] = useState([]);
    const [activeId, setActiveId] = useState(null);

    // Set up sensors for drag detection with activation constraints for better UX
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // Minimum 8px of movement before drag starts
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        const fetchData = async () => {
            const choferes = JSON.parse(localStorage.getItem("choferes"));
            if (choferes) {
                setChoferes(choferes);
            }
        };
        fetchData();
    }, []);

    const handleDelete = (index) => {
        const newChoferes = choferes.filter((chofer, i) => i !== index);
        setChoferes(newChoferes);
        saveToLocalStorage(newChoferes);
        toast.error("Chofer eliminado correctamente");
    };

    const saveToLocalStorage = (data) => {
        localStorage.setItem("choferes", JSON.stringify(data));
    };

    // Handle the start of drag
    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    // Handle the end of a drag event
    const handleDragEnd = (event) => {
        const { active, over } = event;
        setActiveId(null);

        if (active.id !== over.id) {
            setChoferes((items) => {
                const oldIndex = parseInt(active.id);
                const newIndex = parseInt(over.id);

                const newChoferes = arrayMove(items, oldIndex, newIndex);
                // Add a small delay to save to localStorage for better UX
                setTimeout(() => {
                    saveToLocalStorage(newChoferes);
                    toast.success("Orden actualizado");
                }, 300);
                return newChoferes;
            });
        }
    };

    // Get the active chofer for the drag overlay
    const getActiveChofer = () => {
        if (activeId !== null) {
            const index = parseInt(activeId);
            return { chofer: choferes[index], index };
        }
        return null;
    };

    const activeChofer = getActiveChofer();

    return (
        <>
            <Form
                saveToLocalStorage={saveToLocalStorage}
                choferes={choferes}
                setChoferes={setChoferes}
            />
            <div className='flex justify-center mt-5'>
                <p className='text-5xl py-3 px-10 bg-blackRussian-700 text-blackRussian-50 rounded-full'>
                    ORDEN DE SALIDA
                </p>
            </div>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}>
                <div className='flex flex-wrap gap-5 justify-center mt-5'>
                    <SortableContext
                        items={choferes.map((_, i) => i.toString())}
                        strategy={rectSortingStrategy}>
                        {choferes.map((chofer, index) => (
                            <SortableDriverCard
                                key={index}
                                chofer={chofer}
                                index={index}
                                handleDelete={handleDelete}
                                isDragging={activeId === index.toString()}
                            />
                        ))}
                    </SortableContext>
                </div>

                {/* Drag Overlay for smooth animations */}
                <DragOverlay
                    adjustScale={true}
                    dropAnimation={{
                        duration: 300,
                        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
                    }}>
                    {activeChofer ? (
                        <DragOverlayContent
                            chofer={activeChofer.chofer}
                            index={activeChofer.index}
                            handleDelete={handleDelete}
                        />
                    ) : null}
                </DragOverlay>
            </DndContext>
        </>
    );
};

export default Homepage;
