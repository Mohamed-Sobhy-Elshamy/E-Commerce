import { Box, Container, Divider, Stack, Typography, useTheme } from "@mui/material"
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const IconSection = () => {
    return(
        <Container sx={{mt: 4}}>
            <Stack divider={<Divider orientation="vertical" flexItem />} direction={"row"} alignItems={"center"} sx={{flexWrap: "wrap"}}>
                <MyBox icon={<ElectricBoltIcon />} title={"Fast Delivery"} subTitle={"Start from $10"} />
                <MyBox icon={<WorkspacePremiumIcon />} title={"Money Guarantee"} subTitle={"7 Days Back"} />
                <MyBox icon={<AccessAlarmIcon />} title={"365 Days"} subTitle={"For free return"} />
                <MyBox icon={<CreditScoreIcon />} title={"Payment"} subTitle={"Secure system"} />
            </Stack>
        </Container>
    )
}

export default IconSection;


// Boxes
// eslint-disable-next-line react/prop-types
const MyBox = ({icon, title, subTitle}) => {
    const theme = useTheme();
    return(
        <Box sx={{width: 250, display: "flex", flexGrow: 1, alignItems: "center", gap: 3, justifyContent: "center", py: 1.5, 
            bgcolor: theme.palette.mode === "dark"? "#000" : "#fff" }}>
            {icon}
            <Box>
                <Typography variant="body1">
                    {title}
                </Typography>
                <Typography variant="body1" sx={{
                    fontWeight: 400, color: theme.palette.text.secondary
                }}>
                    {subTitle} 
                </Typography>
            </Box>
        </Box>
    )
}

