import React,{useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCategorie } from '../redux/actions/ActionCategorie'
import { Grid, Typography,Button,Container, MenuItem, TextField, Paper } from '@material-ui/core'
import { postArticles } from '../redux/actions/ActionArticle'
import { Form, Formik} from 'formik'
import * as Yup from "yup"
import TextInput from '../components/TextInput'
import {useStyles} from '../articles/styles/ArticleStyle'
import SelectInput from '../components/SelectInput'
import { ArrowBack } from '@material-ui/icons'
import {useHistory} from 'react-router-dom'




const PostArticle = () => {
  const {categories}=useSelector(state=>state.categorie)
  const {articles}=useSelector(state=>state.article)
  const {token} = useSelector(state => state.user)
   const dispatch=useDispatch()
    const classes=useStyles()
    let history=useHistory()
 
  useEffect(() => {
     dispatch(getCategorie())
  }, [dispatch])



  const validationSchema=Yup.object({
    categoryId: Yup.number().required('Required'),
     
  })





    return (
        <Grid>
            <Grid container>
            
            <Grid item className={classes.container} >
              <Button startIcon={<ArrowBack style={{fontSize: '30px',
              }}  />} size='medium' onClick={()=>history.push('/admin')} color='inherit' className={classes.retourIcon}  > Retour Profil </Button> 
            <Typography variant='h3' className={classes.top}>  <Paper>Ajouter une Catégorie</Paper> </Typography>
           
             
              
               <Formik 
                  initialValues={{
                    categoryId:'',
                    title:'',
                    description:'',
                    price:'',
                    image: '',
                    avis:''
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values,{resetForm})=>{
                    
                    const fd=new FormData()
                     fd.append('categoryId',values.categoryId)
                     fd.append('title',values.title)
                     fd.append('description',values.description) 
                    fd.append('image',values.image)
                    fd.append('price',values.price)
                    fd.append('avis',values.avis)
                   
                    dispatch(postArticles(fd,token))
                    //resetForm({})
                    
                  }}
                >
                 {
                 ({handleChange,handleBlur,handleSubmit,values,touched,errors,setFieldTouched,setFieldValue})=>(
                  <Container maxWidth='md' >
                <Form noValidate autoComplete='off' className={classes.root}>
                {
                   articles.map(item=> <Typography key={item.id} variant='h5' style={{color:'#91ff35',fontStyle:'italic'}} align='center'> {item.message} </Typography>)
               }
              <Typography style={{marginLeft: 10, fontStyle:'italic',opacity:'.5'}}>Sélectionner la Catégorie de l'article</Typography> 
              <SelectInput
                name='categoryId'
                
                > 
                                              
                  {
                      categories.map(item=>(
                          <MenuItem value={item.id} key={item.id}> { item.name } </MenuItem>
                      ))
                  }
                </SelectInput>
                <div>
                 <TextInput 
                  name='title'
                  label='Title'
                  onChange={handleChange('title')}
                  onBlur={()=>setFieldTouched('title')}
                  value={values.title}
               
                 />
                 </div>
                 <div>
                 <TextInput 
                  name='description'
                  label='Description'
                  onChange={handleChange('description')}
                  onBlur={()=>setFieldTouched('discription')}
                  value={values.description}
                  
                   
                 />
                 </div>
                 <div>
                 <TextInput 
                  name='price'
                  label='Prix'
                  onChange={handleChange('price')}
                  onBlur={()=>setFieldTouched('price')}
                  value={values.price}
               
                 />
                 </div>
                 <div>
                 <TextInput 
                  name='avis'
                  label="Note de l'article si existe compris 0/5"
                  onChange={handleChange('avis')}
                  onBlur={()=>setFieldTouched('avis')}
                  value={values.avis}
               
                    />
                    </div>
                 <div style={{display:'flex'}}>
                       <Typography style={{marginTop:20, fontWeight:'bold'}}>Image de l'article:</Typography>
                        <label > 
                           {/* <CloudUpload className={classes.upload} /> */}
                        <TextField
                        name='image'
                        type='file'
                        label='Image'
                        onChange={
                            (event)=>setFieldValue('image',event.target.files[0])
                        }
                        className={classes.files}
                       />
                       </label>
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
        
    </Grid>
    )
}

export default PostArticle
