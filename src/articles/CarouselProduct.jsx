import React from 'react';
import {  Typography,Paper, Grid, Container, CssBaseline, Button } from '@material-ui/core'
import { useDispatch,useSelector } from 'react-redux'
import {getArticleFor} from '../redux/actions/ActionArticle'
import { addToCart } from '../redux/actions/ActionCart'
import { useStyles } from './styles/CarourelStyle'
import Carousel from 'react-material-ui-carousel'
import { ShoppingCartOutlined } from '@material-ui/icons'



 const CarouselProduct = () => {
     const {articles}=useSelector(state=>state.cart)
     const dispatch=useDispatch()
     const classes=useStyles()
      

    React.useEffect(() => {
         dispatch(getArticleFor())
    }, [dispatch])


    return (
    <>
     <CssBaseline />
        <Carousel
        animation='slide' >
            {
                articles.map((item,i)=>(
                    <Container key={i}>
                     <Grid container className={classes.detailCarousel} >
                     <Grid item sm={12} xs={12} md={5} >
                         <img src={item.image} alt="" height='500px' />
                     </Grid> 
                    <Grid item sm={12} xs={12} md={5} className={classes.containerDetail}>
                    <Typography variant='h5' className={classes.titleCarousel} color='primary' gutterBottom> {item.title} </Typography>
                    <Paper elevation={0} className={classes.descriptionCarousel}> {item.description} </Paper> 
                    <Paper className={classes.price}> Prix: {item.price} FCFA </Paper>
                     
                     <Button
                     variant='contained'
                     endIcon={ <ShoppingCartOutlined />}
                     color='primary'
                     className={classes.btn}
                     onClick={()=>dispatch(addToCart(item.id))}
                     >
                        Acheter
                     </Button>
                      </Grid> 
                    </Grid> 
                      
                   </Container>
                ))
            }
       
            
        </Carousel>
        </>
    )
}

export default CarouselProduct;