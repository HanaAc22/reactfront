import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import useStyles from '../styles/styles';

export default function Hero(){
    const classes = useStyles();

    return (
        <Box className={classes.heroBox}>
            <Grid container spacing={6} className={classes.gridContainer}>
                <Grid item xs={12} md={7}>
                    <Typography variant="h3" fontWeight={700} className={classes.title} >
                        Some random quote
                    </Typography>
                    <Typography variant="h6" className={classes.subtitle}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries, but also the
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ width: '200px', fontSize: '16px', backgroundColor: '#52a99d'   }}
                    >
                        GET TO KNOW US
                    </Button>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img src={"https://img.freepik.com/photos-premium/livres-scolaires-papeterie-bois-fond-tableau-ecrit-formules-equations-mathematiques_255766-11653.jpg"} alt="My Team" className={classes.largeImage} />
                </Grid>
            </Grid>
        </Box>
    );
};

