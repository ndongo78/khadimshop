import {  Typography,makeStyles, Select } from '@material-ui/core'
import { useField } from 'formik'


const useStyles=makeStyles((theme)=>({
    erreurInput:{
        color:'red',
        fontStyle: 'italic',
        textAlign:'center'
    }
}))

     
const  SelectInput=({ name, ...props })=>{

    const classes=useStyles()

    const [field,meta]=useField(name)
    
    const configTextFil={
        ...field,
        ...props,
        fullWidth:true,
        variant: 'outlined'
    }

     if(meta && meta.touched && meta.error){
         configTextFil.error=true;
        //  configTextFil.helperText =meta.error;
     }
    
    return (
        <>
           <Select {...configTextFil} />
           {
               meta.touched && meta.error ? <Typography className= {classes.erreurInput}> {meta.error} </Typography> : null
           }
       </>
    )
  }

  export default SelectInput;