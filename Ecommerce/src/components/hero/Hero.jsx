import { Container, Box, Link, Stack, Typography, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./hero.css"
import IconSection from "./IconSection";

// constants
const mySlider = [
    {text: "MEN", link: "./src/images/banner-15.jpg"},
    {text: "WOMEN", link: "./src/images/banner-25.jpg"},
]


const Hero = () => {
    const theme = useTheme();
    return(
        <Container>
                <Box sx={{mt: 2.5, display: "flex" , gap: 2, pt: 2}}>

                    <Swiper
                        pagination={{
                        dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        loop={true}
                    >

                        {mySlider.map((item) => {
                            return(
                                <SwiperSlide key={item.text} className="parent-slider">
                                    <img src={item.link}  />
                                    <Box 
                                        sx={{
                                            [theme.breakpoints.up('sm')]: {
                                                position: "absolute", left: "10%", textAlign: "left"
                                            },
                                            [theme.breakpoints.down('md')]: {
                                                pt: 4, pb: 6
                                            },
                                        }}
                                    >
                                        <Typography sx={{color: "gray", fontSize: "18px"}} variant="caption">
                                            LIFFSTYLE COLLECTION 
                                        </Typography>
                                        <Typography sx={{color: "#2B3445", fontSize: "30px", fontWeight: 700}} variant="h6">
                                            {item.text}
                                        </Typography>
                                        <Stack direction={"row"} alignItems={"center"}>
                                            <Typography variant="h4" sx={{color: "#2B3445"}} mr={1}>
                                                SALE UP TO 
                                            </Typography>
                                            <Typography variant="h6" sx={{color: "#D23F57"}}>
                                                30% OFF
                                            </Typography>
                                        </Stack>
                                        <Typography variant="h6" sx={{color: "#2B3445"}}>
                                            Get free shopping on orders over $99.00
                                        </Typography>
                                        <Button sx={{
                                            px: 5, py: 1, mt: 2,
                                            backgroundColor: "#222",
                                            boxShadow: "0px 4px 14px rgba(43, 52, 69, 0.1)",
                                            color: "#fff",
                                            ":hover" : {backgroundColor: "#333"}
                                        }}>
                                            SHOP NOW 
                                        </Button>
                                    </Box>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <Box sx={{display: {xs: "none", md: "block", minWidth: "26.5%"}}}>
                        <Box sx={{position: "relative"}}>
                            <img width={"100%"}  src="./src/images/banner-17.jpg" />
                            <Stack sx={{position: "absolute", top: "50%", transform: "translateY(-50%)", left: 33}}>
                                <Typography sx={{color: "gray", fontSize: "18px"}} variant="caption">
                                    NEW ARRIVALS
                                </Typography>
                                <Typography sx={{color: "#2B3445", fontSize: "16px"}} variant="h6">
                                    SUMMER
                                </Typography>
                                <Typography variant="h6" sx={{color: "#2B3445"}}>
                                    SALE 20% OFF 
                                </Typography>
                                <Link sx={{color: "#2B3445", display: "flex", alignItems: "center", gap: "5px", transition: ".3s", cursor: "pointer",
                                    ":hover": {color: "#2D2FF57"}
                                }} underline="none">
                                    Shop now 
                                    <ArrowForwardIcon sx={{fontSize: "14px"}} />
                                </Link>
                            </Stack>
                        </Box>

                        <Box sx={{position: "relative"}}>
                            <img width={"100%"}  src="./src/images/banner-16.jpg" />
                            <Stack sx={{position: "absolute", top: "50%", transform: "translateY(-50%)", left: 33}}>
                                <Typography sx={{color: "gray", fontSize: "18px"}} variant="caption">
                                    GAMMING 4K
                                </Typography>
                                <Typography sx={{color: "#2B3445", fontSize: "16px"}} variant="h6">
                                    DESKTOPS & 
                                </Typography>
                                <Typography variant="h6" sx={{color: "#2B3445"}}>
                                    LAPTOPS
                                </Typography>
                                <Link sx={{color: "#2B3445", display: "flex", alignItems: "center", gap: "5px", transition: ".3s", cursor: "pointer",
                                    ":hover": {color: "#2D2FF57"}
                                }} underline="none">
                                    Shop now 
                                    <ArrowForwardIcon sx={{fontSize: "14px"}} />
                                </Link>
                            </Stack>
                        </Box>
                    </Box>

                </Box>
            <IconSection />
        </Container>
    )
}

export default Hero;