import { makeStyles, } from '@material-ui/core'
export const useStyles=makeStyles((theme)=>({
    AppBar:{
        backgroundColor: '#2979ff',
        padding: 15,
        zIndex: theme.zIndex.drawer + 1,
        
    },
    Toolbar:{
        display:'flex',
        justifyContent:'space-between',
        "@media only screen and (max-width : 480px)":{
            display:'flex',
            flexDirection: 'column',
        },
    },
     linkContainer:{
         margin: 10,
         textDecoration:'none',
         fontWeight:'bold',
         fontSize: 20,
         color:theme.palette.common.white
     },
     logo:{
         width: 50,
         backgroundColor: '#fff',
         borderRadius:'50%',
         "@media only screen and (max-width : 480px)":{
            display:'none'
        },
     },
     logoMobile:{
        "@media only screen and (max-width : 480px)":{
          width: 50,
        backgroundColor: '#fff',
        borderRadius:'50%',
        marginRight: 10
       },
     },
     search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: (theme.palette.common.white, 0.25),
        },
  
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right:0
  },
  inputRoot: {
    color: theme.palette.common.white,
    border:"1px solid",
    borderRadius: 10
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    }, 
    
 },
 menuButton:{
    [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      "@media only screen and (max-width : 480px)":{
          display: 'flex',
          justifyContent:'space-between',
          marginBottom: 10,
     },
    },
    btn:{
        float:'left'
    },
    top: {
      marginBottom: 100,
      fontSize:20
    },
    toolbar: theme.mixins.toolbar,
    item:{
      color:theme.palette.common.white
    }
}))
