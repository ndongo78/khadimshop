import { makeStyles } from "@material-ui/core";

export const useStyles=makeStyles((theme)=>({
    container:{
        backgroundColor: theme.palette.common.black,
        color:theme.palette.common.white,
        flexGrow: 1,
      },
      links:{
          textDecoration:'none',
          fontSize: 15,
          color:theme.palette.common.white,
          padding: 6,
          marginLeft: 110,
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
          
      }
}))