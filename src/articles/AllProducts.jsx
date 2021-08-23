import Rating from '@material-ui/lab/Rating';
import React,{useEffect} from 'react'
import { getAllArticle } from '../redux/actions/ActionArticle';
import { addToCart } from '../redux/actions/ActionCart';
import { Button, Grid, IconButton, Typography, Box, Tooltip, CssBaseline } from '@material-ui/core'
import { useDispatch,useSelector } from 'react-redux'
import { FavoriteBorderOutlined, Sync, VisibilityOutlined,ShoppingCartOutlined } from '@material-ui/icons'
import { useStyles } from './styles/AllProductStyle';


const AllProducts = () => {
    const {articles}=useSelector(state=>state.article)
    const dispatch=useDispatch()
    const classes=useStyles()
    const [open] = React.useState(false);

  useEffect(() => {
     dispatch(getAllArticle())
  }, [dispatch])
    return (
        <Grid container style={{marginTop: 30,
        }} >
          <CssBaseline />
              {
                articles.map((item,i)=>(
                        <Grid item sm={12} xs={12} md={3} key={i} className={classes.containerProduct}>
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
                                <IconButton style={{padding:15}} onClick={()=>alert(item.id)} > <VisibilityOutlined style={{fontSize:30}} /> </IconButton>
                                </Tooltip>

                                <Tooltip title="Ajouter aux favoris" aria-label="Ajouter aux favoris">

                                <IconButton color='secondary' style={{padding:15}}> <FavoriteBorderOutlined style={{fontSize:30}} /> </IconButton>
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
        </Grid>
    )
}

export default AllProducts
