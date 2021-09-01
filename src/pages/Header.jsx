import {useState  } from 'react'
import { AppBar, Badge,  IconButton, InputBase, Toolbar, Typography } from '@material-ui/core'
import logo from '../images/logo.png'
import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import { Search, ShoppingBasket, Menu,AccountCircleOutlined } from '@material-ui/icons'
import  { useStyles } from '../Styles/HeaderStyle'
import {useSelector} from 'react-redux'

const Header=()=> {
    const {isLogin,role}=useSelector(state=>state.user)
    const {cart}=useSelector(state=>state.article)
    const classes=useStyles()
    const [mobileView, setmobileView] = useState(true)
    let history= useHistory()
    
   
 const handleRedirect=()=>{
     if(role ==='admin'){
         history.push('/admin')
     }else{
         history.push('/profil')
     }
 }

 


    return (
        <div className={classes.top}>
            <AppBar className={classes.AppBar} position='fixed' >
            <div className={classes.menuButton}>
                    <IconButton 
                     onClick={()=>setmobileView(!mobileView)}
                    >
                    <Menu
                     edge='start'
                     arial-label='open'
                      color='secondary'
                      className={classes.btn}
                    />
                    </IconButton>
                    <img src={logo} alt='logo' className={classes.logoMobile} />
                    </div>
               
               {
                   mobileView &&
                   <Toolbar className={classes.Toolbar}>
                    <div style={{display: 'flex'}}>
                    <img src={logo} alt='logo' className={classes.logo} />
                     <Typography variant='h6' color='primary' style={{margin:10}} className={classes.item}>Boutique Khadim</Typography>
                    </div>
                     
                     <div className={classes.search}>
                     <IconButton className={classes.searchIcon}>
                               <Search  />  
                             </IconButton>
                         <InputBase
                          placeholder='search'
                          classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                         />
                     </div>
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
               }
                
            </AppBar>
            <div className={classes.toolbar}></div>
           
        </div>
        
    )
}

export default Header
