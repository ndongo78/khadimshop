import {useState,useEffect  } from 'react'
import { AppBar, Badge,  IconButton, InputBase, Toolbar, Typography , Box ,ListItem,List, SwipeableDrawer, Grid, Button,Tooltip,useTheme,useMediaQuery, CssBaseline, Drawer} from '@material-ui/core'
import logo from '../images/logo.png'
import React from 'react'
import { Link,useHistory  } from 'react-router-dom'
import { Search, ShoppingBasket, Menu,AccountCircleOutlined } from '@material-ui/icons'
import  { useStyles } from '../Styles/HeaderStyle'


import Rating from '@material-ui/lab/Rating';
import { addToCart } from '../redux/actions/ActionCart';
import { useDispatch,useSelector } from 'react-redux'
import { FavoriteBorderOutlined, Sync, VisibilityOutlined,ShoppingCartOutlined } from '@material-ui/icons'



const Header=()=> {
    const {isLogin,isAdmin}=useSelector(state=>state.user)
    const {articles} = useSelector(state => state.article)
    const {cart}=useSelector(state=>state.article)
    const classes=useStyles()
    const [mobileView, setmobileView] = useState(false)
    const [error, seterror] = useState('')
    let history= useHistory()
    const dispatch=useDispatch()
    const [open,setOpen]=useState(false)
    const [search, setsearch] = useState('')
    const [article, setarticle] = useState(null)
    const theme=useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleSearch=(text)=>{
        setsearch(text)
        if(text){
        const items=articles.filter(article=>article.title.toLowerCase().includes(text.toLowerCase()))
        setarticle(items);
        if(items.length===0) seterror('No Result Found')
        }else{
            setarticle([])
            setsearch('')
        }
    }

    
   
 const handleRedirect=()=>{
     if(isAdmin){
         history.push('/admin')
     }else{
         history.push('/profil')
     }
 }

 const destopView=()=>{
    return(
        <Toolbar className={classes.Toolbar}>
                <div style={{display: 'flex'}}>
                <img src={logo} alt='logo' className={classes.logo} />
                 <Typography variant='h6' color='primary' style={{margin:10}} className={classes.item}>Boutique Khadim</Typography>
                </div>
                 
                 <Box className={classes.search}>
                    <IconButton className={classes.searchIcon}>
                        <Search  />  
                    </IconButton>
                    <Typography variant='span' color='primary'  className={classes.item}>{error}</Typography>
                     <InputBase
                      placeholder='search'
                      onChange={(e)=>handleSearch(e.target.value)}
                      classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                     />
                 </Box>
                 <div className={classes.linkContainer}>
                    <Link to='/' className={classes.linkContainer}>Accueil</Link> 
                   <Link to='/product' className={classes.linkContainer}>Produits</Link>
                   <Link to='/contact' className={classes.linkContainer}>Contact</Link>
                 </div>
                
                 {  
                    
                     isLogin ? <IconButton onClick={handleRedirect} color='inherit' size='medium'> <AccountCircleOutlined style={{fontSize: '30px',
                     }}  /> </IconButton>
                      :<div>
                   <Link to='/register' className={classes.linkContainer}>S'inscrire</Link>
                   <Link to='/loggin' className={classes.linkContainer}>Se connecter</Link>
                   </div>
                 }
                 <div>
                    <Link to='/cart' className={classes.linkContainer} >
                       <Badge badgeContent={cart.length === 0 ? 0 : cart.length } color='secondary'>
                        <ShoppingBasket className={classes.item} style={{fontSize:35}}   />
                        </Badge>
                    </Link>
                 </div>
            </Toolbar> 
    )
    }

 const mobileShow=()=>{
          return(
                <Box className={classes.drawer}>
                    <Box style={{display:'flex',justifyContent:'space-between'}}>
                    <IconButton 
                    onClick={()=>setmobileView(true)}
                    >
                    <Menu
                    edge='start'
                    arial-label='open'
                    color='secondary'
                    className={classes.btn}
                    />
                    </IconButton>
                    <img src={logo} alt='logo' className={classes.logoMobile} />
                    </Box>
                    {
                        mobileShow &&

                    <Drawer
                    open={mobileView}
                    onClose={()=>setmobileView(false)}
                    >
                    <List>
                        <ListItem button key='home' onClick={()=>history.push('/')}>
                            <Typography variant='h6'>Accueil</Typography>
                        </ListItem>
                        <ListItem button key='home' onClick={()=>history.push('/product')}>
                            <Typography variant='h6'>Produits</Typography>
                        </ListItem>
                        <ListItem button key='home' onClick={()=>history.push('/contact')}>
                            <Typography variant='h6'>Contact</Typography>
                        </ListItem>
                        <ListItem button key='cart' onClick={()=>history.push('/cart')} className={classes.linkContainer}>
                        <Badge badgeContent={cart.length === 0 ? 0: cart.length } color='secondary'>
                        <ShoppingBasket className={classes.item} style={{fontSize:35,color:'#2196f3'}}   />
                        </Badge>
                        </ListItem>
                        <Box style={{marginTop:200,textAlign:'center'}}>
                        <ListItem button key='profil' onClick={()=>history.push('/register')}>
                            <Typography variant='h6'>S'incrire</Typography>
                        </ListItem>
                        <ListItem button key='profil' onClick={()=>history.push('/loggin')}>
                            <Typography variant='h6'>Se connecter</Typography>
                        </ListItem>
                        </Box>
                    </List>
                    </Drawer>
                    }
                    </Box>
     )
}

    useEffect(()=>{
        window.addEventListener('resize', () => {
            console.log(window.innerWidth);
            setmobileView(window.innerWidth < 600 ? true : false)
        })
    },[window])
 


    return (
        <>
        <CssBaseline/>
        <Box sx={{flexGrow:1}}>
            <AppBar className={classes.AppBar} position='fixed' >
             {
                   isMobile ? mobileShow(): destopView()
             }
            </AppBar>
            <div className={classes.toolbar}></div>
            <Grid container  style={{width:'100%'}}>
                {
                    article  ? article.map(article=>(
                        <Grid item sm={12} xs={12} md={3} key={article.id} className={classes.containerProduct}>
                        <Grid item sm={12} xs={12} style={{display: 'flex',
                        flexDirection:'column',alignItems:'center',margin: 10,
                        }}>
                          <img src={article.image}  alt=""  />
                          <Typography variant='h5' align='center' className={classes.productTitle}  > {article.title} </Typography>
                          <Typography variant='h5' align='center' >  <Rating name="read-only" value={article.avis} precision={0.5} readOnly /> </Typography>
                          <Typography variant='body1' align='center' color='primary' className={classes.price}> {article.price} FCFA </Typography>
                              <Grid className={classes.iconButton}>
                              
                              <Tooltip title="Voir Détail" aria-label="Voir Détail" > 
                              <IconButton style={{padding:15}} onClick={()=>history.push(`/details/${article.id}`)} > <VisibilityOutlined style={{fontSize:30}} /> </IconButton>
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
                              onClick={()=>dispatch(addToCart(article.id))}
                              >
                              Ajouter au panier
                              </Button>
                      </Grid>
                      </Grid>

                    ))
                    :null
                }
            </Grid>
        </Box>
        </>
    )
}

export default Header
