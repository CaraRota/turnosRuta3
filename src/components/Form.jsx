import React, { useRef, useState } from "react";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";

import Header from "./Header";

const Form = ({ choferes, setChoferes, saveToLocalStorage }) => {
    const driverNameRef = useRef();
    const [driverName, setDriverName] = useState("");
    const [driverSurname, setDriverSurname] = useState("");

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

    return (
        <>
            <Header />
            <form className='flex flex-row gap-5 max-w-45 mt-5 justify-center' onSubmit={onSubmit}>
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
        </>
    );
};

export default Form;
