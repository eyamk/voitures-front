import styled from 'styled-components';

const CarWrapper = styled.div`
/* .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
  }
  .container {
    display: grid;
  grid-template-columns: 300px 300px 300px 300px 300px;
  grid-template-rows: 300px 300px;
  grid-gap: 20px;
  padding: 10px;
}
.container > p {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 18px;
} */

    .list {
        position: relative;
        top: 60px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;	
	}
    p{
        font-size: 18px;
        text-align: left;
    }

    .item {
    position: relative;
    top:30px;    
    /* box-shadow: 0 4% 8px 0 rgba(0, 0, 0, 0.2); */
    margin-bottom: 25px;
    margin-left: 30px;
		transition: 0.3s;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		width: 245px;
		height: 320px;
		padding: 2px 16px;
		text-align: center;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		color: #424242;
        border: 1px solid; 
}

.heart {
    position:absolute;
    width: 28px;
    top: 9px;
    left: -31px;
    cursor: pointer;
    
}
.red-heart{
    position:absolute;
    width: 28px;
    top: 9px;
    left: -31px;
    cursor: pointer;  
}
.image{
    position:relative;
    left:-5%;
    border:1px solid black;
    width:268px;
    height:200px;
}
.photo{
  position:relative;
  width:30%;
  top: 5px;
  left: 15px;
}
.details {
  display: flex;
}
.info {
  position: relative;
  top: 173px;
    left: 105px;
}
.information{
  text-align: left;
font: Bold 26px/34px Roboto;
letter-spacing:0px;
}
span {
  font-size:20px;
  letter-spacing:0px;
  color: #262933;
}
 .calendar{
  position: relative;
  top: 200px;
  left: 200px;
}
.heart1 {
    position:absolute;
    width: 28px;
    top: 55px;
    left: -31px;
    cursor: pointer;
}



.accordion-wrapper {
  & + * {
    margin-top: 0.5em;
  }
}

.accordion-item {
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
  height: auto;
  max-height: 9999px;
}

.accordion-item.collapsed {
  max-height: 0;
  transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
}

.accordion-title {
  
  cursor: pointer;
  color: #666;
  padding: 0.5em 1.5em;
  
  border-radius: 1.5em;
  display: flex;
  justify-content: space-between;
  

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid currentColor;
  }

  &:hover,
  &.open {
    color: black;
  }

  &.open {
    &::after {
      content: "";
      border-top: 0;
      border-bottom: 5px solid;
    }
  }
}

/* .accordion-content {
  padding: 1em 1.5em;
} */
.item-car{
    width:100%;
}
  `;
export default CarWrapper;
