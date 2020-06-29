/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Router from 'next/router';
import AcceuilWrapper from './accueilWrapper';
// import Header from '../../shared/layout/header/header';
const acceuil = () =>{
return(
  <AcceuilWrapper>
     <div className='header'>
      <a href='#' >Services</a>
      <a href='#'>Contact</a>
      <a href='#'>Qui sommes nous ?</a>
       <button className='signInButton'  onClick={() => Router.push('/register')}>S'enregistrer</button> 
    </div> 
    {/* <Header /> */}
    <div className='body'>
      
      <div className='display'>
        <div className="part1">
          <div className='title'>Pourquoi nous ?</div>
          <p className="paragraph">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat.
          </p>
           
          <button className='loginButton' type="submit" onClick={() => Router.push('/login')}>Login</button>
          
        </div>
        <div className="part2">
          {/* <div >
        <h5>Services</h5>
        <h5>Contact</h5>
        <h5>Qui sommes nous ?</h5>
        <button>S'enregistrer</button>
        </div> */}
          <img  className='image' src='static/car.png'/>
        </div>
      </div>
    </div>
  </AcceuilWrapper>
);}
export default acceuil;
