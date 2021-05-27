import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { FetchApis } from './useProductsApis';
import TextEllipsis from 'react-text-ellipsis';
import {Link} from 'react-router-dom';



const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    card: {
        marginBottom: 10,
    },
    paper: {
        height: 300,
        padding: "10px 20px 20px 10px !important",
        "@media (max-width: 568px)": {
            height: 350,
        },
    },
    control: {
        padding: theme.spacing(2),
    },
    image: {
        margin: 'auto',
        display: "flex",
        width: '50%',
        height: '50%',
        "@media (max-width: 568px)": {
            width: '90%',
            height: '45%',
        },
    },
    price: {
        color: "rgb(233, 124, 12)",
        fontSize: 20,
    },
    loading: {
        textAlign: 'center',
        margin: 'auto'
    },
    margin: {
        margin: theme.spacing(1),
        backgroundColor:"rgb(233, 124, 12)",
        color:'white',
        "&:hover":{
        backgroundColor:"rgb(233, 124, 12) !important",
            
        }
      },

}));

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(1);
    const [visible, setVisible] = useState(10);
    const classes = useStyles();
    const [products, loading] = FetchApis();
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };
    const loadMore = () =>{
        setVisible(preValue=> preValue+10);
    }
    return (
        <div>
            <Container>
                <h2>All Categories</h2>
                <Divider />
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12} >
                        <Grid container spacing={spacing}>
                            {loading && <p className={classes.loading}>Loading....</p>}
                            {products.slice(0,visible).map((product) => {
                                return (
                                    <Grid className={classes.card} key={product} item lg={3} md={3} sm={6} xs={6}>
                                    <Link className='link' to={`/products/${product.id}`}>
                                        <Paper  className={classes.paper}><img className={classes.image} src={product.image} alt="" />
                                            <p className={classes.price}>Rs. {product.price}</p>

                                            <div>
                                                <TextEllipsis
                                                    lines={3}
                                                    tag={'p'}
                                                    ellipsisChars={'...'}
                                                    tagClass={'className'}
                                                    debounceTimeoutOnResize={200}
                                                    useJsOnly={true}><p>{product.title}</p></TextEllipsis>
                                                <Rating
                                                    name="customized-empty"
                                                    defaultValue={3.5}
                                                    precision={0.5}
                                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                                />
                                            </div>

                                        </Paper>
                                    </Link>

                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                <Button variant="contained" size="large" onClick={loadMore} className={classes.margin}>
          LOAD MORE
        </Button>
            </Container>
        </div>
    );
}
