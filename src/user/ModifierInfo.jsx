import React from 'react'
import { Box, Container,List,ListItem,ListItemIcon,ListItemText,CssBaseline,Typography, IconButton, 
    Button,Modal,Backdrop,Fade, Grid } from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import { updateUser } from '../redux/actions/ActionUser'
import {useStyles}  from '../Styles/ComponentsStyle'
import { AiOutlineArrowLeft, AiOutlineEdit, AiOutlineGlobal, AiOutlineHome, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import TextInput from '../components/TextInput'
import { useHistory } from 'react-router'

const ModifierInfo = () => {
    const {user,token}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const classes=useStyles()
    const history=useHistory()
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
 
    const validationSchema=Yup.object({
        nom: Yup.string().required("Required")
        .max(15,"Longueur de nom no auth"),
        prenom: Yup.string().required('Required'),
        email: Yup.string().required('Required').email('invalid email'),
        telephone: Yup.string().required('Required').min(8,'invalid phone number')
        .matches(/^[0-9]*$/,'invalid phone number'),
        addresse:Yup.string().required('Required'),
        pays:Yup.string().required('Required')
    })

    console.log(user);



    return (
        <>
        <IconButton className={classes.arow} onClick={()=>history.push('/profil')}>
            <AiOutlineArrowLeft size='3rem' />
            <Box component='span' >Mon profil</Box>
        </IconButton>
        <CssBaseline />
        <Typography variant='h4' color='primary' gutterBottom align='center'>Mes informations</Typography>
        <Container maxWidth='sm' >
            {
                user.length !== 0 ?
                <>
                    {
               
               user?.map(item=>(
                <List className={classes.root} component='nav' key={item.id}>
                <ListItem button>
                <ListItemIcon>
                    <AiOutlineUser size='3rem' />
                </ListItemIcon>
                <ListItemText style={{marginLeft: 20,fontWeight: 800,}}>
                    Nom  :   {item.nom  ? item.nom :''}
                </ListItemText>
                 </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <AiOutlineUser size='3rem' />
                    </ListItemIcon>
                    <ListItemText style={{marginLeft: 20,fontWeight: 800,}}>
                        Prénom  :   {item.prenom  ? item.prenom :''}
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <AiOutlineMail size='3rem' />
                    </ListItemIcon>
                    <ListItemText style={{marginLeft: 20,fontWeight: 800,}}>
                        Email  :   { item.email ? item.email :''}
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <AiOutlinePhone size='3rem' />
                    </ListItemIcon>
                    <ListItemText style={{marginLeft: 20,fontWeight: 800,}}>
                        Téléphone  :   { item.telephone ? item.telephone :''}
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <AiOutlineHome size='3rem' />
                    </ListItemIcon>
                    <ListItemText style={{marginLeft: 20,fontWeight: 800,}}>
                        Addresse  :    { item.addresse ? item.addresse :''}
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <AiOutlineGlobal size='3rem' />
                    </ListItemIcon>
                    <ListItemText style={{marginLeft: 20,fontWeight: 800,}}>
                        Pays  :    { item.pays ? item.pays :''}
                    </ListItemText>
                </ListItem>
                </List>
               ))
           }
                </>
                : history.push('/loggin')
            }
           
           <Button
            variant='contained'
            color='primary'
            endIcon={<AiOutlineEdit />}
            style={{padding:10,margin: 20,}}
            onClick={handleOpen}
             >
             Modifiers mes informations
            </Button>
            {/* //modal */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
        <Fade in={open}>
          <Grid className={classes.paper1}>
            <Typography variant='h5' color='primary' align='center' gutterBottom id="transition-modal-title">Modifier vos informations</Typography>
           
            {
             user.length !==0 ?
             user.map(item=>(
             <Formik 
             key={item.id}
              initialValues={
                user.length !==0 ?
                { nom:item.nom,
                 prenom:item.prenom,
                 email:item.email,
                 telephone:item.telephone,
                 pays: item.pays,
                 addresse:item.addresse
                }
                : { nom:'',
                    prenom:"",
                    email:'',
                    password:'',
                    confirm_password:'',
                    telephone:'',
                    pays: '',
                    addresse:''
                   }
               } 
               validationSchema={validationSchema}
               onSubmit={(values)=>{
                   const id=item.id
                   dispatch(updateUser(
                       id,values,token
                   ))
                   setOpen(false)
               }}

               >
                 {
                    ({handleChange,handleBlur,handleSubmit,values,touched,errors,setFieldTouched})=>(
                       <Form autoComplete='off' style={{width: 500}}> 
                       <Grid style={{margin:15}}>
                         <TextInput  
                           name='nom'
                           label='Nom'
                           onChange={handleChange('nom')}
                           onBlur={()=>setFieldTouched('nom')}
                           value={values.nom}
                         />  
                       </Grid>
                        <Grid style={{margin:15}}>
                           <TextInput 
                            name='prenom'
                            label='Prénom'
                            onChange={handleChange('prenom')}
                            onBlur={()=>setFieldTouched('prenom')}
                            value={values.prenom}
                            /> 
                        </Grid>
                        <Grid style={{margin:15}}>
                        <TextInput 
                            name='email'
                            label='email'
                            type='email'
                            onChange={handleChange('email')}
                            onBlur={()=>setFieldTouched('email')}
                            value={values.email}
                            />
                        </Grid>
                       <Grid style={{margin:15}}>
                       <TextInput 
                        name='telephone'
                        label='Téléphone'
                        onChange={handleChange('telephone')}
                        onBlur={()=>setFieldTouched('telephone')}
                        value={values.telephone}
                        />
                       </Grid>
                       <Grid style={{margin:15}}>
                       <TextInput 
                        name='addresse'
                        label='Adresse'
                        multiline
                        maxRows={4}
                        onChange={handleChange('addresse')}
                        onBlur={()=>setFieldTouched('addresse')}
                        value={values.addresse}
                        />
                       </Grid>
                       <Grid style={{margin:15}}>
                       <TextInput 
                        name='pays'
                        label='pays'
                        multiline
                        maxRows={4}
                        onChange={handleChange('pays')}
                        onBlur={()=>setFieldTouched('pays')}
                        value={values.pays}
                        />
                       </Grid>
                       <div className={classes.butonContainer}>
                        <Button type='submit' color='primary' className={classes.buton} variant='contained'>Sauvegarder</Button>
                        <Button onClick={()=>setOpen(false)} className={classes.buton} variant='contained' color='secondary'>Annuler</Button>
                       </div>
                        </Form>   
                    )
                    }
             </Formik>
             ))
             : history.push('/loggin')
            }
          </Grid>
        </Fade>
      </Modal>
        </Container>
        </>
    )
}

export default ModifierInfo
