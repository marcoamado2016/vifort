'use client'
import { Box, Button, FormControlLabel, Grid, TextField, Typography, Checkbox } from "@mui/material";
import { useState } from "react";
export default function TrabajaConNosotros() {
    const [formValue, setFormValue] = useState({
        nombre: '',
        apellido: '',
        portacionArma: false,
        fuerzaArmada: false

    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("formData ", formValue)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name, checked, type } = e.target;
        setFormValue({
            ...formValue,
            [name]: type === 'checkbox' ? checked : value
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
                width: '400px',
                margin: 'auto',
                padding: '16px',
                boxShadow: 3,
                marginTop: '100px'
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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label={"Nombre"}
                        value={formValue.nombre}
                        name={"nombre"}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label={"Apellido"}
                        value={formValue.apellido}
                        name={"apellido"}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formValue.portacionArma}
                                onChange={handleChange}
                                name="portacionArma"
                                color="primary"
                            />
                        }
                        label={"Portación de armas"}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formValue.fuerzaArmada}
                                onChange={handleChange}
                                name="fuerzaArmada"
                                color="primary"
                            />
                        }
                        label={"Fuerza armada"}
                    />
                </Grid>
            </Grid>

            <Button variant="contained" color="primary" type="submit">
                Enviar
            </Button>
        </Box>
    )
}