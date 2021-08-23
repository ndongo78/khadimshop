import React,{useState} from 'react'
import { Box, Button, Container, Grid, IconButton, Paper, Typography,Accordion ,AccordionDetails,AccordionSummary } from '@material-ui/core'
import { useStyle } from '../Styles/CartStyle'
import { useDispatch,useSelector } from 'react-redux'
import { addCartItems,removeItem,deleteItem } from '../redux/actions/ActionCart'
import { Add, DeleteOutline, Remove   } from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useHistory} from 'react-router-dom'
import StripeContainer from '../strype/StripeContainer'
import MyPaypal from '../paypal/MyPaypal'
import carte from '../images/Arrière.png'
import paypalimage from '../images/paypalimage.png'

const Payement = () => {
    const {cart,total}=useSelector(state=>state.article)
    const {user}=useSelector(state=>state.user)
    const history=useHistory()
    const dispatch=useDispatch()
    const classes=useStyle()
    const [carteB, setcarteB] = useState(false)
    const [payPal, setpayPal] = useState(false)
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
    const handleShow=()=>{
        setcarteB(!carteB)
        setpayPal(false)
    }
    const handleShowP=()=>{
        setcarteB(false)
        setpayPal(!payPal)
    }
    return (
        <>
        {
            user.length ===0 ? 
            history.push('/')
            :
            <Grid  className={cart.length ===0 ? classes.container1 : classes.container}>
                 <Typography variant='h3' color='primary' align='center' className={classes.header}> Détail de votre commande  </Typography>
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
                 </Paper>
                
                </Box>
                <Box>
                   
                </Box>
               <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
               style={{display: 'flex',
               justifyContent: 'center',
               flexDirection:'column',alignItems:'center'
               }}
               >
               <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 <Typography variant='h5' align='center'>Mode paiement disponible</Typography>   
                </AccordionSummary>
                <AccordionDetails style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection:'column'}}>
                    <Button onClick={handleShow} >
                    <img src={carte} width={100} alt=""  />
                    </Button>
                    <Grid>
                        {
                            carteB && <StripeContainer /> 
                        }
                    </Grid>
                    <Button onClick={handleShowP}>
                    <img src={paypalimage} width={100} alt=""  />
                    </Button>
                    <Grid>
                    {
                        payPal && <MyPaypal />
                     }
                    </Grid>
                    
                </AccordionDetails>
                
                </Accordion>  
        </Grid>
        }
        </>
         
    )
}

export default Payement
