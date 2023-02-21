import * as React from 'react';
import { Box, Typography, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import useStyles from "../styles/styles";

export default function SimplePaper() {
    const classes = useStyles();
    return (
        <Box className={classes.heroServicesBox}>
            <Typography variant="h2" fontWeight={700} className={classes.servicesTitle} >
                Nos services
            </Typography>
            <Grid container >
                <Grid item xs={6} sm={3} md={2} className={classes.servicesGrid} >

                        <Box className={classes.servicesDetails}>
                            <img className={classes.heroServicesImg}
                                    src="https://img.freepik.com/photos-gratuite/livre-fond-carton-vert_1150-3837.jpg?w=1380&t=st=1676841182~exp=1676841782~hmac=f448e58f3aeb6ed1bfe0bba5eab66a1d2ba9ff997d4b090430747b243d0f531c"
                                    alt="services"
                            />
                            <div className={classes.servicesDiv}>
                                <Typography variant={'h5'} fontWeight={700}>
                                    lorem ipsum
                                </Typography>
                                <Typography variant={'p'}>
                                    Lizards are a widespread group of squamate reptiles.
                                </Typography>
                             </div>
                        </Box>
                        <Box className={classes.servicesDetails}>
                            <img className={classes.heroServicesImg}
                                 src="https://img.freepik.com/photos-gratuite/livre-fond-carton-vert_1150-3837.jpg?w=1380&t=st=1676841182~exp=1676841782~hmac=f448e58f3aeb6ed1bfe0bba5eab66a1d2ba9ff997d4b090430747b243d0f531c"
                                 alt="services"
                            />
                            <div className={classes.servicesDiv}>
                                <Typography variant={'h5'} fontWeight={700}>
                                    lorem ipsum
                                </Typography>
                                <Typography variant={'p'}>
                                    Lizards are a widespread group of squamate reptiles.
                                </Typography>
                            </div>
                        </Box>


                </Grid>

                <Grid item xs={6} >
                    hey
                </Grid>
            </Grid>



        </Box>
    );
}