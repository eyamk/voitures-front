import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_CARS from '../../graphql/queries/getCars.graphql';
import CarItem from './carItem';
import CarWrapper from './carWrapper';

const cars = () =>{
  const { loading, data } = useQuery(GET_CARS, {
    refetchQueries: [{ query: GET_CARS }],
  })
  if (loading) return <p>Loading ...</p>
  const { getCars } = data
  return(
    <CarWrapper>
      <div className='list'>
        {getCars.map((el, index) => (
          <CarItem item={el} key={index} />
        ))}
      </div>
    </CarWrapper>
  )
  ;}
export default cars;