import React,{useState} from 'react'
import TextInput from '../components/TextInput'
import { useStyles } from '../Styles/RegisterStyle'
import { Container, Typography ,Grid,Button, CssBaseline} from '@material-ui/core'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import {useDispatch,useSelector} from 'react-redux'

import emailjs from 'emailjs-com'

const Contact = () => {

    const {registetError}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const classes=useStyles()
    const [error, seterror] = useState('')
  


    const validationSchema=Yup.object({
        message: Yup.string().required("Champs ne pas étre envoyé vide")
        .max(500,"Longueur de nom no auth"),
        email: Yup.string().required('Required').email('invalid email'),
       
    })

        
    const sendEmail=(e)=> {
        
    
        emailjs.sendForm('gmail', 'service_rw1aq8p', e.target, 'user_mLtVxqZrxDDrx1E6nh1tY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }



    return (
        <Container maxWidth='md' style={{height:'100vh',marginTop:50}}>
             <CssBaseline />
            <Typography variant='h4' color='textPrimary' align='center'>Nous contacter</Typography>
            <Grid container>
            <Grid item sm={12} xs={12} md={2}></Grid>
            <Grid item xs={12} sm={12} md={4}>
             <Container maxWidth='md' style={{display: 'flex',
             alignItems:'center'
             }}>
            <Formik 
              
                initialValues={
                 { 
                  email:'',
                  message:'',
                  sujet:''
                  }
                }
                onSubmit={sendEmail}
               validationSchema={validationSchema}
               >
                
                {
                    ({handleChange,handleBlur,handleSubmit,values,touched,errors,setFieldTouched,Formik})=>(
                      <Form noValidate autoComplete='off' className={classes.root} style={{display: 'flex',
                      justifyContent: 'center',
                      flexDirection:'column', alignItems:'center'}}>
                 
                 <div style={{width: 500,marginTop: 20 }}>
                 <Typography variant='body1'>Votre email de contact</Typography>
                 <TextInput 
                  name='email'
                  label='Votre  email'
                  type='email'
                  onChange={handleChange('email')}
                  onBlur={()=>setFieldTouched('email')}
                  value={values.email}
                 />
                 </div>
                 <div style={{width: 500,marginTop: 20 }}>
                 <Typography variant='body1'>Object de votre demande</Typography>
                 <TextInput 
                  name='sujet'
                  label='Object'
                  type='text'
                  onChange={handleChange('sujet')}
                  onBlur={()=>setFieldTouched('sujet')}
                  value={values.sujet}
                 />
                 </div>
                 <div style={{marginTop: 15,marginLeft: 15,
                  }}>
                     <Typography variant='body1'>Votre message </Typography>
                     <textarea cols='62' rows='10' placeholder='votre message' 
                     name='message'
                     onChange={handleChange('message')}
                     onBlur={handleBlur}
                     value={values.message}
                    /> 
                     {touched.message && errors.message ? (
                        <Typography variant='h6' align='center' color='secondary'>{errors.message}</Typography>
                    ) : null}
                     <Typography variant='body2' color='secondary'> {error} </Typography>
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
            
        </Container>
    )
}

export default Contact




