import { Button, Grid, IconButton, Typography, Box, Tooltip, } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { FavoriteBorderOutlined, Sync, VisibilityOutlined,ShoppingCartOutlined } from '@material-ui/icons'
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getArticle } from '../redux/actions/ActionArticle';
import { useStyles } from '../Styles/ProduitStyle';
import { addToCart } from '../redux/actions/ActionCart';
import { useHistory } from 'react-router-dom'
import HandleLoading from '../components/Loading';
import { addFavorite } from '../redux/actions/FavoriteAction';

const TendanceProduct = () => {
    const {articles}=useSelector(state=>state.article)
    const {user,token}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const classes=useStyles()
    const [open] = React.useState(false);
    const history=useHistory()

  useEffect(() => {
     dispatch(getArticle())
  }, [dispatch])

  const addingFavorite=(id)=>{
    if(user.length ===0 ){
      alert('Veuillez vous connecter pour ajouter un article a votre liste de favoris')

    }else{
       dispatch(addFavorite(id,token))
    }

  }


    return (
        <Grid container style={{marginTop: 30,
        }} >
             {
                  articles.length === 0 ?
                        HandleLoading()
                          :(
                            <>
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
                                                <IconButton style={{padding:15}} onClick={()=>history.push(`/details/${item.id}`)} > <VisibilityOutlined style={{fontSize:30}} /> </IconButton>
                                                </Tooltip>

                                                <Tooltip title="Ajouter aux favoris" aria-label="Ajouter aux favoris">

                                                <IconButton color='secondary' style={{padding:15}} onClick={()=>addingFavorite(item.id)}> <FavoriteBorderOutlined style={{fontSize:30}} /> </IconButton>
                                                </Tooltip>
                                                    
                                                <IconButton color='secondary' style={{padding:15}}><Sync style={{fontSize:30}} /></IconButton>
                                                </Grid> 
                                            <Button
                                              variant='contained'
                                                endIcon={ <ShoppingCartOutlined />}
                                                color='primary'
                                                className={classes.btn}
                                                onClick={()=>dispatch(addToCart(item))}
                                                >
                                                Ajouter au panier
                                                </Button>
                                        </Grid>
                                        </Grid>
                                ))
                            }
                            </>
                          )
             }
        </Grid>
    )
}

export default TendanceProduct
