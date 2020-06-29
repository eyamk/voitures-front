import styled from 'styled-components';

const CarCalendarWrapper = styled.div`
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
.icon {
font-family:  serif;
font-style: normal;
display: inline-block;
vertical-align: middle;
line-height: 1;
text-transform: none;
letter-spacing: normal;
word-wrap: normal;
white-space: nowrap;
direction: ltr;
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
-moz-osx-font-smoothing: grayscale;
font-feature-settings: 'liga';
}
/* GENERAL */
* {
box-sizing: border-box;
}
body {
font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
font-size: 1em;
font-weight: 300;
line-height: 1.5;
position: relative;
}
header {
display: block;
width: 100%;
padding: 1.75em 0;
border-bottom: 1px solid lightgray;
background: white;
}
/* GRID */
.row {
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
}
.row-middle {
align-items: center;
}
.column {
flex-grow: 1;
flex-basis: 0;
max-width: 100%;
}
/* Calendar */
.calendar {
display: block;
position: relative;
width: 100%;
background: white;
border: 1px solid lightgray;
height: auto;
margin:0 auto;
}
.calendar .header {
text-transform: uppercase;
font-weight: 700;
font-size: 115%;
padding: 1.5em 0;
border-bottom: 1px solid lightgray;
}
.calendar .header .icon {
cursor: pointer;
transition: .15s ease-out;
}
.calendar .header .icon:hover {
transform: scale(1.75);
transition: .25s ease-out;
color: dodgerblue;
}
.calendar .header .icon:first-of-type {
margin-left: 1em;
}
.calendar .header .icon:last-of-type {
margin-right: 1em;
}
.calendar .days {
text-transform: uppercase;
font-weight: 400;
color: gray;
font-size: 70%;
padding: .75em 0;
border-bottom: 1px solid lightgray;
}
.calendar .body .cell {
position: relative;
height: 6em;
border-right: 1px solid lightgray;
overflow: hidden;
cursor: pointer;
background: white;
transition: 0.25s ease-out;
}
.calendar .body .cell:hover {
background: whitesmoke;
transition: 0.5s ease-out;
}
.calendar .body .selected {
border-left: 10px solid transparent;
border-image: linear-gradient(45deg, #1affa0 0%,#cff153 40%);
border-image-slice: 1;
}
.calendar .body .row {
border-bottom: 1px solid lightgray;
}
.calendar .body .row:last-child {
border-bottom: none;
}
.calendar .body .cell:last-child {
border-right: none;
}
.calendar .body .cell .number {
position: absolute;
font-size: 82.5%;
line-height: 1;
top: .75em;
right: .75em;
font-weight: 700;
}
.calendar .body .cell:hover .number, .calendar .body .selected .number   {
visibility:hidden;
}
.calendar .body .disabled {
color: lightgray;
pointer-events: none;
}
.calendar .body .cell .bg {
font-weight: 700;
line-height: 1;
color: #1affa0;
opacity: 0;
font-size: 5em;
position: absolute;
top: -.2em;
right: -.05em;
transition: .25s ease-out;
letter-spacing: -.07em;
}
.calendar .body .cell:hover .bg, .calendar .body .selected .bg  {
opacity: 0.2;
transition: .5s ease-in;
}
.calendar .body .column {
flex-grow: 0;
flex-basis: calc(100%/7);
width: calc(100%/7);
}

`;

export default CarCalendarWrapper;