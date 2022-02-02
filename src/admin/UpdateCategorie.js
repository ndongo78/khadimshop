import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams,useHistory } from 'react-router'
import { Grid, Typography,Button,Container, MenuItem, TextField, Paper } from '@material-ui/core'
import { Form, Formik} from 'formik'
import * as Yup from "yup"
import TextInput from '../components/TextInput'
import {useStyles} from '../articles/styles/ArticleStyle'
import SelectInput from '../components/SelectInput'
import { ArrowBack } from '@material-ui/icons'
import { getCategoryById, updateCategory } from '../redux/actions/ActionCategorie';

const UpdateCategorie = () => {
    const {id}=useParams()
    const dispatch = useDispatch()
    const {token,user}=useSelector(state=>state.user)
    const {categorieToUpdate}=useSelector(state=>state.categorie)
    const classes=useStyles()
    const history=useHistory()
    console.log(categorieToUpdate);

    useEffect(() => {
        dispatch(getCategoryById(id,token))
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
            categorieToUpdate ?
         {
          name:categorieToUpdate.name,
          
        }
          : 
          {
            name:'',
            
          }
          }
          onSubmit={(values,{resetForm})=>{
           dispatch(updateCategory(id,values,token))
           history.push('/categories')
          
          
          }}
        >
         {
         ({handleChange,handleBlur,handleSubmit,values,touched,errors,setFieldTouched,setFieldValue})=>(
          <Container maxWidth='md' >
        <Form noValidate autoComplete='off' className={classes.root}>
        <div>
         <TextInput 
          name='name'
          label='name'
          onChange={handleChange('name')}
          onBlur={()=>setFieldTouched('name')}
          value={values.name}
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
export default UpdateCategorie;
