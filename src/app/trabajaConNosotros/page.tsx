'use client'
import { Box, Button, FormControlLabel, Grid, TextField, Typography, Checkbox } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Footer from "../footer/page";
export default function TrabajaConNosotros() {
    const [formValue, setFormValue] = useState({
        nombre: '',
        apellido: '',
        portacionArma: false,
        fuerzaArmada: false,
        cvFile: null

    })
    const route = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name, checked, type } = e.target;
        setFormValue({
            ...formValue,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const comeBack = () => {
        console.log("VOLVER")
        route.push("/")
    }

    return (<>
        <Box
            component={'form'}
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                width: { xs: '90%', sm: '80%', md: '60%', lg: '50%' },
                margin: 'auto',
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
                mt: 5,
                backgroundColor: 'background.paper',
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: 'primary.main',
                    textAlign: 'center',
                    mb: 2
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
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formValue.portacionArma}
                                onChange={handleChange}
                                name="portacionArma"
                                color="primary"
                            />
                        }
                        label={"Portación armas"}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={4}>
                    <Typography sx={{ mb: 1 }}>
                        Subir CV (PDF)
                    </Typography>
                    <input
                        type="file"
                        accept=".pdf"
                        name="cvFile"
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} display="flex" justifyContent={"flex-end"}>
                    <Button variant="contained" color="primary" type="submit" >
                        Enviar
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} display="flex" justifyContent={"flex-start"} onClick={comeBack}>
                    <Button variant="contained" color="primary" >
                        volver
                    </Button>
                </Grid>
            </Grid>
        </Box>
        <Footer />
    </>
    )
}