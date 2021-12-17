import {useState} from 'react'
import { useSelector } from 'react-redux'
import { Grid, Typography,Button,Container } from '@material-ui/core'
import { postCategory } from '../redux/actions/ActionCategorie'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import TextInput from '../components/TextInput'
import {useStyles} from '../Styles/RegisterStyle'
import { ArrowBack } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const PostCategory = () => {
  const categorie=useSelector(state=>state.categorie)
  const {token}=useSelector(state=>state.user)
    const classes=useStyles()
    const [error] = useState()
    const dispatch=useDispatch()
   
  const history=useHistory()

      const validationSchema=Yup.object({
          name: Yup.string().required('Required'),
         
      })

     const handleSubmit=(values,{resetForm})=>{
          dispatch(postCategory(values,token))
          // resetForm({})
     }


      
  

    return (
        <Grid>
        <Grid container>
        <Grid item className={classes.container} >
        <Button startIcon={<ArrowBack style={{fontSize: '30px',
              }}  />} size='medium' onClick={()=>history.push('/admin')} color='inherit' className={classes.retourIcon}  > Retour Profil </Button> 
         <Container maxWidth='md' >
          <Typography variant='h3' className={classes.top}>Ajouter une Catégorie</Typography>
           
           <Formik 
              initialValues={{name:''}}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
           >
            <Form noValidate autoComplete='off' className={classes.root} >
             {
                   categorie.map(item=><Typography key={item.id} variant='h5' style={{color:'#91ff35',fontStyle:'italic'}} align='center'> {item.message} </Typography>)
               }
            <div>
             <TextInput 
              name='name'
              label='Nom de la Catégorie'
             />
             {
                error && error.name ? <Typography className={classes.erreurInput}> {error.name} </Typography>: null
              }
             </div>
             
              <div className={classes.butonContainer}>
                <Button  type='submit'  color='primary' className={classes.buton} variant='contained'>Submit</Button>
                <Button type='reset' className={classes.buton} variant='contained' color='secondary'>Annuler</Button>
              </div>
            </Form>
           </Formik>
         </Container>
        </Grid>
        
    </Grid>
        
    </Grid>
    )
}

export default PostCategory
