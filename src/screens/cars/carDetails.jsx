import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { useRouter } from 'next/router';
// import Calendar from 'react-calendar';
import GET_CAR from '../../graphql/queries/getCarById.graphql';
import CarWrapper from './carWrapper';
// import Calendar from './Calendar';
import CarCalendar from './carCalendar';



const carDetails = () => { 
  const { query:{id} } = useRouter();
  const { data, loading } = useQuery(GET_CAR, {
    variables: { id },
  })
  console.log('data',data)
  
  const car = get(data, 'getCarById', [])
  console.log('car',car)
  if (loading) {
    return <p>Loading ................</p>
  }
  
  return (
	  <CarWrapper>
	 <div className='details'>
        <img className='photo' src='/static/Car red.png' alt='car' />
        <div className='info'>
          <p className='information'>Type: <span>{car.type}</span></p>
          <p className='information'>Etat: <span>{car.etat}</span></p>
          <p className='information'>Vinyl: <span>{car.vinyl}</span></p>
          <p className='information'>Asuurance année en cours: <span>{car.assurance}</span></p>
          <p className='information'>Matricule: <span>{car.matricule}</span></p>
          <p className='information'>startDate: <span>{car.startDate}</span></p>
          <p className='information'> Disponibilité: <span>Disponile</span></p>
        </div>
         {/* <Calendar className='calendar'/>  */}
        {/* <Calendar /> */}
         <CarCalendar /> 
      </div>   
    
    </CarWrapper>
  )
}

export default carDetails;
