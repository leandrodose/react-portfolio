import React from 'react';
import Conocimiento from '../components/Conocimiento';
import { Grid } from '@material-ui/core';

const ConocimientoListContainer = ({datos}) => {
    const arrayToComponents = datos => (
        datos.map( dato => 
            <Grid item xs={6} md={6} lg={4} xl={3} key={dato} >
                <Conocimiento datos={dato}  />
            </Grid>)
    );

    return (
        <div >
            <Grid container spacing={2} >
                {arrayToComponents(datos)}
            </Grid>
        </div>
    );
};

export default ConocimientoListContainer;