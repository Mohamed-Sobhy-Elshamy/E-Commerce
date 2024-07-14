import { Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: "2px solid #777",
        '&:hover': {
            border: "2px solid #333"
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '288px',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "gray",
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        },
    }));


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            },
        }));

    // Selected menu
    const options = [
        'All Categories',
        'Cars',
        'Clothes',
        'Electronics',
    ];


const Header2 = () => {
    // selected menu 
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
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

    const Theme = useTheme()


    return(
        <Container sx={{my: 2, display: "flex", justifyContent: "space-between"}}>
            <Stack alignItems={"center"}>
                <ShoppingCartIcon />
                <Typography variant="body1">E-commerce</Typography>
            </Stack>


            <Search sx={{
                borderRadius: "22px",
                display: "flex",
                }}>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />

                <div>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ bgcolor: Theme.palette.myColor.main, borderBottomRightRadius: 22, borderTopRightRadius: 22, p: 0 }}
                    >
                        <ListItem
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                        >
                        <ListItemText
                            sx={{width: 95, textAlign: "center", "&:hover": {cursor: "pointer"}}}
                            secondary={options[selectedIndex]}
                        />
                        <ExpandMore sx={{fontSize: "16px"}} />
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
                            sx={{fontSize: "12px"}}
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Search>

            <Stack direction={"row"} alignItems={"center"}>
                <IconButton>
                    <PersonIcon />
                </IconButton>

                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="primary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </Stack>
        </Container>
    )
}

export default Header2;