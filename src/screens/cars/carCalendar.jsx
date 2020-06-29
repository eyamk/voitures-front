import React, {useState} from 'react'; 
import dateFns from 'date-fns';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import { format } from 'date-fns';
import { startOfWeek } from 'date-fns/startOfWeek';
import moment from 'moment';
import { addDays } from 'date-fns';
import { startOfMonth } from 'date-fns';
import { endOfMonth } from 'date-fns';
import isSameMonth from 'date-fns/isSameMonth';
import isSameDay from 'date-fns/isSameDay';
import parse from 'date-fns/parse';
import CarCalendarWrapper from './carCalendarWrapper';
/* import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import GET_CAR from '../../graphql/queries/getCarById.graphql';
import { useRouter } from 'next/router'; */

const Calendar = () => {
const [currentDate, setCurrentDate] = useState(new Date());
const [selectedDate, setSelectedDate] = useState(new Date());
/* const { query:{id} } = useRouter();
const { data, loading } = useQuery(GET_CAR, {
  variables: { id },
})
const car = get(data, 'getCarById', [])
if (loading) {
  return <p>Loading ................</p>
} */
const header = () => {
const dateFormat = "MMMM yyyy";
return (
    <CarCalendarWrapper >
   <div className="header row flex-middle">
      <div className="column col-start">
         <div className="icon" onClick={prevMonth}>
         previous
         </div>
      </div>
      <div className="column col-center">
         <span>{format(currentDate, dateFormat)}</span>
      </div>
      <div className="column col-end">
         <div className="icon" onClick={nextMonth}>
         next
         </div>
      </div>
   </div>
   </CarCalendarWrapper>
   );
};
const daysOfWeek = () => {
const dateFormat = 'dd';
//  const days = ['sun','mon','tue','wed','thu','fri','sat'];
 const days =[];

 //let startDate = dateFns.startOfWeek(currentDate);
 let startDate = moment().startOf('week').toDate(currentDate);
    for (let i = 0; i < startDate; i++) {
      days.push(
         <div className="column col-center" key={i}>
         {format(addDays(startDate, i), dateFormat)}
         </div>
      );
   } 
return <CarCalendarWrapper ><div className="days row ">{days}</div></CarCalendarWrapper>   
{/* <CarCalendarWrapper >{days.map((day)=><div className="days row ">{day}</div>)};</CarCalendarWrapper>  */}
};

const cells = () => {
    const monthStart = moment().startOf('month').toDate(currentDate);
    const monthEnd = moment().endOf('month').toDate(monthStart);
    const startDate = moment().startOf('week').toDate(monthStart);
    const endDate = moment().endOf('week').toDate(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
       for (let i = 0; i <= 31; i++) {
       formattedDate = format(day, dateFormat);
       const cloneDay = day;
    days.push(
          <div 
           className={`column cell ${!isSameMonth(day, monthStart)
           ? "disabled" : isSameDay(day, selectedDate) 
           ? "selected" : "" }`} 
           key={day} 
           onClick={() => onDateClick(parse(cloneDay))}
           > 
           <span className="number">{formattedDate}</span>
           <span className="bg">{formattedDate}</span>
         </div>
         );
       day =addDays(day, 1);
      }

rows.push(
    <div className="row" key={day}> {days} </div>
  );
 days = [];
}
return <CarCalendarWrapper ><div className="body">{rows}</div></CarCalendarWrapper>
}
const nextMonth = () => {
   setCurrentDate(addMonths(currentDate, 1));
};
const prevMonth = () => {
   setCurrentDate(subMonths(currentDate, 1));
};
const onDateClick = day => {
    setSelectedDate(day);
    }
return (
    <CarCalendarWrapper >
   <div className="calendar">
      <div>{header()}</div>
      <div>{daysOfWeek()}</div> 
       <div>{cells()}</div> 
   </div>
   </CarCalendarWrapper>
  );
};
    export default Calendar;