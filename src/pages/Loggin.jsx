import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import { Button, Container, Grid, Typography, CssBaseline, Avatar, IconButton } from '@material-ui/core'
import { useStyles } from '../Styles/LoginStyle'
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import TextInput from '../components/TextInput'
import { loginUser } from '../redux/actions/ActionUser';
import { LockOutlined,Visibility,VisibilityOff } from '@material-ui/icons';

const Loggin=()=> {
     const {role,logginError}=useSelector(state=>state.user)
     const [showPassword, setshowPassword] = useState(false)
     const dispatch=useDispatch()
      const classes=useStyles()
     let history = useHistory();

     const handleSubmit=(values)=>{
      dispatch( loginUser(values))
     }
   
  
    const validationSchema=Yup.object({
        email: Yup.string().required('Required').email('invalid email'),
        password: Yup.string().required('Required').min(8, "Le mot de pass require min 8 charactéres"),
    })
    
    return (
      <>
       <CssBaseline />
           {
             role ==='admin' && history.push('/admin')
           }
           {
             role ==='client' && history.push('/profil')
           }
            <Grid container>
            <Grid item className={classes.container} sm={12} xs={12} >
              <Container maxWidth='xs'className={classes.midle}>
               <div className={classes.contain}>
              <Avatar className={classes.avatar}>
                <LockOutlined />
              </Avatar>
              <Typography variant='h6' className={classes.top} color='primary'>Se connecter</Typography>
               </div>
               <Formik 
                  initialValues={{
                    email:'',
                    password:'',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                 >
                  {
                    ({handleChange,setFieldTouched,values})=>(
                      <Form noValidate autoComplete='off' className={classes.root} >
                        <Typography variant='body1' align='center' color='secondary'> {logginError} </Typography>
                       <div>
                     <TextInput 
                      name='email'
                      label='Email'
                      type='email'
                      onChange={handleChange('email')}
                      onBlur={()=>setFieldTouched('email')}
                      value={values.email}
                     />
                    {/* {
                        error && error.email ? <Typography className={classes.erreurInput}> {error.email} </Typography>: null
                      } */}
                    </div>
                     <div style={{position: 'relative',
                     }}>
                    <TextInput 
                      name='password'
                      label='Mot de pass'
                      type={showPassword ? 'text' : 'password'}
                      onChange={handleChange('password')}
                      onBlur={()=>setFieldTouched('password')}
                      value={values.password}
                    />
                    <IconButton style={{position: 'absolute',
                    right:-4,top: 12}} onClick={()=>setshowPassword(!showPassword)}>
                      {
                        showPassword ? <Visibility /> : <VisibilityOff />
                      }
                      
                    </IconButton>
                    {/* {
                        error && error.password ? <Typography className={classes.erreurInput}> {error.password } </Typography>: null
                      } */}
                  </div>
                    
                  <div className={classes.butonContainer}>
                    <Button  type='submit'  color='primary' className={classes.buton}  variant='contained'>Se connecter</Button>
                    {/* <Button type='reset' className={classes.buton} variant='contained' color='secondary'>Annuler</Button> */}
                  </div> 
                   </Form>
                    
                    )
                  }
               </Formik>
                <Grid style={{display: 'flex',
                justifyContent: 'space-between',
                textDecoration:'none',
                fontWeight: 'bold',
                

                }}>
                  <Link to='/resetPassword'>Mot de pass oublié</Link>
                  <Link to='/register'>Pas encore inscrit ? S'inscrire </Link>
                </Grid>
               </Container>
            </Grid>
        </Grid>
        </>
    )
}

export default Loggin
