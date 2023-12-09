import React from 'react'
import {  Grid, Typography } from '@material-ui/core'
import {MdHeadsetMic} from 'react-icons/md'
import {AiFillCreditCard} from 'react-icons/ai'
import {IoAirplane} from'react-icons/io5'
import { useStyles } from '../Styles/ComponentsStyle'

const LivraisonArticle = () => {
    const classes=useStyles()

    return (
        <Grid container className={classes.container}>
               <Grid item sm={12} xs={12} md={3} className={classes.paper}>
                <IoAirplane size={72} className='animateIcon' style={{marginTop: -40,}} />
                <Typography elevation={0} variant='h6' style={{marginTop: 20, textAlign:'center'}}>Nous vous livraison dans 3 jours </Typography>
               </Grid>
               <Grid item  sm={12} xs={12} md={3} className={classes.paper}>
                   <AiFillCreditCard size={60} className='animateIcon' />
                   <Typography variant='h6' style={{marginTop: 20, textAlign:'center'}}>
                       Payement sécurisé <br />
                       Facilté de payement 
                   </Typography>
               </Grid>
               <Grid item  sm={12} xs={12} md={3} className={classes.paper}>
                   <AiFillCreditCard size={60} className='animateIcon' />
                   <Typography variant='h6' style={{marginTop: 20, textAlign:'center'}}>Satisfait où  on vous<br/> remboursement l'intégralité </Typography>
               </Grid>
                <Grid item  sm={12} xs={12} md={3}  elevation={0} className={classes.paper}>
                  <MdHeadsetMic size={70} className='animateIcon' /> 
                  <Typography  variant='h6' style={{marginTop: 20, textAlign:'center'}}>
                     Support disponible <br/>
                       24h/7j  
                  </Typography>
                  
                </Grid>
                <Grid className={classes.divider}></Grid>
        </Grid>
    )
}

export default LivraisonArticle
