import React from 'react';
import Educacion from '../components/Educacion';

const EducacionListContainer = ({datos}) => {
    
    const arrayToComponents = datos => (
        datos.map( dato => <Educacion datos={dato} key={dato.titulo}/>)
    );
    return (
        <div>
            {arrayToComponents(datos)}
        </div>
    );
};

export default EducacionListContainer;