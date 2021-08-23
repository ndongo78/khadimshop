import React,{useEffect} from 'react'
import { Grid, Typography,CssBaseline,Container,Box,Paper } from '@material-ui/core'
import { useSelector,useDispatch } from 'react-redux'
import { useStyles } from '../user/styles/ProfilUser'
import { getAllCommandes } from '../redux/actions/CommandeAction'

const Commandes = () => {
    const {commandes}=useSelector(state=>state.commande)
    const dispatch=useDispatch()
    const classes=useStyles()
   
   console.log(commandes);
     useEffect(() => {
         dispatch(getAllCommandes())
     }, [dispatch])




    return (
        <>
          <CssBaseline />
          <Container maxWidth='md'>
            <Typography variant='h4' color='primary' align='center' gutterBottom> Mes commandes</Typography>
            <Grid>
            {
                       commandes.map(item=>(
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
                            {/* <Box className={classes.btnContainer}>
                               <Button variant='contained' color='primary'>
                               <Link  style={{textDecoration:'none',color:'#fff'}}>
                                   Voir mes commandes
                                   </Link>
                                   </Button>
                            </Box> */}
                        </Paper>
                       ))
                   }
            </Grid>
          </Container>
          
        </>
    )
}

export default Commandes
