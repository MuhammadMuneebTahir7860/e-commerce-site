import './Navbar.css';
import React from 'react';
import { AppBar, Hidden, Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Dropdown from './dropdown';
import {Link} from 'react-router-dom';


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default function Navbar(props){
    return(
      <Hidden smDown>
        <React.Fragment>
        <HideOnScroll {...props}>
          <div className='navSection'>
        <AppBar position='fixed' className='navBar'>
          <div className='navbarSection'>
                <Dropdown />
                
                <ul className='navList'>
                 <li><Link className='link' to='/'>Home</Link></li>
                  <li><Link className='link' to='about'>About</Link></li>
                  <li><Link className='link' to='/contact'>Contact Us</Link></li>
                  <li><Link className='link' to='/blogs'>Blogs</Link></li>
                  <li><Link className='link' to='/terms-conditions'>Terms</Link></li>
                  <li><Link className='link' to='/privacy-policy'>Privacy Policy</Link></li>
                </ul>
                </div>
        </AppBar>
        </div>
        </HideOnScroll>
        <Toolbar/>
        </React.Fragment>
        </Hidden>
    )
}