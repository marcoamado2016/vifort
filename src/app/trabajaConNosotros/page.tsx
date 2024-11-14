'use client'
import { Box, Button, TextField, Typography } from "@mui/material";
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
            <Typography
                variant="h5"
                sx={{
                    color: 'primary.main',
                    textAlign: 'center'
                }}
            >
                Datos del empleado
            </Typography>
            <TextField
                required
                label={"Nombre"}
                value={formValue.nombre}
                name={"nombre"}
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit">
                Enviar
            </Button>

        </Box>
    )
}