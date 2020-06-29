/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Router from 'next/router';
import CarWrapper from './carWrapper';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
        
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

const carItem = ({item}) =>{
    
  console.log('item hhhhh', item);
  const [color, setColor] = useState(false);
  
  return(
    <CarWrapper>    
      <div className='item'>
        <img className='heart'
        //  className={color ? ('red-heart') : ('heart')} onClick={()=> setColor(true)} 
          src={color? ('static/red-heart.png'):('static/heart.png')} onClick={()=> setColor(true)} onDoubleClick={()=> setColor(false)}
          alt=''/>

        <img className='heart1' src='static/heart1.png'/>
        <img src={item.photos} className='image'/>
        <Accordion >
          <p>Etat : {item.etat} </p>
          <p>anneeAquisation :{item.anneeAquisation}</p>
          <p>Asurance : {item.assurance}</p>
          <p>Matricule : {item.matricule}</p>
          <button className='buttonDetail' onClick={() => Router.push(`/carDetails/${item.id}`)} >More Details</button>	 
        </Accordion>
      </div>
    </CarWrapper>
  )
  ;}
export default carItem;