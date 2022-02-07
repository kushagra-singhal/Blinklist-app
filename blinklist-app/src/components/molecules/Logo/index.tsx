import { Box } from "@mui/material";
import Typography from '../../atoms/Typography/index';
import Image from '../../atoms/images/index'
// import { Typography } from "@material-ui/core";

const LogoComponent = ({
    height=33, url, name, ...props}:any)=>{
        return (
            <Box sx ={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Image height={height} alt="blinklist" component="img" src={url}/>
                <Typography 
                sx={{fontWeight: 'bold', fontSize: '24px'}}>
                    {name}
                </Typography>
            </Box>
        );
    }

    export default LogoComponent;