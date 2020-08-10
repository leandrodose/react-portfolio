import React from 'react';
import Idioma from '../components/Idioma';
import {Typography} from '@material-ui/core';

const IdiomaListContainer = ({datos}) => {
    const arrayToComponents = datos => (
        datos.map( dato => <Idioma datos={dato} key={dato.idioma} />)
    );
    return (
        <div>
            
            <Typography component={'span'} variant="body1">
                    {arrayToComponents(datos)}
            </Typography>
        </div>
    );
};

export default IdiomaListContainer;