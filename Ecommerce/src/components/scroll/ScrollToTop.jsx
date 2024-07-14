import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";


const ScrollToTop = () => {
    return(
        <Zoom in={useScrollTrigger({threshold: 70})}>
            <Fab 
            onClick={() => {
                window.scrollTo(0, 0)
            }}
            sx={{
                position: "fixed",
                bottom: 33, right: 33
                }} color="primary" aria-label="add" size="small" variant="extended">
                <KeyboardArrowUp fontSize="medium" />
            </Fab>
        </Zoom>
    )
}

export default ScrollToTop;