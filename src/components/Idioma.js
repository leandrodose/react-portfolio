import React from 'react';
import { Box } from '@material-ui/core';
const Idioma = ({datos}) => {
    
    return (
        <div>
            <Box  px={2} mt={1}>
                {datos.idioma} / Nivel: {datos.nivel_real}
            </Box>
        </div>
    );
};

export default Idioma;