import { Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import DevicesIcon from '@mui/icons-material/Devices';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from "./Links";



const Header3 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const Theme = useTheme();

    const [state, setState] =useState({
            top: false,
            left: false,
            bottom: false,
            right: false,
        });
        
        const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
        
            setState({ ...state, [anchor]: open });
        };

    return(
        <Container sx={{display: "flex", alignItems: "center", justifyContent: "space-between", mt: 6}}>
            <Box>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{width: 225, bgcolor: Theme.palette.myColor.main}}
                >
                    <WindowIcon />
                    <Typography variant="body1" sx={{p: "0", textTransform: "capitalize", mx: 1}}>Categories</Typography>
                    <Box flexGrow={1} />
                    <KeyboardArrowRightIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ElectricBikeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Bikes</ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <DevicesIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Elctronics</ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <MenuBookIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Books</ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <SportsEsportsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Games</ListItemText>
                    </MenuItem>
                </Menu>
            </Box>

                {useMediaQuery(`(min-width:1100px)`) && (
                    <Stack direction={"row"} alignItems={"center"} gap={3}>
                        <Links title={"Home"} />
                        <Links title={"Mega Menu"} />
                        <Links title={"Full Screen Menu"} />
                        <Links title={"Pages"} />
                        <Links title={"User Account"} />
                        <Links title={"Vender Account"} />
                    </Stack>
                )}

                {useMediaQuery('(max-width:1100px)') && (
                    <IconButton onClick={toggleDrawer("top", true)}>
                        <MenuIcon />
                    </IconButton>
                )}
                <Drawer 
                    anchor={"top"}
                    open={state["top"]}
                    onClose={toggleDrawer("top", false)}
                    sx={{".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {height: "100%"}}}
                >

                    <Box sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10}}>
                        <IconButton sx={{ ":hover": {rotate: "360deg", transition: "0.3s", color: "red"}, position: "absolute", top: 0, right: 10}} onClick={toggleDrawer("top", false)}>
                            <CloseIcon />
                        </IconButton>

                        {[{mainLink: "Home", subLink: ["Link 1", "Link 2", "Link 3"]},
                        {mainLink: "Mega link", subLink: ["Link 1", "Link 2", "Link 3"]},
                        {mainLink: "Full screen menu", subLink: ["Link 1", "Link 2", "Link 3"]},
                        {mainLink: "Pages", subLink: ["Link 1", "Link 2", "Link 3"]},
                        {mainLink: "User account", subLink: ["Link 1", "Link 2", "Link 3"]},
                        {mainLink: "Vender account", subLink: ["Link 1", "Link 2", "Link 3"]}
                        ].map((item) => {
                            return(
                                <Accordion key={item.mainLink} elevation={0} sx={{bgcolor: "initial"}}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography>{item.mainLink}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <List>
                                        {item.subLink.map((link) => {
                                            return(
                                                <ListItem key={link}>
                                            <ListItemButton>
                                                <ListItemText primary={link} />
                                            </ListItemButton>
                                        </ListItem>
                                            )
                                        })}
                                    </List>
                                    </AccordionDetails>
                        </Accordion>
                            )
                        })}
                    </Box>
                </Drawer>

        </Container>
    )
}

export default Header3;