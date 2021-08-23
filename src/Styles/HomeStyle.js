import {makeStyles} from '@material-ui/core'


export const useStyles=makeStyles((theme)=>({
    container:{
        paddingBottom: 50
    },
     titre:{
       backgroundColor:'#e8eaf6',
       padding: 15,
       width:'90%',
       textAlign:"center",
       display: 'block',
       margin: 'auto',
     },
     buttonGroup:{
        "@media only screen and (max-width : 480px)":{
            display:'flex',
            flexDirection: 'column',
        },
    },
    button:{
        width: 300,
        "@media only screen and (max-width : 480px)":{
            display:'flex',
            flexDirection: 'column',
        },
    }
}))