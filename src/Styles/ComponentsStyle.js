
    import {makeStyles} from '@material-ui/core'


    export const useStyles=makeStyles((theme)=>({
        container:{
            display:'flex',
            justifyContent: 'space-around',
            alignItems:'center'
        },
        containerItem:{
          display:'flex',
          justifyContent: 'space-around',
          alignItems:'center'
        },
        paper:{
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            marginTop: 50,
            alignItems:'center',
            padding:20,
        },
        icons:{
            borderRadius:20,
            backgroundColor:'#fff',
            padding: 10,
        },
        divider:{
            width: '95%',
            border:'1px solid',
            borderTop: 'none'
        },
        //userInfo
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
          },
          //modal
          modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          paper1: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
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
            margin: '2rem',
          },
          arow:{
            '&:hover':{
              backgroundColor:'transparent'
            }
          }
    }))