import Stack from "@mui/material/Stack";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Grid,Typography} from '@material-ui/core';



const HandleLoading=()=>{
    return(
        <Grid container justify='center' alignItems='center'  style={{height:'60vh'}}>
          <Stack>
            <CircularProgress size={50} color='success' />
          </Stack>
          <Typography variant='h6' gutterBottom>Chargement des articles en cours</Typography>
        </Grid>
    )
    }

export default HandleLoading;