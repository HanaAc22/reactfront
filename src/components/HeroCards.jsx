import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Grid, Box} from '@mui/material';
import useStyles from '../styles/styles';


export default function ImgMediaCard() {
    const classes = useStyles();
    return (
        <Box className={classes.heroCardsBox}>
        <Grid container spacing={3} justify='center'>
            <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/photos-gratuite/vue-face-journee-education-table-bloc-notes_23-2148721270.jpg?w=996&t=st=1676837477~exp=1676838077~hmac=9fb55821c32c37e5850054f021619da1a4ea40f7f8edfb244bd35454762f8e32"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Liste des Cours
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/photos-gratuite/vue-face-journee-education-table-bloc-notes_23-2148721270.jpg?w=996&t=st=1676837477~exp=1676838077~hmac=9fb55821c32c37e5850054f021619da1a4ea40f7f8edfb244bd35454762f8e32"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Envenimements Associatifs
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/photos-gratuite/vue-face-journee-education-table-bloc-notes_23-2148721270.jpg?w=996&t=st=1676837477~exp=1676838077~hmac=9fb55821c32c37e5850054f021619da1a4ea40f7f8edfb244bd35454762f8e32"
                            alt="green  n"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Echanger avec un parent  ou un enseignant
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                </Card>
                </Grid>
            </Grid>
        </Box>
    );

}