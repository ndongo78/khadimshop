import { Typography } from '@material-ui/core';
import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getCategorie } from '../redux/actions/ActionCategorie';


const Accessoires = () => {
    const dispatch = useDispatch()
    const {user,token,allUsers}=useSelector(state=>state.user)
    const {categories}=useSelector(state=>state.categorie)

    useEffect(() => {
        dispatch(getCategorie())
    }, [dispatch])


  return(
      <div>
      <Typography>Accessoires</Typography>
      </div>
  )
};

export default Accessoires;
