import React from 'react'
import {Box, Container, Grid, Typography} from "@material-ui/core"
import { useStyles } from './FooterStyle'
import { Link } from 'react-router-dom'
import { Copyright, LocationCity, Mail, Phone, Room } from '@material-ui/icons'
import {FaFacebookF,FaInstagram,FaWhatsapp} from 'react-icons/all'

const Footer = () => {
    const classes=useStyles()
    return (
        <Grid container className={classes.container}>
            <Grid item sm={12} xs={12} md={3} className={classes.containerLink}>
              <Typography variant='h5' align='center' gutterBottom className={classes.titre}> Catégories de produits </Typography>
              <Box className={classes.linkContainer}>
                  <Link to='/ordinateur' className={classes.links}>Ordinateurs portables</Link>
                  <Link to='/smartphones' className={classes.links}>Téléphones portables</Link>
                  <Link to='/accessoires' className={classes.links}>Accéssoires</Link>
                  <Link to='/samsung' className={classes.links}>Samsung</Link>
                  <Link to='/iphones' className={classes.links}>Iphones</Link>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={3} className={classes.containerLink}>
            <Typography variant='h5' align='center' gutterBottom className={classes.titre}> Informations légales  </Typography>
            <Box className={classes.linkContainer}>
                  <Link to='/' className={classes.links}>Qui sommes nous</Link>
                  <Link to='/' className={classes.links}>Mentions légales</Link>
                  <Link to='/' className={classes.links}>Conditions générales</Link>
                  <Link to='/' className={classes.links}>Protection des données</Link>
                  <Link to='/' className={classes.links}>Contact</Link>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={3} className={classes.containerLink}>
            <Typography variant='h5' align='center' gutterBottom className={classes.titre}> Compte utilisateur  </Typography>
            <Box className={classes.linkContainer}>
                  <Link to='/ordinateur' className={classes.links}>Mon compte</Link>
                  <Link to='/smartphones' className={classes.links}>Mes commandes</Link>
                  <Link to='/accessoires' className={classes.links}>Ma liste de favoris</Link>
                  <Link to='/accessoires' className={classes.links}>Mes alertes</Link>
                  <Link to='/accessoires' className={classes.links}>Mes sav</Link>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={3} className={classes.containerLink}>
            <Typography variant='h5' align='center' gutterBottom className={classes.titre}> Nous contacter  </Typography>
            <Box className={classes.linkContainer} >
                  <Typography  className={classes.links} ><Room fontSize='small' style={{margin:4}} /> 3 avenue du  Pr L. Sedar Senghor</Typography>
                  <Typography className={classes.links}><LocationCity fontSize='small' style={{margin:4}} /> Dakar,Sénégal</Typography>
                  <Typography  className={classes.links}><Phone fontSize='small' style={{margin:4}} />00221779125844</Typography>
                  <Typography className={classes.links}><Mail fontSize='small' style={{marginRight:3}}/>khadimshop@orange.sn</Typography>
              </Box>
              <Box className={classes.containerIcon}>
                  <Link to='/' className='fIcone'><FaFacebookF /> </Link>
                  <Link to='/' className='fIcone'><FaInstagram /> </Link>
                  <Link to='/' className='fIcone'><FaWhatsapp /> </Link>
              </Box>
            </Grid>
            <Container>
            <Typography variant='body1'  style={{display: 'flex',alignItems:'center',justifyContent: 'center',opacity:'.5'}}>
             <Copyright /> ndongodahs.fr {new Date().getFullYear()}
            </Typography>
            </Container>
        </Grid>
    )
}

export default Footer
