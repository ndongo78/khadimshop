import {Table,TableCell,TableHead,TableBody,TableContainer,TableRow,Grid,  CssBaseline, Container,Paper,Button} from '@material-ui/core';
import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAllUsers,deleteUserByAdmin,updateUserByAdmin } from '../redux/actions/ActionUser';
import { Email, HomeWork, Person, PhoneAndroid, EditOutlined,Clear,  Delete } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';

const Clients = () => {
    const dispatch = useDispatch()
    const {user,token,allUsers}=useSelector(state=>state.user)
    const history = useHistory()
    const colums=[
        {id:'Nom', label:'Nom',align: 'right'},
        {id:'Prenom', label:'Prenom',align: 'right'},
        {id:'Email', label:'Email',align: 'right'},
        {id:'Telephone', label:'Telephone',align: 'right'},
        {id:'Addresse', label:'Addresse',align: 'right'},
        {id:'Role', label:'Role',align: 'right'},
        {id:'actions', label:'Actions',align: 'right'}
    ]


    useEffect(() => {
        dispatch(getAllUsers(token))
    }, [dispatch,token,allUsers])

  return (
    <Container maxWidth='md'>
        <CssBaseline />
         <Paper>
                 <TableContainer>
                     <Table  
                     stickyHeader
                     aria-label='Produits '
                     >
                         <TableHead>
                             <TableRow>
                             {colums.map(column => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{textAlign:'center'}}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                             </TableRow>
                           
                         </TableHead>
                       <TableBody>
                           { 
                              allUsers?.map((item,i)=>(
                                  <>
                                  {
                                      user[0].id === item.id ? null
                                        :(
                                    <TableRow key={i} >
                                      <TableCell style={{textAlign:'center'}}> {item.prenom} </TableCell>
                                      <TableCell align='right' style={{textAlign:'center'}}> {item.nom} </TableCell>
                                      <TableCell align='right' style={{textAlign:'center'}}> {item.email} </TableCell>
                                      <TableCell align='right' style={{width:300,textAlign:'center'}}> {item.telephone} </TableCell>
                                      <TableCell align='right' style={{textAlign:'center'}} > {item.addresse} </TableCell>
                                      <TableCell align='right' style={{textAlign:'center'}} > {item.role} </TableCell>
                                      <TableCell align='right' >
                                        <Button variant='contained' color='primary' endIcon={<EditOutlined />} style={{margin:10}} onClick={()=>history.push(`/updateclient/${item.id}`)}>Modifier</Button>
                                        <Button variant='contained' endIcon={<Delete />} color='secondary' onClick={()=>dispatch(deleteUserByAdmin(item.id,token))}>Delete</Button>  
                                      </TableCell>
                                  </TableRow>
                                        )
                                       
                                  }
                                 
                                  </>
                              ))
                              
                           }
                         
                           
                       </TableBody>
                     </Table>
                 </TableContainer>
                
             </Paper>

    </Container>
  )
};

export default Clients;
