import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
export default function Footer() {


    return (<>
        <Box
            component={"footer"}
            sx={{
                mt: 19,
                py: 3,
                px: 2,
                color: 'white',
                backgroundColor: 'lightblue', // Color celeste para el footer
                width: '100%', // Reducir el ancho del footer
                mx: 'auto', // Centrar horizontalmente
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}> {/* Bajar los iconos */}
                <Button href="https://www.instagram.com/vifort_seguridad/" target="_blank" rel="noopener">
                    <InstagramIcon />
                </Button>
                <Button href="https://www.facebook.com/vifortseguridad" target="_blank" rel="noopener">
                    <FacebookIcon />
                </Button>
            </Box>
        </Box>
    </>)
}