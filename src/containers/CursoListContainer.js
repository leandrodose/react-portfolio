import React from 'react';
import Curso from '../components/Curso';
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
            {arrayToComponents(datos)}
        </div>
    );
};

export default CursoListContainer;