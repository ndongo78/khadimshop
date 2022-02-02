import {Table,TableCell,TableHead,TableBody,TableContainer,TableRow,Grid,  CssBaseline, Container,Paper,Button} from '@material-ui/core';
import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAllUsers,deleteUserByAdmin,updateUserByAdmin } from '../redux/actions/ActionUser';
import { Email, HomeWork, Person, PhoneAndroid, EditOutlined,Clear,  Delete } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';
import { deleteCategory, getCategorie, updateCategory } from '../redux/actions/ActionCategorie';

const Categories = () => {
    const dispatch = useDispatch()
    const {user,token,allUsers}=useSelector(state=>state.user)
    const {categories}=useSelector(state=>state.categorie)
    const history = useHistory()
    const colums=[
        {id:'Nom', label:'Nom du categorie',align: 'right'},
        {id:'actions', label:'Actions',align: 'right'}
    ]


    useEffect(() => {
        dispatch(getCategorie())
    }, [dispatch])

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
                              categories?.map((item,i)=>(
                                 
                                    <TableRow key={i} >
                                      <TableCell style={{textAlign:'center'}}> {item.name} </TableCell>
                                      <TableCell align='right' >
                                        <Button variant='contained' color='primary' endIcon={<EditOutlined />} style={{margin:10}} onClick={()=>history.push(`/categorie/${item.id}`)}>Modifier</Button>
                                        <Button variant='contained' endIcon={<Delete />} color='secondary' onClick={()=>dispatch(deleteCategory(item.id,token))}>Delete</Button>  
                                      </TableCell>
                                  </TableRow>
                                    
                              ))
                              
                           }
                         
                           
                       </TableBody>
                     </Table>
                 </TableContainer>
                
             </Paper>

    </Container>
  )
};

export default Categories;
