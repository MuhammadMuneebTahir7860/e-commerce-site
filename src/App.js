import Header from './commonComponents/header/header';
import Navbar from './commonComponents/navbar/Navbar';
import './App.css';
import Homepage from './modules/homePage/homepage';
import Electronics from './modules/electronics/electronics';
import Jewelery from './modules/jewelery/jewelery';
import MensClothing from './modules/mensClothing/mensClothing';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './modules/about/about';
import Contact from './modules/contact/contact';
import Blog from './modules/blogs/blog';
import TermsConditions from './modules/termsConditions/termsConditions';
import PrivacyPolicy from './modules/privacyPolicy/privacyPolicy';
import DetailsPage from './modules/homePage/productsPage/productDetailsPage';
function App() {
  
return (
    <div>
      <Router>
      <Header />
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Homepage /> 
        </Route>
        <Route  path='/about'>
          <About /> 
        </Route>
        <Route  path='/contact'>
          <Contact /> 
        </Route>
        <Route  path='/blogs'>
          <Blog /> 
        </Route>
        <Route  path='/terms-conditions'>
          <TermsConditions /> 
        </Route>
        <Route  path='/privacy-policy'>
          <PrivacyPolicy /> 
        </Route>
        <Route  path='/electronics'>
          <Electronics /> 
        </Route>
        <Route  path='/jewelery'>
          <Jewelery /> 
        </Route>
        <Route  path='/mens-clothing'>
          <MensClothing /> 
        </Route>
        <Route  path='/products/:productId'>
          <DetailsPage /> 
        </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
