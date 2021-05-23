import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './dropdown.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '250px',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}
export default function Dropdown() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const categories=[
        {
          title:'Electronics',
          icon:<img src="https://img.icons8.com/color/35/000000/tv.png"/>,
          link:'/electronics',
        },
        {
          title:'Jewelery',
          icon:<img src="https://img.icons8.com/color/35/000000/jewelry.png"/>,
          link:'/jewelery',
        },
        {
          title:"Men's Clothing",
          icon:<img src="https://img.icons8.com/color/35/000000/t-shirt.png"/>,
          link:'/mens-clothing',
        },
        {
          title:"Women's Clothing",
          icon:<img src="https://img.icons8.com/color/35/000000/womens-blouse.png"/>,
          link:'/womens-clothing',
        }
      ]; 
    return (
            <div className='dropDown'>
                <div className='allCat'>
                    <p id='heading'>All Categories</p>
                    <ExpandMoreIcon id='downIcon' />
                    <div className='menu'>
                        <List component="nav" className={classes.root} aria-label="contacts">
                            {
                                categories.map((item)=>{
                                    return(
                                        <div>
                                    <Link className='link' to={item.link}>
                                        <ListItem button>
                                <ListItemIcon>
                                   {item.icon}
                                </ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItem>
                            </Link>
                            <Divider />
                            </div>
                                    )
                                })
                            }
                        </List>
                    </div>
                </div>

            </div>
    )
}