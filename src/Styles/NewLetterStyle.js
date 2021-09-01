import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2px 4px',
      fontWeight: '900',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      marginTop: 50,
      borderRadius: 20
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 80,
      margin: 10,
    },
    itemContainer:{
       display: 'flex',
       justifyContent: 'space-around',
       
    },
    title:{
        marginTop: 50,
        fontWeight: 500,
        fontSize: 25,
        
        
    },
    buton:{
        marginTop: 50,
        height: 55
    },
    bnt:{
      '&:hover':{
        backgroundColor:'red'
      }
    }
  }));