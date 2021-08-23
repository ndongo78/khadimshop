import { makeStyles } from '@material-ui/core'
export const useStyles=makeStyles((theme)=>({
    container:{
        display: 'flex',
        padding:20
      },
    detailCarousel:{
        marginTop: '10%',
        
    },
    descriptionCarousel:{
        flexWrap:'wrap',
        width:'80%',
        fontWeight: '900',
        fontSize: 16,
    },
    btn:{
        backgroundColor: '#92c7f1',
        marginBottom: '1rem',
        borderRadius: '5rem',
        color: 'black',
        marginTop: '2rem',
        width: 150
    },
    price:{
        width:160,
        textAlign:'center',
        padding:10,
        fontSize: 15,
        fontWeight:'900',
        margin:15,
        color:'#2196f3'
    },
    containerDetail:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        
    }
}))