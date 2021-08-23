import { Grid, Typography,ButtonGroup,Button, CssBaseline } from '@material-ui/core'
import {useState} from 'react'
import CarouselProduct  from '../articles/CarouselProduct'
import Products from '../articles/Products'
import { useStyles } from '../Styles/HomeStyle'
import AllProducts from '../articles/AllProducts'
import TendanceProduct from '../articles/TendanceProduct'
import PopularArticle from '../articles/PopularArticle'
import NotedArticle from '../articles/MieuxNoted'
import LivraisonArticle from './LivraisonArticle'
import NewLetter from './NewLetter'

const Home=()=> {
    const [check, setcheck] = useState(true)
    const [tendance, settendance] = useState(false)
    const [populaire, setpopulaire] = useState(false)
    const [note, setnote] = useState(false)
    const classes=useStyles()


     const handleCheck=()=>{
        setcheck(true)
        settendance(false)
        setpopulaire(false)
        setnote(false)
     }
     const handleTendance=()=>{
        setcheck(false)
        settendance(true)
        setpopulaire(false)
        setnote(false)
     }
     const handlePopulaire=()=>{
        setcheck(false)
        settendance(false)
        setpopulaire(true)
        setnote(false)
     }
     const handleNote=()=>{
        setcheck(false)
        settendance(false)
        setpopulaire(false)
        setnote(true)
     }

    return (
        <Grid>
            <CssBaseline />
            <Grid className={classes.container}>
              <CarouselProduct />  
            </Grid>
            <Grid className={classes.container}>
                <Products />
            </Grid>
            <Grid className={classes.container}>
            <Typography variant='h3' align='center' gutterBottom color='primary' className={classes.titre}>
            <ButtonGroup size="large" aria-label="small outlined button group" className={classes.buttonGroup}>
            <Button style={{backgroundColor: check ? 'blanchedalmond' : null}} className={classes.button}  onClick={handleCheck}>Tous les Produits</Button>
            <Button style={{backgroundColor: tendance ? 'blanchedalmond' : null}} className={classes.button} onClick={handleTendance}>Produits Tendances</Button>
            <Button style={{backgroundColor: populaire ? 'blanchedalmond' : null}} className={classes.button} onClick={handlePopulaire}>Produits  populaire</Button>
            <Button style={{backgroundColor: note ? 'blanchedalmond' : null}} className={classes.button} onClick={handleNote}>Produits  mieux notés</Button>
            </ButtonGroup>
            </Typography>
            </Grid >
            {check && <AllProducts />} {tendance && <TendanceProduct />} {populaire && <PopularArticle />} {note && <NotedArticle />}
            <Grid >
                <LivraisonArticle /> <NewLetter />
            </Grid>
        </Grid>
    )
}

export default Home
