import React, { useState, useEffect, useRef } from "react";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { toast } from "react-toastify";

const Homepage = () => {
    const driverNameRef = useRef();
    const [driverName, setDriverName] = useState("");
    const [driverSurname, setDriverSurname] = useState("");
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

    const saveToLocalStorage = (data) => {
        localStorage.setItem("choferes", JSON.stringify(data));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (driverName === "" || driverSurname === "") {
            toast.error("Por favor, complete todos los campos");
            return;
        }

        // Check if the driver is already in the list
        const isAlreadyInList = choferes.some(
            (chofer) =>
                chofer.name.toLowerCase() === driverName.toLowerCase() &&
                chofer.surname.toLowerCase() === driverSurname.toLowerCase()
        );

        if (isAlreadyInList) {
            toast.error("El chofer ya se encuentra en la lista");
            return;
        }

        const newChoferes = [...choferes, { name: driverName, surname: driverSurname }];
        setChoferes(newChoferes);
        saveToLocalStorage(newChoferes);
        setDriverName("");
        setDriverSurname("");
        toast.success("Chofer agregado correctamente");
        driverNameRef.current.focus();
    };

    const handleName = (e) => {
        setDriverName(e.target.value);
    };

    const handleSurname = (e) => {
        setDriverSurname(e.target.value);
    };

    const handleDelete = (index) => {
        const newChoferes = choferes.filter((chofer, i) => i !== index);
        setChoferes(newChoferes);
        saveToLocalStorage(newChoferes);
        toast.error("Chofer eliminado correctamente");
    };

    return (
        <>
            <div className='absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'></div>
            <div className='flex flex-col gap-5 justify-center mt-5'>
                <form
                    className='flex flex-row gap-5 max-w-45 mt-5 justify-center'
                    onSubmit={onSubmit}>
                    <TextField
                        autoFocus={true}
                        onChange={handleName}
                        value={driverName}
                        inputRef={driverNameRef}
                        id='standard-basic'
                        label='Nombre Chofer'
                        variant='outlined'
                    />
                    <TextField
                        onChange={handleSurname}
                        value={driverSurname}
                        id='standard-basic'
                        label='Apellido Chofer'
                        variant='outlined'
                    />
                    <Button variant='outlined' type='submit'>
                        <span className='flex gap-2'>
                            Agregar
                            <SendIcon />
                        </span>
                    </Button>
                </form>
                <div className='flex flex-col gap-5 justify-center mt-5 w-3/12'>
                    {choferes.length < 1 ? (
                        <div className='flex justify-center'>No hay choferes cargados</div>
                    ) : (
                        choferes.map((chofer, index) => (
                            <div key={index}>
                                <div className='flex flex-row gap-5 mt-5 py-5 pl-2 justify-start items-center text-5xl text-blackRussian-950 bg-blackRussian-200 rounded-xl border-l-4 border-l-blue-600'>
                                    <span>{index + 1}.</span>
                                    <span>
                                        {chofer.name.toUpperCase()} {chofer.surname.toUpperCase()}
                                    </span>
                                    <button onClick={() => handleDelete(index)}>
                                        <DeleteOutlineIcon />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Homepage;
