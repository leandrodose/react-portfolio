import React from 'react';
import Educacion from '../components/Educacion';
import { Typography } from '@material-ui/core';

const EducacionListContainer = ({datos}) => {
    
    const arrayToComponents = datos => (
        datos.map( dato => <Educacion datos={dato} key={dato.titulo}/>)
    );
    return (
        <div>
            <Typography component={'span'} variant="body1">
                    {arrayToComponents(datos)}
            </Typography>
        </div>
    );
};

export default EducacionListContainer;