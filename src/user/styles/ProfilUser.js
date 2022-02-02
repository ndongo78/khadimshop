import { makeStyles } from '@material-ui/core'

export const useStyles=makeStyles((theme)=>({

    root: {
        flexGrow: 1,
      },
    drawer:{
        height: 50,
        backgroundColor:'red'
    },
    toolbar: {
        marginTop: '100px',
        width:'100%'
    },
    container:{
        display: 'flex',
        padding: 15,
        marginBottom: 20,
        "@media only screen and (max-width : 480px)":{
            display:'flex',
            flexDirection: 'column',
        },
        
    },
  head:{
      display: 'flex',
      justifyContent: 'center',

  },
  headTitle:{
      margin: 20,
  },
  userImg:{
      borderRadius: 30,
      width: 66,
      height:  66,
      display: 'flex',
      justifyContent: 'center',
      marginTop: 15,
  },
  textDesc:{
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'space-around',
      margin: 15,
  },
  btnContainer:{
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center'
  },
  grid1:{
      padding: 15,
      '&:hover':{
          background:'transparent',
          cursor: 'pointer',
      },
    width: '100%',
    height:'100%',
  },
  links:{
      textDecoration:'none',
      color:'black'
    },
    arow:{
        '&:hover':{
          backgroundColor:'transparent'
        }
      }
}))