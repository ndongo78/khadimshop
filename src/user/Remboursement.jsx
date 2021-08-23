import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'

const Remboursement = () => {
    return (
        <Container style={{height:'50vh'}}>
            <Typography variant='h4' align='center' gutterBottom color='primary'>Mes remboursement</Typography>
            <Box component='div'>
                <Typography align='center' gutterBottom variant='body1' > Vous avez aucun remboursement </Typography>
            </Box>
        </Container>
    )
}

export default Remboursement
