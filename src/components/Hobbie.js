import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box } from '@material-ui/core';
const Hobbie  = ({datos}) => {
    return (
        <Card variant="outlined" m={2} key={datos}  >
            <CardContent >
                <Box display="flex" justifyContent="center"  >
                    {datos}
                </Box>
            </CardContent>
        </Card>
    );
};

export default Hobbie;