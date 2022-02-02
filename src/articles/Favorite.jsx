import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useStyles} from "../user/styles/ProfilUser";
import {getFavorite,deleteFavorite} from '../redux/actions/FavoriteAction'
import{Box, Button, Container, Grid,  Paper, Typography,CssBaseline, IconButton, } from '@material-ui/core'
import { Delete } from '@material-ui/icons';


const Favorite = () => {
    const {user,token}=useSelector(state=>state.user)
    const {favorite,error}=useSelector(state=>state.favorite)
    const classes = useStyles();
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getFavorite(token))
    }, [dispatch,token])

    const removeFavorite=(id)=>{
        dispatch(deleteFavorite(id,token))
    }

  return (
      <Grid>
          <CssBaseline />
      {
            favorite.length ===0 ?
            <Typography variant='h6' gutterBottom>Vous n'avez pas d'articles favorites</Typography>
            :
      favorite?.map(item=>(
     <Paper elevation={0} key={item.id} className={classes.container}>
         <Box>
         <img src={item.articles.image} width={200} alt=""  />
         </Box> 
         <Box className={classes.textDesc}>
             <Typography variant='h4'> {item.articles.title} </Typography>
             <Box>
              <Typography variant='h6' color='primary'>Description</Typography>
              <Typography variant='body1'> {item.articles.description} </Typography>   
             </Box>
             <Box>
                 <Typography variant='h6' color='primary'>Prix</Typography>
               <Typography variant='h6'>{item.articles.price} CFA</Typography>  
             </Box>
             
         </Box>
         <Box className={classes.btnContainer}>
           <IconButton onClick={()=>removeFavorite(item.id)}>
                <Delete color='red' />
           </IconButton>
         </Box>
     </Paper>
    ))
}
</Grid>
)
};

export default Favorite;
