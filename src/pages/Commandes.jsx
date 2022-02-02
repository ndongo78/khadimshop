import React,{useEffect} from 'react'
import { Grid, Typography,CssBaseline,Container,Box,Paper } from '@material-ui/core'
import { useSelector,useDispatch } from 'react-redux'
import { useStyles } from '../user/styles/ProfilUser'
import { getAllCommandes } from '../redux/actions/CommandeAction'
import { useHistory } from 'react-router-dom'

const Commandes = () => {
    const {commandes}=useSelector(state=>state.commande)
    const {user,token}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const classes=useStyles()
    const history=useHistory()
  
     useEffect(() => {
         dispatch(getAllCommandes(token))
         if(user.length === 0){
            history.push('/loggin')
         }
     }, [dispatch,token])

       console.log(commandes);



    return (
        <>
          <CssBaseline />
          <Container maxWidth='md' className={classes.root}>
            <Typography variant='h2' color='primary'  align='center' gutterBottom> Mes commandes</Typography>
            <Grid>
            {
                     commandes.length != 0 ?
                       commandes?.map(item=>(
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
                        </Paper>

                       ))
                        : <Typography variant='h4' color='primary' align='center'  gutterBottom>Vous n'avez pas encore de commandes</Typography>
                   }
            </Grid>
          </Container>
          
        </>
    )
}

export default Commandes
