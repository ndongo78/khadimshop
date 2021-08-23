import {makeStyles} from '@material-ui/core'


export const useStyles=makeStyles((theme)=>({
    top: {
        fontWeight:'bold',
        fontStyle: 'italic',
        marginBottom: 30,
       "@media only screen and (max-width : 480px)":{
         fontSize: 26
       },
       textAlign:'center'
     },
     containerProduct:{
      display: 'flex',
      alignItems:'center',
      paddingBottom: 50,
       
     },
     iconButton:{
       //backgroundColor:'#ffebee',
       display: 'flex',
       justifyContent: 'space-around',
       borderRadius:20
     },
     productTitle:{
       padding:8,
       marginTop: 20,
     },
     btn:{
      backgroundColor: '#92c7f1',
      marginBottom: '1rem',
      borderRadius: '5rem',
      color: '#000',
      marginTop: '2rem',
      width: 200
     },
     price:{
       fontWeight: '900',
       fontSize: 15,
       margin: 8,
       
     },
     titre:{
       backgroundColor:'#e8eaf6',
       padding: 15,
       width:'90%',
       textAlign:"center",
       display: 'block',
       margin: 'auto',
       marginBottom: 50,
       
     },
     toolpit:{
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
     },
     buttonGroup:{
      "@media only screen and (max-width : 480px)":{
          display:'flex',
          flexDirection: 'column',
      },
  }
}))