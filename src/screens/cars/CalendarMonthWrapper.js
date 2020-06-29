import styled from 'styled-components';

const CalendarMonthWrapper = styled.p`
  width: calc(100% / 12);
  border-right-color:grey;
  padding: 0 10px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  :last-child {
    border: none;
  }

`;

export default CalendarMonthWrapper;
