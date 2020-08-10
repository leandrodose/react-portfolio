import React from 'react';
import Trabajo from '../components/Trabajo';
import {Typography} from '@material-ui/core';

const TrabajoListContainer = ({datos}) => {
    
    const arrayToComponents = datos => (
        datos.map( dato => <Trabajo datos={dato} key={dato.empresa}/>)
    );
    return (
        <div>
            <Typography component={'span'} variant="body1">
                    {arrayToComponents(datos)}
            </Typography>
        </div>
    );
};

export default TrabajoListContainer;