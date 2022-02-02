import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers, getUserById, updateUserByAdmin } from '../redux/actions/ActionUser';
import { useParams,useHistory } from 'react-router'
import { Grid, Typography,Button,Container, MenuItem, TextField, Paper } from '@material-ui/core'
import { Form, Formik} from 'formik'
import * as Yup from "yup"
import TextInput from '../components/TextInput'
import {useStyles} from '../articles/styles/ArticleStyle'
import SelectInput from '../components/SelectInput'
import { ArrowBack } from '@material-ui/icons'

const UpdateClient = () => {
    const {id}=useParams()
    const dispatch = useDispatch()
    const {token,userToUpdate,user}=useSelector(state=>state.user)
    const classes=useStyles()
    const history=useHistory()
    console.log(userToUpdate);

    useEffect(() => {
        dispatch(getUserById(id,token))
    }, [dispatch,token,id])

    const validationSchema=Yup.object({
        categoryId: Yup.number().required('Required'),
         
      })


  return (
    <Grid>
        {
            user.length !==0 ?

       
    <Grid container>
    <Grid item className={classes.container} >
      <Button startIcon={<ArrowBack style={{fontSize: '30px',
      }}  />} size='medium' onClick={()=>history.push('/admin')} color='inherit' className={classes.retourIcon}  > Retour Profil </Button> 
    <Typography variant='h3' className={classes.top}>  <Paper>Ajouter une Catégorie</Paper> </Typography>
   
       <Formik 
          initialValues={
            userToUpdate ?
         {
          nom:userToUpdate.nom,
          prenom:userToUpdate.prenom,
          email:userToUpdate.email,
          addresse:userToUpdate.addresse,
          telephone:userToUpdate.telephone,
          role:userToUpdate.role,
        }
          : 
          {
            nom:'',
            prenom:'',
            email:'',
            addresse:'',
            telephone:'',
            role:'',
          }
          }
          onSubmit={(values,{resetForm})=>{
           dispatch(updateUserByAdmin(id,values,token))
          console.log(values);
          
          }}
        >
         {
         ({handleChange,handleBlur,handleSubmit,values,touched,errors,setFieldTouched,setFieldValue})=>(
          <Container maxWidth='md' >
        <Form noValidate autoComplete='off' className={classes.root}>
        <div>
         <TextInput 
          name='nom'
          label='nom'
          onChange={handleChange('nom')}
          onBlur={()=>setFieldTouched('nom')}
          value={values.nom}
         />
         </div>
         <div>
         <TextInput 
          name='prenom'
          label='prenom'
          onChange={handleChange('prenom')}
          onBlur={()=>setFieldTouched('prenom')}
          value={values.prenom}
          
           
         />
         </div>
         <div>
         <TextInput 
          name='email'
          label='Email'
          onChange={handleChange('email')}
          onBlur={()=>setFieldTouched('email')}
          value={values.email}
          type='email'
       
         />
         </div>
         <div>
         <TextInput 
          name='telephone'
          label='telephone'
          onChange={handleChange('telephone')}
          onBlur={()=>setFieldTouched('telephone')}
          value={values.telephone}
         />
         </div>
         <div>
         <TextInput 
          name='addresse'
          label='addresse'
          onChange={handleChange('addresse')}
          onBlur={()=>setFieldTouched('addresse')}
          value={values.addresse}
         />
         </div>
         <div>
         <TextInput 
          name='role'
          label='role'
          onChange={handleChange('role')}
          onBlur={()=>setFieldTouched('role')}
          value={values.role}
         />
         </div>
         
               <div className={classes.butonContainer}>
                <Button type='submit'   color='primary' className={classes.buton} variant='contained'>Submit</Button>
                <Button type='reset' className={classes.buton} variant='contained' color='secondary'>Annuler</Button>
              </div> 
         </Form>
         </Container>
         )
    
          }
        
       </Formik>
     
    </Grid>
    
</Grid>
            : history.push('/loggin')
 }
</Grid>
    );
};
export default UpdateClient;
