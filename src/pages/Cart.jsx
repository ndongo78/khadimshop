import React from 'react'
import { Box, Button, Container, Grid, IconButton, Paper, Typography } from '@material-ui/core'
import { useStyle } from '../Styles/CartStyle'
import { useDispatch,useSelector } from 'react-redux'
import { addCartItems,removeItem,deleteItem } from '../redux/actions/ActionCart'
import { Add, DeleteOutline, Remove } from '@material-ui/icons'
import {useHistory} from 'react-router-dom'
const Cart = () => {
    const {cart,total}=useSelector(state=>state.article)
    const {user}=useSelector(state=>state.user)
    const history=useHistory()
    const dispatch=useDispatch()
    const classes=useStyle()

     const handleRedirect=()=>{
         if(user.length ===0){
             alert('Vous devez vous connectez pour continuer')
             history.push('/loggin')
         }else{
             history.push('/payement')
         }
     }

    return (
        <Grid  className={cart.length ===0 ? classes.container1 : classes.container}>
                 <Typography variant='h3' color='primary' align='center' className={classes.header}> { cart.length === 0 ? 'Le panier est vide' : "Voici les articles ajoutés au panier"}   </Typography>
              {
                cart.map(item=>(
                <Container maxWidth='md' style={{padding: 15,}} className={classes.conteMild} key={item.id}>
                <Paper elevation={3} className={classes.boxs}  >
                <Box style={{margin: 15}}>
                    <img src={item.image} alt="" width={150} />
                </Box>
                <Box>
                <Typography variant='h6' className={classes.title}> {item.title} </Typography>
                <Typography variant='body1' className={classes.title}> {item.description} </Typography>
                <Typography variant='h6' className={classes.title} color='primary' >Prix: {item.price * item.qty} CFA </Typography>
                <Paper elevation={0} component='div'>
                <IconButton className={classes.moins} onClick={()=>dispatch(removeItem(item.id))}> <Remove /> </IconButton>
                <Paper elevation={0} component='span' className={classes.qty}> {item.qty} </Paper>
                <IconButton className={classes.add} onClick={()=>dispatch(addCartItems(item.id))}> <Add /> </IconButton>
                </Paper>  
                <Paper elevation={0} component='div'>
                 <IconButton color='secondary' className={classes.delete} onClick={()=>dispatch(deleteItem(item.id))} > <DeleteOutline className={classes.deleteIcon}  /> </IconButton>
                </Paper>
                </Box>
                
                    </Paper>
               
                </Container>   
                ))
            }
                <Box  className={classes.recap}>
                 <Paper className={classes.recapBt}>
                    <Typography variant='h4'  style={{color:'blueviolet'}} >Total commande: {total} CFA </Typography>  
                    {
                        user.length !==0 ? <Button className={classes.btn} onClick={handleRedirect} > Payer ma commande </Button> : null 
                    }
                    
                 </Paper>
                
                </Box>
                <Box>
                   
                </Box>
                {/* <Box>
                    <MyPaypal />
                </Box>  <StripeContainer />*/}
        </Grid>
    )
}

export default Cart
