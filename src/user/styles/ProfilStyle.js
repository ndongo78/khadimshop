import { makeStyles } from '@material-ui/core'

export const useStyles=makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
    tete:{
        marginRight: 20,
        fontStyle:'italic',
       
    },
    user:{
        fontSize:'14rem',
        backgroundColor:'#90caf9',
        borderRadius:'2rem',
        marginLeft: 20
    },
    titre: {
        height: 50
    },
    toolbar: {
        marginTop: '100px',
        width:'100%'
    },
    paper:{
        texAlign: 'center',
        padding:10,
        fontWeight:'bold',
    },
    
    info:{
        display:'flex',
        padding: 10
    },
    icons:{
        fontSize: '2rem',
        marginRight: "1rem"
    },
    buton:{
        backgroundColor: '#92c7f1',
        marginBottom: '1rem',
        borderRadius: '5rem',
        color: 'black',
        marginTop: '2rem',
        width: "80%",
        margin: 10,
        
      },
      buttinContainer: {
          display: 'flex',
          flexDirection:'column',
      },
      buton1:{
        backgroundColor: '#92c7f1',
        marginBottom: '1rem',
        borderRadius: '5rem',
        color: 'black',
        marginTop: '0rem',
        width: 150,
        marginLeft: '2.5rem'
      },
      icon:{
          fontSize: 20,
          color:'#fff'
      },
    
      
}))