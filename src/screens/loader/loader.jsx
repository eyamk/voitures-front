import React from 'react';
import LoaderWrapper from './loaderWrapper';
import Router from 'next/router';



const loader = () =>(
   <LoaderWrapper>
      <div className='display'>
  <div className='part1'>
     <img  className='img1'src ='static/Login.png'/>
     <img  className="image" src='static/voiture.png'/>
  </div>
  <div className='part2'>
  <div class="bouncing-loader"> 
  <p>LODING</p> 
  <div></div>
  <div></div>
  <div></div>
  <div></div>
 
</div>
<img className='arrow' src='static/blue-arrow.png' onClick={()=>Router.push('/accueil')}/>
  </div>
  </div> 
  </LoaderWrapper>
)
   ;
export default loader;