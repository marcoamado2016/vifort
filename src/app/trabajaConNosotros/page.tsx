'use client'
import { Box, TextField } from "@mui/material";
import { useState } from "react";

export default function TrabajaConNosotros() {
    const [formValue, setFormValue] = useState({
        nombre: '',
        apellido: '',
        portacionArma: false,
        activo: false

    })
    const handleSubmit = (formData: React.FormEvent<HTMLFormElement>) => {
        console.log("formData ", formData)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        console.log(e.target)
        console.log("value ", value, " name ", name)
        setFormValue({
            ...formValue,
            [name]: value
        })
    }
    return (
        <Box
            component={'form'}
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '300px',
                margin: 'auto',
                padding: '16px',
                boxShadow: 3,
            }}
        >
            <TextField
                required
                label={"Nombre"}
                value={formValue.nombre}
                onChange={handleChange}
            />


        </Box>
    )
}