import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import CalendarWrapper from './CalendarWrapper';

import CalendarMonthWrapper from './CalendarMonthWrapper';
import GET_CAR from '../../graphql/queries/getCarById.graphql';

const months = [
  'Janvier',
  'Fevrier',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

export const filterYearEvents = year => ({ startDate, endDate }) => {
  const startDateYear = moment(startDate).year();
  const endDateYear = moment(endDate).year();

  return year === startDateYear || year === endDateYear;
};

const currentMonth = moment().month();
const currentYear = moment().year();
const Calendar = ({ className }) => {
  const { data } = useQuery(GET_CAR);
 

  return (
    <CalendarWrapper className={className}>
      <div className="calendar__title">Disponibility{currentYear}</div>
      <div className="calendar__months">
        {months.map((month, index) => (
          <CalendarMonthWrapper
            key={month}
            disabled={currentMonth > index}
            className="calendar__months-month-item"
            current={currentMonth === index}
          >
            {month}
          </CalendarMonthWrapper>
        ))}
      </div>
      {/* <div className="calendar__events">
         {events.map(({ id, startDate, endDate, type}) => (
          <Event
            id={id}
            key={id}
            className="calendar__events-event-item"
            startDate={startDate}
            endDate={endDate}
            type={type}
          />
        ))} 
      </div> */}
    </CalendarWrapper>
  );
};

Calendar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Calendar;
