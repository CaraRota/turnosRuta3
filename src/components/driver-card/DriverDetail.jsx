import React, { useState } from "react";
import { Check, UserX, X } from "lucide-react";

const DriverDetail = ({ chofer, index, handleDelete }) => {
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDeletion = () => {
        handleDelete(index);
        setConfirmDelete(false);
    };

    return (
        <div className='relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-blackRussian-100 to-blackRussian-200 border-l-4 border-l-blackRussian-600'>
            {/* Position indicator */}
            <div className='absolute top-0 left-0 bg-blackRussian-600 text-white px-4 py-1 rounded-br-lg font-bold'>
                {index + 1}
            </div>

            {/* Main content */}
            <div className='p-6 pt-8 flex justify-between items-center'>
                <div className='flex flex-col'>
                    <h2 className='text-2xl text-blackRussian-800'>{chofer.name.toUpperCase()}</h2>
                    <h3 className='text-3xl font-bold text-blackRussian-700 mt-1'>
                        {chofer.surname.toUpperCase()}
                    </h3>
                </div>

                {/* Delete button with animated effect */}
                {confirmDelete ? (
                    <div className='absolute top-2 right-2 flex items-center'>
                        <button
                            onClick={handleDeletion}
                            className='rounded-lg border border-green-200 bg-green-50 hover:bg-green-100 transition-colors duration-300 transform hover:scale-110'
                            aria-label='Confirmar eliminación'
                            title='Confirmar eliminación'>
                            <Check className='size-8 p-1 text-green-500 transition-colors duration-300' />
                        </button>
                        <button
                            onClick={() => setConfirmDelete(false)}
                            className='ml-2 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 transition-colors duration-300 transform hover:scale-110'
                            aria-label='Cancelar eliminación'
                            title='Cancelar eliminación'>
                            <X className='size-8 p-1 text-red-500 transition-colors duration-300' />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setConfirmDelete(true)}
                        className='absolute top-2 right-2 rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 transition-colors duration-300 transform hover:scale-110'
                        aria-label='Eliminar chofer'
                        title='Eliminar chofer'>
                        <UserX className='size-8 p-1 text-rose-500 transition-colors duration-300' />
                    </button>
                )}
            </div>

            {/* Decorative accent */}
            <div className='absolute bottom-0 right-0 w-24 h-1 bg-blackRussian-400 rounded-tl-lg'></div>
        </div>
    );
};

export default DriverDetail;
