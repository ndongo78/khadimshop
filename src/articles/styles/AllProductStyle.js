
    import {makeStyles} from '@material-ui/core'


    export const useStyles=makeStyles((theme)=>({
        containerProduct:{
            display: 'flex',
            alignItems:'center',
            paddingBottom: 50,
              
       },
       productTitle:{
         padding:8,
         marginTop: 20,
       },
       btn:{
        backgroundColor: '#92c7f1',
        marginBottom: '1rem',
        borderRadius: '5rem',
        color: 'black',
        marginTop: '2rem',
        width: 200,
        "&:hover":{
            backgroundColor: '#2196f3',
            color: 'white'
        }
       },
       
       
    }))
    