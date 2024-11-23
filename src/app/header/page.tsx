import { AppBar, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Header() {

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "lightblue" }}>
                <Box>
                 <Button>
                    <ShoppingCartIcon/>
                 </Button>
                </Box>
            </AppBar>
        </>)
}