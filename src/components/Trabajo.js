import React from 'react';
import { Box } from '@material-ui/core';
const Trabajo = ({datos}) => {
    

    
    return (
        <div>
            <Box  px={2} mt={1}>
                Empresa: {datos.empresa}
            </Box>
            <Box  px={2}>
                Puesto: {datos.puesto} 
            </Box>
            <Box  px={2}>
                Competencias: {datos.competencias} 
            </Box>
            <Box  px={2} >
                Periodo: {datos.desde} / {datos.hasta}
            </Box>
        </div>
    );
};

export default Trabajo;