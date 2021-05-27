import React from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles , useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import Hidden from '@material-ui/core/Hidden';
import logo from '../../assets/logo.png';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar:{
    boxShadow:'none !important'
  },
  grow: {
    flexGrow: 1,
    marginBottom:-15,
  },
  logo:{
    width: 150,
    marginTop:"10px !important",
},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:'#eeeeee',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0,2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"rgb(233, 124, 12)",
    width: 20,
    height: 50,
    color: "white",
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2, 1, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    backgroundColor:'#eeeeee'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    height:'100px !important',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      <MenuItem onClick={handleMenuClose}>SignUp</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <p>Login/SignUp</p>
      </MenuItem>
    </Menu>
  );
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navList=[
    {
    title:'Home',
    icon:<img src="https://img.icons8.com/color/35/000000/home-page.png"/>,
    link:'/',
  },
  {
    title:'About',
    icon:<img src="https://img.icons8.com/color/35/000000/about.png"/>,
    link:'/about',
  },
  {
    title:'Contact Us',
    icon:<img src="https://img.icons8.com/color/35/000000/add-contact-to-company.png"/>,
    link:'/contact',
  },
  {
    title:'Blogs',
    icon:<img src="https://img.icons8.com/color/35/000000/bebo.png"/>,
    link:'/blogs',
  },
  {
    title:'Terms & Conditions',
    icon:<img src="https://img.icons8.com/color/35/000000/terms-and-conditions.png"/>,
    link:'/terms-conditions',
  },
  {
    title:'Privacy Policy',
    icon:<img src="https://img.icons8.com/color/35/000000/policy-document.png"/>,
    link:'/privacy-policy',
  },
]
  const[categories,setCategories]=useState([
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
  ]); 
  
  return (
    <div className={classes.grow}>
         <React.Fragment>
      <AppBar className={classes.appBar} color='secondry' position="fixed">
      <Container>
        <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          </Hidden>
          <Typography className={classes.title}  noWrap>
            <img src={logo} alt="" className={classes.logo} />
          </Typography>
      <Grid item lg={1}></Grid>
          <div className={classes.search}>
          <div  className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />            
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new carts" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
    </Container>
      </AppBar>
      <Toolbar/>
      </React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <Typography  noWrap>
            <img src={logo} alt="" className={classes.logo} />
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {categories.map((item) => (
            <Link className='link' to={item.link}>
            <ListItem onClick={handleDrawerClose} button key={item}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {navList.map((item) => (
            <Link className='link' to={item.link}>
            <ListItem onClick={handleDrawerClose} button key={item}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText  primary={item.title} />
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider/>
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
