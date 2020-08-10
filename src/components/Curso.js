import React from 'react';
import { Box } from '@material-ui/core';
const Curso = ({datos}) => {
    return (
        <div  >
            <Box  px={2} mt={1} >
                Certificado: {datos.certificado}
            </Box>
            <Box  px={2}>
                Establecimiento: {datos.establecimiento} 
            </Box>
            <Box  px={2} >
                Duración: {datos.duracion}
            </Box>
            <Box  px={2} >
                Periodo: {datos.desde} / {datos.hasta}
            </Box>
        </div>
    );
};

export default Curso;