import {makeStyles} from '@material-ui/core'


export const useStyles=makeStyles((theme)=>({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
    },
    butonContainer:{
      display:'flex',
      justifyContent: 'space-around'
    },
    buton:{
      backgroundColor: '#92c7f1',
      marginBottom: '1rem',
      borderRadius: '5rem',
      color: 'black',
      marginTop: '2rem',
      width: 200,
      margin: '2rem' 
      
    },
    top: {
         fontWeight:'bold',
         fontStyle: 'italic',
         marginBottom: 30,
        "@media only screen and (max-width : 480px)":{
          fontSize: 26
        }
      },
    container:{
        display: 'block',
        margin: 'auto',
    },
    erreurInput:{
      color:'red',
      fontStyle: 'italic',
      textAlign:'center',
      padding: 30
  },
  input:{
    width:'100%',
    fontWeight:'bold',
    fontStyle:'italic',
    fontSize: 26
  },
  inputArray:{
    width: 110
  },
  upload:{
    fontSize: "4rem",
    marginLeft: 30,
    color:'#607d8b',
    marginTop:'.5rem',
    cursor:'pointer'
    
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  retourIcon:{
    position: 'absolute',
    left:0,
    fontWeight: '900',
    fontSize:15,
    fontStyle:'italic'
},
contain:{
  marginLeft: 130,
  backgroundColor: '#fafafa'
},
avatar:{
    backgroundColor:'#2196f3',
    marginLeft: 25,
},
midle:{
  backgroundColor:'#eeee',
  padding:40,
  marginBottom: 35,
  borderRadius: 15
}
}))
