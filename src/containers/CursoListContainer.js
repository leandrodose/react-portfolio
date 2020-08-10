import React from 'react';
import Curso from '../components/Curso';
import {Typography} from '@material-ui/core';

const CursoListContainer = ({datos}) => {
    
    const arrayToComponents = datos => (
        datos.map( dato => {
            if (dato.certificado !=="Informal") {
                return <Curso datos={dato} key={dato.certificado} />    
            } else return null
        })
    );
    return (
        <div>
            <Typography component={'span'} variant="body1">
                    {arrayToComponents(datos)}
            </Typography>
        </div>
    );
};

export default CursoListContainer;