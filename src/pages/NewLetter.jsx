import React from 'react'
import { Grid,IconButton, Box, InputAdornment , Typography,   } from '@material-ui/core'
import  { useStyles } from '../Styles/NewLetterStyle'
import TextInput from '../components/TextInput'
import { Form, Formik } from 'formik'


const NewLetter = () => {
    const classes=useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={12} md={6} className={classes.itemContainer}>
             <Box style={{margin:80}}>
              <Typography variant='h6' className={classes.title}> S'abonner aux newLetters Pour recevoir les bons plans </Typography>   
             </Box>
             </Grid> 
             <Grid item xs={12} sm={12} md={6}>
              <Formik>
                    <Form style={{display: 'flex',
                    height:65,margin:80}}>
                    <TextInput 
                    name='email'
                    label=''
                    placeholder='shop@yahoo.fr'
                    onChange={()=>{}}
                    className={classes.input}
                    variant='filled'
                    InputProps={{
                    endAdornment: (
                            <InputAdornment position="end">
                            <IconButton className={classes.btn}>
                            S'abonner
                            </IconButton>
                            
                            </InputAdornment>
                            ),
                            }}
                    />
                    {/* <Button type='submit' variant='contained' className={classes.buton} >S'abonner</Button> */}
                    </Form>
                    </Formik>
             </Grid>
            
            
            </Grid>
    )
}

export default NewLetter
