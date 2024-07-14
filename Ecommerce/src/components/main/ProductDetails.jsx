import { Box, Button, Stack, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const ProductDetails = () => {
    return(
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2.5, flexDirection: {xs: "column", sm: "row"}}}>
            <Box display={"flex"}>
                <img width={300} src="./src/images/0008050_jacket.jpeg" />
            </Box>

            <Box sx={{textAlign: {xs: "center", sm: "left"}}}>
                <Typography variant="h5">WOMEN'S FASHION</Typography>
                <Typography variant="h5" my={0.4} fontSize={"23px"} color={"crimson"}>$12.98</Typography>
                <Typography variant="body1">
                Lizards are a widespread group of squamate reptiles, 
                with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                
                <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} gap={2} direction={"row"} my={2}>
                    {["./src/images/Mountain-Ghost-Whisperer-Jacket-Men-L-LARGE.jpg", "./src/images/0008050_jacket.jpeg"].map((item) => {
                        return(
                            <img width={90} height={100} key={item} src={item} style={{borderRadius: 3}} />
                        )
                    })}
                </Stack>

                <Button sx={{textTransform: "capitalize", mb: {xs: 1, sm: 0 }}} variant="contained">
                    <ShoppingCartCheckoutIcon sx={{mr :1}} />
                    Buy now 
                </Button>
            </Box>
        </Box>
    )
}

export default ProductDetails;