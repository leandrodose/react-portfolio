import React from 'react';
import Hobbie from '../components/Hobbie';
import { Grid,Typography } from '@material-ui/core';

const HobbieListContainer = ({datos}) => {
    const arrayToComponents = datos => (
        datos.map( dato => 
            <Grid item xs={6} md={6} lg={4} xl={3} key={dato} >
                   <Hobbie datos={dato}  />
            </Grid>)
    );
    
    return (
        <div >
            <Typography component={'span'} variant="body1"> 
                <Grid container spacing={2} >
                    {arrayToComponents(datos)}
                </Grid>
            </Typography>                            

        </div>
    );
};

export default HobbieListContainer;