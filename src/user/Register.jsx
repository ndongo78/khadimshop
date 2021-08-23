import React, {useState} from 'react'
import { Button, Container, Grid, Typography,FormControl
  ,InputLabel,
  MenuItem,Select } from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import { postUser } from '../redux/actions/ActionUser'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import TextInput from '../components/TextInput'
import { useStyles } from '../Styles/RegisterStyle'




function Register() {
    const {registetError}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const classes=useStyles()
    const [error] = useState()


    const validationSchema=Yup.object({
        nom: Yup.string().required("Required")
        .max(15,"Longueur de nom no auth"),
        prenom: Yup.string().required('Required'),
        email: Yup.string().required('Required').email('invalid email'),
        password: Yup.string().required('Required').min(8, "Le mot de pass require min 8 charactéres"),
        confirm_password: Yup.string().required("Required"),
        telephone:Yup.number().required("Required"),
        addresse:Yup.string().required('Required'),
        pays:Yup.string().required('Required')
    })
   
   

    return (
        <>
        <Grid container>
            <Grid item  className={classes.container}>
             <Container maxWidth='md' >
              <Typography variant='h2' className={classes.top}>Créer un compte</Typography>
              {/* {
                registerSuccess.success && <Typography variant='h6' style={{color:'green',}} align='center' gutterBottom > {registerSuccess.success} </Typography>

              } */}
              <Typography variant='h6' color='error' align='center' gutterBottom > {registetError} </Typography>
               <Formik 
                initialValues={
                 { nom:'',
                  prenom:'',
                  email:'',
                  password:'',
                  confirm_password:'',
                  telephone:'',
                  pays:'',
                  addresse:''}
                }
                onSubmit={(values,{resetForm})=>{
                  dispatch(postUser(values))
                   resetForm({})
               }}
               validationSchema={validationSchema}
               >
                
                {
                    ({handleChange,handleBlur,handleSubmit,values,touched,errors,setFieldTouched})=>(
                      <Form noValidate autoComplete='off' className={classes.root}>
                    <div>
                 <TextInput 
                  name='nom'
                  label='Nom'
                  onChange={handleChange('nom')}
                  onBlur={()=>setFieldTouched('nom')}
                  value={values.nom}
                  />
                 {
                   error && error.name ? <Typography className={classes.erreurInput}> {error.name} </Typography>: null
                 }
                 </div>
                 <div>
                 <TextInput 
                  name='prenom'
                  label='Prénom'
                  onChange={handleChange('prenom')}
                  onBlur={()=>setFieldTouched('prenom')}
                  value={values.prenom}
                 />
                 {
                    error && error.prenom ? <Typography className={classes.erreurInput}> {error.prenom} </Typography>: null
                  }
                 </div>
                 <div>
                 <TextInput 
                  name='email'
                  label='email'
                  type='email'
                  onChange={handleChange('email')}
                  onBlur={()=>setFieldTouched('email')}
                  value={values.email}
                 />
                 {
                    error && error.email ? <Typography className={classes.erreurInput}> {error.email} </Typography>: null
                  }
                 </div>
                 <div>
                 <TextInput 
                  name='password'
                  label='Mot de pass'
                  type='password'
                  onChange={handleChange('password')}
                  onBlur={()=>setFieldTouched('paasword')}
                  value={values.password}
                 />
                 {
                    error && error.password ? <Typography className={classes.erreurInput}> {error.password } </Typography>: null
                  }
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
                 {
                    error && error.confirm_password ? <Typography className={classes.erreurInput}> {error.confirm_password } </Typography>: null
                  }
                 </div>
                 <div>
                 <TextInput 
                  name='telephone'
                  label='Téléphone'
                  onChange={handleChange('telephone')}
                  onBlur={()=>setFieldTouched('telephone')}
                  value={values.telephone}
                 />
                 {
                    error && error.telephone ? <Typography className={classes.erreurInput}> {error.name} </Typography>: null
                  }
                 </div>
                <FormControl variant="outlined" className={classes.formControl} style={{width:"100%",marginLeft: 6,
                }}>
                  <InputLabel id="demo-simple-select-outlined-label">Les pays disponible pour la livraison International</InputLabel>
                  <Select
                    value={values.pays}
                    onChange={handleChange('pays')}
                    onBlur={()=>setFieldTouched('pays')}
                   >
                    <MenuItem value="">
                    </MenuItem>
                    <MenuItem value="Cote d'ivoire">Cote d'ivoire</MenuItem>
                    <MenuItem value="Gambie">Gambie</MenuItem>
                    <MenuItem value="Guinée Conakry">Guinée Conakry</MenuItem>
                    <MenuItem value="France">France</MenuItem>
                    <MenuItem value='Mali'>Mali</MenuItem>
                    <MenuItem value="Mauritanie">Mauritanie</MenuItem>
                  </Select>
                </FormControl>
                 <div>
                 <TextInput 
                  name='addresse'
                  label='Adresse'
                  multiline
                  maxRows={4}
                  onChange={handleChange('addresse')}
                  onBlur={()=>setFieldTouched('addresse')}
                  value={values.addresse}
                 />
                 {
                    error && error.addresse ? <Typography className= {classes.erreurInput}> {error.name} </Typography>: null
                  }
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
            
        </Grid>
        </>
    )
}

export default Register
