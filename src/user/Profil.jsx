import React,{useEffect} from 'react'
import {GiShoppingCart,AiOutlineWallet,BiUserPin, IoHelpOutline, AiOutlineArrowLeft } from 'react-icons/all'
import { useStyles } from './styles/ProfilUser'
import {useDispatch,useSelector} from 'react-redux'
import { logOut } from '../redux/actions/ActionUser'
import { getLast } from '../redux/actions/CommandeAction'
import{Box, Button, Container, Grid,  Paper, Typography,CssBaseline, IconButton, } from '@material-ui/core'
import {FaUserAlt} from 'react-icons/fa'
import {Link,useHistory} from 'react-router-dom'
import Favorite from '../articles/Favorite'




const Profil = () => {
    const {user}=useSelector(state=>state.user)
    const {commandes}=useSelector(state=>state.commande)
    const dispatch=useDispatch()
    const classes=useStyles()
   const history=useHistory()

    useEffect(() => {
        dispatch(getLast(user.map(item=>item.id)))
    }, [user,dispatch])
    
    
    const loggOut=()=>{
      dispatch(logOut())
      history.push('/')
     }
     


    return (
        <Grid style={{marginTop:80}}>
        <CssBaseline />
        <Box style={{display: 'flex',
        justifyContent: 'space-between',
        }}>
          <IconButton className={classes.arow} >
            <AiOutlineArrowLeft />
            <Box component='span'>Page Accueil</Box>
          </IconButton>
          <Button variant='contained' color='primary' onClick={loggOut}>Se déconnecter</Button>
        </Box>
        
        {
          user.length !==0 ?
       
        <Container maxWidth='md' >
           <Grid className={classes.head}>
               <Paper className={classes.userImg}>
                 <FaUserAlt size='3rem'  />   
               </Paper>
               <Typography variant='h4' gutterBottom className={classes.headTitle}>Bonjour {user[0].prenom}</Typography>
           </Grid>
           <Grid>
               <Typography variant='h6' gutterBottom>Ma derniére commande</Typography>
                 
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
                            <Box className={classes.btnContainer}>
                               <Button variant='contained' color='primary'>
                               <Link to='/commandes' style={{textDecoration:'none',color:'#fff'}}>
                                   Voir mes commandes
                                   </Link>
                                   </Button>
                            </Box>
                        </Paper>
                       ))
                   }
           </Grid>
           <Grid container spacing={3} style={{marginBottom: 20,
        }}>
             <Grid item sm={12} xs={12} md={3} >
               <Paper className={classes.grid1}>
               <Link to='/userInfo' className={classes.links}>
                   <Typography align='center'>
                       <BiUserPin  size='3rem' color='grey' />    
                    <Typography variant='h6'>Mes informations</Typography>   
                   </Typography>
                   <Typography variant='body2' align='center'>Modifier mes cordonnées</Typography>
                   </Link>
               </Paper>
             </Grid>
             <Grid item sm={12} xs={12} md={3}>
               <Paper className={classes.grid1}>
                   <Link to='/commandes' className={classes.links}>
                   <Typography align='center'>
                       <GiShoppingCart size='3rem' color='grey' />    
                     <Typography  variant='h6'>Mes commandes</Typography>
                   </Typography>
                   <Typography variant='body2' align='center'>Annuler, Suivre , Retourner</Typography>
                   </Link>
               </Paper>
             </Grid>
             <Grid item sm={12} xs={12} md={3}>
                <Paper className={classes.grid1}>
                <Link to='/remboursement' className={classes.links}>
                   <Typography align='center'>
                       <AiOutlineWallet size='3rem' color='grey' />  
                     <Typography variant='h6'>Remboursements</Typography>
                   </Typography>
                   <Typography variant='body2' align='center'>Bons réductions,Bons d'achat</Typography>
                   </Link>
               </Paper>
             </Grid>
             <Grid item sm={12} xs={12} md={3}>
               <Paper className={classes.grid1}>
               <Link className={classes.links} to={'/contact'}>
                   <Typography align='center'>
                       <IoHelpOutline size='3rem' color='grey' />    
                     <Typography variant='h6'>Besoin d'aide</Typography>
                   </Typography>
                   <Typography variant='body2' align='center'>Service client</Typography>
                   </Link>
               </Paper>
             </Grid>
           </Grid>
           <Typography variant='h6' gutterBottom>Mes articles favorites</Typography>
           <Grid>
               <Favorite />
           </Grid>

        </Container> 
        : history.push('/loggin')
      }
        </Grid>
    )
}

export default Profil
