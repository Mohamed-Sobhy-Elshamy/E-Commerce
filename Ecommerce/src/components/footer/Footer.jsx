import { Box, Button, Typography } from "@mui/material"


const Footer = () => {
    return(
        <Box 
            sx={{
                bgcolor: "#2B3445",
                py: 1.4,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
            }}
        >
            <Typography variant="body1"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"HighlightText"}
                sx={{fontSize: 19}}
            >
                Designed and Developed by 
                <Button 
                    sx={{
                        mx: 0.5,
                        fontSize: "19px",
                        textTransform: "capitalize",
                        color: "#ff7790"
                    }}
                >
                    Mohamed Elshamy
                </Button>
            </Typography>
        </Box>
    )
}

export default Footer;