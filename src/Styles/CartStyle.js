import { makeStyles } from "@material-ui/core";

export const useStyle=makeStyles((theme)=>({
    container1:{
        height:'100vh',
        paddingBottom:20,
        marginTop:50
    },
    container:{
        paddingBottom:20,
       "@media only screen and (max-width : 480px)":{
           paddingBottom: 20,
           marginTop:50
    },
    },
    boxs:{
        display: 'flex',
        padding: 15,
        borderRadius: 10,
        "@media only screen and (max-width : 480px)":{
            display:'flex',
            flexDirection: 'column',
        },
    },
    title:{
        margin: 15,
        fontWeight: 500,
        
    },
    qty:{
        padding:10,
        fontWeight: 900,
        fontSize:20
    },
    add:{
        backgroundColor:'#3d5afe',
        color:'#fff',
        margin: 10,
        '&:hover':{
            backgroundColor:'#3d5afe',
        }
    },
    moins:{
        backgroundColor:'#ff1744',
        color:'#fff',
        margin: 10,
        '&:hover':{
            backgroundColor:'#ff1744',
        }
    },
    delete:{
        marginLeft: 50,
    },
    deleteIcon:{
        fontSize: 50,
        
    },
    header:{
        margin:15,
        padding: 10,
    },
    btn:{
        backgroundColor: '#92c7f1',
        marginBottom: '1rem',
        borderRadius: '5rem',
        color: '#000',
        marginTop: '2rem',
        width: 200,
        marginLeft: 20,
       },
       recap:{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: 20,
        padding:25,
        fontWeight: 'bold',
        fontSize: 30,
       },
       recapBt:{
           padding:20
       }
}))