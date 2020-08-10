import React from 'react';
import { Box } from '@material-ui/core';
const Educacion = ({datos}) => {
    return (
        <div>
            <Box  px={2} mt={1}   >
                Título: {datos.titulo}
            </Box>
            <Box  px={2}>
                Establecimiento: {datos.establecimiento} 
            </Box>
            <Box  px={2} >
                Periodo: {datos.desde} / {datos.hasta}
            </Box>

        </div>
    );
};

export default Educacion;