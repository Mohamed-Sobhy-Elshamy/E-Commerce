import { Box, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Links = ({title}) => {
    return(
        <>
            <Box sx={{display: "flex", alignItems: "center", position: "relative",
                    ":hover .show-when-hover": {display: "block"},
                    ":hover": {cursor: "pointer"}
                    }}>
                <Typography variant="body1">{title}</Typography>
                <ExpandMoreIcon />

                <Paper 
                className="show-when-hover"
                sx={{position: "absolute", top: "100%", minWidth: "170px", left: "50%" ,transform: "translateX(-50%)", display: "none", zIndex: 20 }}>
                    <nav aria-label="secondary mailbox folders">
                        <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText 
                                sx={{".MuiTypography-root": {fontSize: "12px"}}}
                                primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem  disablePadding sx={{position: "relative", ":hover .subLink": {display: "block"}}}>
                            <ListItemButton>
                                <ListItemText 
                                sx={{".MuiTypography-root": {fontSize: "12px"}}}
                                primary="Products" />
                                <Box flexGrow={1} />
                                <ArrowRightIcon />
                            </ListItemButton>
                        <Paper className="subLink" sx={{position: "absolute", top: 0, left: "100%", minWidth: 130, display: "none"}}>
                            <nav aria-label="secondary mailbox folders">
                                <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Add Product" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                        <ListItemText primary="Edit Product" />
                                    </ListItemButton>
                                </ListItem>
                                </List>
                            </nav>
                        </Paper>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText 
                                sx={{".MuiTypography-root": {fontSize: "12px"}}}
                                primary="Orders" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText 
                                sx={{".MuiTypography-root": {fontSize: "12px"}}}
                                primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                        </List>
                    </nav>
                </Paper>
            </Box>
        </>     
    )
}

export default Links;