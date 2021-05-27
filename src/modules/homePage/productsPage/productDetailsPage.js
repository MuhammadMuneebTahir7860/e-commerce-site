import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '50px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: 20
    },
}));



function DetailsPage() {
    const { productId } = useParams();
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    const [details, setDetails] = useState({});
    const productDetails = async () => {
        try {
            setLoading(true);
            let getProductsDetails = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            let productsDetails = await getProductsDetails.data;
            setDetails(productsDetails);
            console.log(productsDetails);
        } catch (error) {
            console.log("Error Message", error.message);
        }
        finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        if (productId && productId !== "") productDetails();
    }, [productId]);
    return (
        <div>
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item lg={8} md={8} sm={12} xs={12}>
                            <Paper className={classes.paper}><img src={details.image} width="50%" height="50%" alt="" /></Paper>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Paper className={classes.paper}><h1>Rs {details.price}</h1>
                                <p>{details.title}</p>
                                <Rating
                                    name="customized-empty"
                                    defaultValue={3.5}
                                    precision={0.5}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                />
                            </Paper>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}><p>{details.description}</p>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default DetailsPage;