import { makeStyles } from "@material-ui/core";

export const useStyles=makeStyles((theme)=>({
    container:{
        backgroundColor: theme.palette.common.black,
        color:theme.palette.common.white,
      },
      links:{
          textDecoration:'none',
          fontSize: 15,
          color:theme.palette.common.white,
          padding: 6,
          display: 'flex',
      },
      linkContainer:{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          fontWeight: 500,
      },
      titre:{
          margin: 20,
      },
      containerIcon:{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: 15,
          
      },
      containerLink:{
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }
}))