import './footer.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: 'white',
    },
}));
export default function Footer() {
    const classes = useStyles();

    const footerData = [
        {
            heading: 'Popular Categories',
            list1: 'Cars',
            list2: 'Flats for rent',
            list3: 'Jobs',
            list4: 'Mobile Phones',
        },
        {
            heading: 'Trending Searches',
            list1: 'Bikes',
            list2: 'Watches',
            list3: 'Books',
            list4: 'Dogs',
        },
        {
            heading: 'Popular Categories',
            list1: 'Cars',
            list2: 'Flats for rent',
            list3: 'Jobs',
            list4: 'Mobile Phones',
        },
        {
            heading: 'ABOUT US',
            list1: 'Terms & Conditions',
            list2: 'Blogs',
            list3: 'Privacy',
            list4: 'Return Policy',
        },
    ]

    return (
        <>
        <div className='footerSection'>
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            footerData.map((text) => {
                                return (
                                    <Grid md={3} sm={6} xs={6} lg={3}>
                                        <ul className='footerLists'>
                                            <li>
                                                <h4>
                                                    {text.heading}
                                                </h4>
                                            </li>
                                            <div className='footerText'>
                                                <li>{text.list1}</li>
                                                <li>{text.list2}</li>
                                                <li>{text.list3}</li>
                                                <li>{text.list4}</li>
                                            </div>
                                        </ul>
                                    </Grid>
                                )
                            })

                        }
                    </Grid>
                </div>

                <div className='followSection'>
                    <h1>
                        FOLLOW US
                        </h1>
                    <div className='follwerImages'>
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                        <img src="https://img.icons8.com/color/48/000000/instagram-new.png"/>
                        <img src="https://img.icons8.com/color/48/000000/twitter-circled.png"/>
                        <img src="https://img.icons8.com/color/48/000000/youtube-play.png"/>
                    </div>
                </div>
            </Container>
        </div>
        <div className='copyrightSection'>
                <p><span>&#169;</span> AMS 2021</p>
            </div>
        </>
    )
}