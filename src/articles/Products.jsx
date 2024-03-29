import { Button, Grid, IconButton, Typography, Box, Tooltip, } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { FavoriteBorderOutlined, Sync, VisibilityOutlined,ShoppingCartOutlined,Favorite } from '@material-ui/icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getNewArticle } from '../redux/actions/ActionArticle'
import { useStyles } from '../Styles/ProduitStyle'
import { addToCart } from '../redux/actions/ActionCart';
import { useHistory } from 'react-router-dom'
import HandleLoading from '../components/Loading';
import {addFavorite,getFavorite} from '../redux/actions/FavoriteAction'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

      
  

const Products = (props) => {
    const {newArticles}=useSelector(state=>state.article)
    const {favorite}=useSelector(state=>state.favorite)
    const {user,token}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const classes=useStyles()
    const [open] = React.useState(false);
    const history=useHistory()
    const [isFavorite,setisFavorite]=React.useState(false)


  useEffect(() => {
     dispatch(getNewArticle())
  }, [dispatch,isFavorite])

   const addingFavorite=(id)=>{
     if(user.length ===0 ){
       alert('Veuillez vous connecter pour ajouter un article a votre liste de favoris')
     }else{
        dispatch(addFavorite(id,token))
        
     }

   }


    return (
         <>
         <Typography variant='h3' align='center' gutterBottom color='primary' className={classes.titre}>Nos Nouveaux Produits</Typography>
        {
          newArticles.length && 
          <Carousel 
         swipeable={false}
         draggable={false}
         showDots={false}
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
        //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
         autoPlaySpeed={5000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet", "mobile"]}
         //deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
        >
            {
               newArticles.length===0 ? 
                HandleLoading()
                :
               newArticles.map((item,i)=>(
                    <Grid className={classes.containerProduct} key={i}>
                        <Grid item sm={12} xs={12} style={{display: 'flex',
                        flexDirection:'column',alignItems:'center',margin: 10,
                        }}>
                          
                            <img src={item.image}  alt=""  />
                            <Typography variant='h5' align='center' className={classes.productTitle}  > {item.title} </Typography>
                            <Typography variant='h5' align='center' >  <Rating name="read-only" value={item.avis} precision={0.5} readOnly /> </Typography>
                            <Typography variant='body1' align='center' color='primary' className={classes.price}> {item.price} FCFA </Typography>
                                {
                                    open && <Box component='div'> {item.description} </Box>
                                }
                                <Grid className={classes.iconButton}>
                                <Tooltip title="Voir Détail" aria-label="Voir Détail" > 
                                <IconButton style={{padding:15}} onClick={()=>history.push(`/details/${item.id}`)} > <VisibilityOutlined style={{fontSize:30}} /> </IconButton>
                                </Tooltip>
                                <Tooltip title="Ajouter aux favoris" aria-label="Ajouter aux favoris">
                                  <IconButton style={{padding:15}} onClick={()=>addingFavorite(item.id)}> <FavoriteBorderOutlined style={{fontSize:30}} /> </IconButton>
                                
                                </Tooltip>
                                <IconButton color='secondary' style={{padding:15}}><Sync style={{fontSize:30}} /></IconButton>
                                 </Grid> 
                             <Button
                               variant='contained'
                                endIcon={ <ShoppingCartOutlined />}
                                color='primary'
                                className={classes.btn}
                                onClick={()=>dispatch(addToCart(item.id))}
                                >
                                Ajouter au panier
                                </Button>
                        </Grid>
                    </Grid>
                ))
            }
        
        </Carousel>
        }
        
        </>
    )
}

export default Products
