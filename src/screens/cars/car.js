import React from 'react';
import { useRouter } from 'next/router';
import CarDetails from './carDetails';

const Car = () => {
  const { query } = useRouter();
  console.log('query',query)
  return (
    <div>
      <CarDetails id={id} />
    </div>
  );
};
export default Car;