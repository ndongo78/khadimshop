import React from 'react'
import { Container, Typography,Button, Grid } from '@material-ui/core'
import { useStyles } from '../Styles/RegisterStyle'
import TextInput from '../components/TextInput'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import { useParams } from 'react-router'
import { useSelector,useDispatch } from 'react-redux'
import { changerPassword } from '../redux/actions/ActionUser'



const Recupe = ({props}) => {
  const classes=useStyles()
  const {registerSuccess}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const {id} =useParams()

    const validationSchema=Yup.object({
        password: Yup.string().required('Required').min(8, "Le mot de pass require min 8 charactéres"),
        confirm_password: Yup.string().required("Required").oneOf([Yup.ref('password'),"Mot de pass ne corresponde pas"])
        
    })
   


    return (
        <Grid style={{height:'70vh'}}>
            <Typography variant='h4' align='center' gutterBottom color='primary'> Veillez saisir votre nouveau mot de pass</Typography>
        <Container maxWidth='xs'>
        <Typography variant='h6' style={{color:'green'}} align='center'> {registerSuccess ? registerSuccess.success :null  } </Typography>
            <Typography variant='h6' style={{color:'green'}} align='center'> {registerSuccess ? registerSuccess.error:null } </Typography>
            <Formik 
                initialValues={
                 {
                  password:'',
                  confirm_password:'',
                 }
                }
                onSubmit={(values,{resetForm})=>{
                  dispatch(changerPassword(values,id))
                   resetForm({})
                   console.log(values)
               }}
               validationSchema={validationSchema}
               >
                
                {
                    ({handleChange,handleBlur,handleSubmit,values,touched,errors,setFieldTouched})=>(
                      <Form noValidate autoComplete='off' className={classes.root}>
                 <div>
                 <TextInput 
                  name='password'
                  label='Mot de pass'
                  type='password'
                  onChange={handleChange('password')}
                  onBlur={()=>setFieldTouched('paasword')}
                  value={values.password}
                 />
                 
                 </div>
                 <div>
                 <TextInput 
                  name='confirm_password'
                  label='Confirmer mot de pass'
                  type='password'
                  onChange={handleChange('confirm_password')}
                  onBlur={()=>setFieldTouched('confirm_password')}
                  value={values.confirm_password}
                 />
                 
                 </div>
                
                 <div className={classes.butonContainer}>
                    <Button type='submit' color='primary' className={classes.buton} variant='contained'>Submit</Button>
                    <Button type='reset' className={classes.buton} variant='contained' color='secondary'>Annuler</Button>
                  </div>
                 </Form>
                    )
                }
                
               </Formik>
        </Container>
        </Grid>
    )
}

export default Recupe
