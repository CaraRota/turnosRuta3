import React, { useState, useEffect } from "react";
import Form from "./Form";
import DriverDetail from "./DriverDetail";

import { toast } from "react-toastify";

const Homepage = () => {
    const [choferes, setChoferes] = useState([]);

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
            <div className='flex flex-wrap gap-5 justify-center mt-5'>
                {choferes.map((chofer, index) => (
                    <div key={index} className='w-2/12'>
                        <DriverDetail chofer={chofer} index={index} handleDelete={handleDelete} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Homepage;
