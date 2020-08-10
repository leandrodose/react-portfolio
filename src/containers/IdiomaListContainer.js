import React from 'react';
import Idioma from '../components/Idioma';

const IdiomaListContainer = ({datos}) => {
    
    const arrayToComponents = datos => (
        datos.map( dato => <Idioma datos={dato} key={dato.idioma} />)
    );
    return (
        <div>
            {arrayToComponents(datos)}
        </div>
    );
};

export default IdiomaListContainer;