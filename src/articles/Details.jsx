import React,{useEffect} from 'react'
import Rating from '@material-ui/lab/Rating';
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/ActionCart';
import {  getDetailArticle } from '../redux/actions/ActionArticle'
import { useParams } from 'react-router-dom'
import { Box, Container, Grid ,Typography ,makeStyles,Button} from '@material-ui/core'
import {ShoppingCartOutlined} from '@material-ui/icons'

const Details = () => {
     const {detail} = useSelector(state => state.article)
        const dispatch = useDispatch()
    const { id } = useParams()
    const classes = useStyles()

    console.log(detail)

    useEffect(() => {
        dispatch(getDetailArticle(id))
    }, [dispatch,id])



    return (
      <Grid>
          {
              detail?.map(item=>(
                  <Container >
                      <Box className={classes.conatiner}>
                          <Box>
                              <img src={item.image} alt="" srcset="" />
                          </Box>
                          <Box className={classes.containerBox}>
                                <Typography variant="h5" className={classes.title}>{item.title}</Typography>
                                <Typography variant="h5" className={classes.description}>{item.description} </Typography>
                          <Box className={classes.btom}>
                                <Typography variant="h5" gutterBottom>Prix: {item.price} FCFA</Typography>
                                <Typography variant="h5">Note: <Rating name="read-only" value={item.avis} precision={0.5} readOnly /></Typography>
                          </Box>
                          <Button
                               variant='contained'
                                endIcon={ <ShoppingCartOutlined />}
                                color='primary'
                                className={classes.btn}
                                onClick={()=>dispatch(addToCart(item.id))}
                                >
                                Ajouter au panier
                                </Button>
                          </Box>
                      </Box>
                  </Container>
             

              ))
          } 
          </Grid>
    )
}

export default Details

const useStyles = makeStyles(theme => ({
    conatiner:{
        display:'flex',
        boxShadow: '0px 0px 10px #00000029',
        padding:20,
        borderRadius:10,
        margin:20,
    },
    containerBox:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin: 10,
        padding:10,
        borderRadius:10,
        backgroundColor:'#f5f5f5',
    },
    btom:{
       marginTop:100,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    description:{
        marginTop:15,
    },
    btn:{
        marginTop:25,
        borderRadius:10,
    }

}));