// import React from "react";
import   { useContext, useState } from "react";
import { ColorModeContext } from "../../Theme";
import { Box, IconButton, useTheme, Typography, Stack, Container } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

// Selected meun
const options = [
    'Arabic',
    'English',
];


const Header1 = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    // selected meun 
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null)
    }

    const handleClose = () => {
    setAnchorEl(null);
    };


    return(
        <Box sx={{
            bgcolor: "gray",
            py: "3px",
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10
        }}>

            <Container>
            <Stack direction={"row"} alignItems={"center"}>
                <Typography sx={{
                    mr:2,
                    p: "5px 10px",
                    bgcolor:"#D23F57",
                    fontSize: "15px",
                    borderRadius: "15px",
                    color: "#fff"
                }} variant="body2">DEV</Typography>

                <Typography sx={{
                    fontSize: "17px",
                    fontWeight: "400px",
                    color: "#fff"
                }} variant="body2">E-Commerce Mohamed Elshamy</Typography>

                    <Box flexGrow={1} />

                {/* light and dark mode */}
                <div>
                    {theme.palette.mode === "light" ? (
                        <IconButton
                        onClick={() => {
                            localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                            );
                            colorMode.toggleColorMode();
                        }}
                        color="inherit"
                        >
                        <LightModeOutlined />
                        </IconButton>
                    ) : (
                        <IconButton
                        onClick={() => {
                            localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                            );
                            colorMode.toggleColorMode();
                        }}
                        color="inherit"
                        >
                        <DarkModeOutlined />
                        </IconButton>
                    )}
                </div>

                {/* selected menu  */}
                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{ p: 0, m: 0 }}
                >
                    <ListItem
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                    sx={{"&:hover": {cursor: "pointer"}, px: 1}}
                    >
                    <ListItemText
                        
                        secondary={options[selectedIndex]}
                    />
                    <ExpandMoreIcon  />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                    }}
                >
                    {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                    ))}
                </Menu>

                <FacebookIcon sx={{fontSize: "23px", color: "#fff"}}  />
                <InstagramIcon  sx={{fontSize: "23px", color: "#fff"}} />
                <TwitterIcon sx={{fontSize: "23px", color: "#fff"}} />
            </Stack>
            </Container>
        </Box>
    )
}

export default Header1;