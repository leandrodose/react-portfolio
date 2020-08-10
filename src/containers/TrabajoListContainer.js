import React from 'react';
import Trabajo from '../components/Trabajo';

const TrabajoListContainer = ({datos}) => {
    
    const arrayToComponents = datos => (
        datos.map( dato => <Trabajo datos={dato} key={dato.empresa}/>)
    );
    return (
        <div>
            {arrayToComponents(datos)}
        </div>
    );
};

export default TrabajoListContainer;