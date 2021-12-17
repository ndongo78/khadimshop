import React,{useState} from 'react'
import { Container, InputBase, Typography, Box, Button} from '@material-ui/core'
import { useHistory } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import { resetPassword } from '../redux/actions/ActionUser'

const ResetPassword = () => {
    const history=useHistory()
    const dispatch=useDispatch()
    const {registerSuccess}=useSelector(state=>state.user)
    const [email, setemail] = useState('')
    
 const handleSubmit=(e)=>{
     e.preventDefault()
     dispatch(resetPassword({email}))
     //setemail('')
   
 }



    return (
        <Container maxWidth='xs' style={{height:'70vh'}}>
            <Typography variant='h6' style={{color:'green'}} align='center'> {registerSuccess ? registerSuccess.success :null  } </Typography>
            <Typography variant='h6' style={{color:'green'}} align='center'> {registerSuccess ? registerSuccess.error:null } </Typography>
        
                 <form onSubmit={handleSubmit}>
                <Box  style={{backgroundColor:'inherit'}}>
                <Typography variant='h6' align='center' gutterBottom>Veillez saisir votre email</Typography>
                <InputBase type='email' value={email} onChange={(e)=>setemail(e.target.value)} required style={{border:'0.7px solid',width:'100%',padding:10,margin:5,fontSize:20,fontWeight:'800'}} placeholder='exemple@yahoo.fr' />
                </Box>
                <Box display='flex' justifyContent='center' padding={2}>
                    <Button variant='contained' type='submit' color='primary' style={{margin:8}} >envoyer</Button>
                    <Button variant='contained' color='secondary' onClick={()=>history.push('/')} style={{margin:8}} >annuler</Button>
                </Box>
                </form>
            
            
        </Container>
    )
}

export default ResetPassword
