import { Box, Button, Card, CardActions, 
    CardContent, CardMedia, Container, Dialog, 
    IconButton, Rating, Stack, Typography } from "@mui/material"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../redux/Product";

const Main = () => {
    // const [alignment, setAlignment] = useState('left');
    const handleAlignment = (event, newValue) => {
        // setAlignment(newValue);
        setMyData(newValue)
    };

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


const allProductsApi = "products?populate=*"
const menCategoryApi = "products?populate=*&filters[productCategory][$eq]=men"
const womenCategoryApi = "products?populate=*&filters[productCategory][$eq]=women"



const [myData, setMyData] = useState(allProductsApi)
    // connect with back end 
    const { data, error, isLoading } = useGetproductByNameQuery(myData)

    if(data) {
        return(
            <Container sx={{py: 9}}>
                <Stack direction={"row"} alignItems={"center"} 
                justifyContent={"space-between"} flexWrap={"wrap"} gap={2}>
                    <Box>
                        <Typography variant="h6">Selected Products </Typography>
                        <Typography fontWeight={300} variant="body1">
                            All our new arrivals in a exclusive brand selection.
                        </Typography>
                    </Box>
    
                    <ToggleButtonGroup
                        color="error"   
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        >
                        <ToggleButton value={allProductsApi} aria-label="left aligned">
                            all products 
                        </ToggleButton>
                        <ToggleButton value={menCategoryApi} aria-label="centered">
                            men category
                        </ToggleButton>
                        <ToggleButton value={womenCategoryApi} aria-label="right aligned">
                            women category
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
    
                <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                    {data.data.map((item) => {
                        return(
                            <Card key={item} 
                            sx={{ maxWidth: 335, mt: 6, ":hover .MuiCardMedia-root": {scale: "1.1", transition: "0.3s", rotate: "1deg"} }} >
                                <CardMedia
                                    sx={{ height: 280 }}
                                    // @ts-ignore
                                    image={`${import.meta.env.VITE_BASE_URL}${item.attributes.productImage.data[0].attributes.url}`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"ceneter"}>
                                            <Typography variant="h5" gutterBottom component="div">
                                                {item.attributes.productTitle}
                                            </Typography>
                                            <Typography variant="subtitle1" component="p">
                                                {item.attributes.productPrice}
                                            </Typography>
                                        </Stack>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.attributes.productDescription}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{justifyContent: "space-between"}}>
                                    <Button size="large" sx={{textTransform: "capitalize"}}
                                        onClick={handleClickOpen}
                                    >
                                        <AddShoppingCartIcon fontSize="small" sx={{mr: 1.3}} />
                                        Add to cart
                                    </Button>
                                    <Rating precision={0.5} name="read-only" value={item.attributes.productRating} readOnly />
                                </CardActions>
                            </Card>
                        )
                    })}
                </Stack>
    
    
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx={{
                        ".MuiPaper-root": {minWidth: {xs: "100%", md: 800}}
                    }}
                >
                    <IconButton sx={{ ":hover": {rotate: "360deg", transition: "0.3s", color: "red"}, position: "absolute", top: 0, right: 10}} 
                        onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <ProductDetails />
                </Dialog>
    
            </Container>
        )
    }

    if(isLoading) {
        <Typography variant="body1">
            Loading.......
        </Typography>
    }

    if(error) {
        <Typography variant="body1">
            {error.
// @ts-ignore
            message} 
            Something ERROR :(
        </Typography>
    }
}

export default Main;