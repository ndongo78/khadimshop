import React,{useState,useEffect} from 'react'
import { Drawer, Paper, Typography,Toolbar, Button ,
    Table,TableCell,TableHead,TableBody,TableContainer,TableRow,Grid,  CssBaseline, Container
} from '@material-ui/core'
import { getAllArticle,deleteArticle } from '../redux/actions/ActionArticle'
import { useStyles } from '../user/styles/ProfilStyle'
import { Email, HomeWork, Person, PhoneAndroid, EditOutlined,Clear,  Delete } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory,Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { logOut } from '../redux/actions/ActionUser';

const ProfilAdmin=()=> {
    const {user,token}=useSelector(state=>state.user)
    const {articles}=useSelector(state=>state.article)
    const dispatch=useDispatch()
    const classes=useStyles()
    let history = useHistory()
    //let islog=localStorage.getItem('react_token')
    const [show, setshow] = useState(false)
    const [open, setopen] = useState(false)
    
    const colums=[
        {id:'image', label:'Image',align: 'right'},
        {id:'categorie', label:'categorie',align: 'right'},
        {id:'title', label:'Title',align: 'right'},
        {id:'description', label:'Description',align: 'right'},
        {id:'price', label:'Price',align: 'right'},
        {id:'actions', label:'Actions',align: 'right'}
    ]
    
  
    useEffect(() => {
        dispatch(getAllArticle())
     }, [dispatch])

    const loggOut=()=>{
        dispatch(logOut())
        history.push('/')
       }

    return (
        <> 
         {
             user.length !==0 ?
         <>
        <CssBaseline />
        <Button endIcon={<MenuIcon fontSize='20px'/> } color='primary' onClick={()=>setopen(true)} >Dasbord</Button>
        <Typography variant='h3' color='Primary' align='center' gutterBottom>Bonjour {user[0].prenom}</Typography>
            <Grid className={classes.root} >
            <Drawer className={classes.titre} 
            variant="persistent" 
            anchor='left'
            open={open}
            > 
          <Toolbar className={classes.toolbar} />
          <Button endIcon={<Clear fontSize='20px'/> } color='secondary' onClick={()=>setopen(false)} >Fermer</Button>

            <Button onClick={()=>setshow(!show)}  className={classes.buton}>Mes informations </Button>
            {
                show && 
                <>
                {
                    user.map(item=>(
                    <Grid key={item.id}>
                <div className={classes.info}>
                <Paper elevation={0}><Person className={classes.icons} /> </Paper>  
                <Paper className={classes.paper} elevation={0}> Prénom: {item.prenom} </Paper>
                </div>
                <div className={classes.info}>
                    <Paper elevation={0}><Person className={classes.icons} /> </Paper>  
                <Paper className={classes.paper} elevation={0}> Nom: {item.nom} </Paper>
                </div>
                <div className={classes.info}>
                    <Paper elevation={0}><Email className={classes.icons} /> </Paper>  
                <Paper className={classes.paper} elevation={0}> Email: {item.email} </Paper>
                </div>
                <div className={classes.info}>
                    <Paper elevation={0}><PhoneAndroid className={classes.icons} /> </Paper>  
                <Paper className={classes.paper} elevation={0}> Téléphone: {item.telephone} </Paper>
                </div>
                <div className={classes.info}>
                    <Paper elevation={0}><HomeWork className={classes.icons} /> </Paper>  
                <Paper className={classes.paper} elevation={0}> Addresse: {item.addresse} </Paper>
                </div> 
                    </Grid>
                    ))
                }
              
                 <Button color='primary' endIcon={<EditOutlined />} onClick={()=>history.push('/updateInfos')} className={classes.buton}>Modifier mes informations</Button>
                
                </>
            }
             <Button   className={classes.buton}> <Link to="/clients" style={{textDecoration: 'none'}}>Gestion des clients</Link></Button>
             <Button   className={classes.buton}> <Link to="/categories" style={{textDecoration: 'none'}}>Gestion des catégories</Link></Button>
             <Button   className={classes.buton}> <Link to="/postCategory" style={{textDecoration: 'none'}}>Créer une Catégory</Link></Button>
            <Button   className={classes.buton}> <Link to='/postArticle' style={{textDecoration: 'none'}}>Créer un Article</Link> 
            </Button>
            <Button onClick={loggOut} color='secondary' className={classes.buton} variant='contained'>Se Déconnecter</Button> 
          </Drawer>
           <Container maxWidth='lg'>
            <Grid item xs={12} sm={12}  >
            <Paper>
                 <TableContainer>
                     <Table  
                     stickyHeader
                     aria-label='Produits '
                     >
                         <TableHead>
                             <TableRow>
                             {colums.map(column => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{textAlign:'center'}}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                             </TableRow>
                           
                         </TableHead>
                       <TableBody>
                           { 
                              articles.map((item,i)=>(
                                  <TableRow key={i} >
                                      <TableCell style={{textAlign:'center'}}> <img src={item.image} alt="" width={50} /> </TableCell>
                                      <TableCell align='right' style={{textAlign:'center'}}> {item.categoryId} </TableCell>
                                      <TableCell align='right' style={{textAlign:'center'}}> {item.title} </TableCell>
                                      <TableCell align='right' style={{width:300,textAlign:'center'}}> {item.description} </TableCell>
                                      <TableCell align='right' style={{textAlign:'center'}} > {item.price} </TableCell>
                                      <TableCell align='right' >
                                        <Button variant='contained' color='primary' endIcon={<EditOutlined />} style={{margin:10}} onClick={()=>history.push(`/updateArticle/${item.id}`)}>Modifier</Button>
                                        <Button variant='contained' endIcon={<Delete />} color='secondary' onClick={()=>dispatch(deleteArticle(item.id,token))}>Delete</Button>  
                                      </TableCell>
                                  </TableRow>
                              ))
                              
                           }
                         
                           
                       </TableBody>
                     </Table>
                 </TableContainer>
                
             </Paper>

            </Grid>
          </Container>
             </Grid>
             
             </>
             : history.push('/loggin')
              } 
        </>
    )
}

export default ProfilAdmin
