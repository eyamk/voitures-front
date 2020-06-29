import styled from 'styled-components';

const AcceuilWrapper = styled.div`
	.body {
    top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: #f2f2f2 0% 0% no-repeat padding-box;
	opacity: 1;
    }

    .header {
        position: relative;
        width: 38%;
        left: 50%;
        top: 30px;
        display: flex;
        justify-content: space-evenly;
        font-size: 20px;
        align-content: center;
        text-align: left;
        font-weight: bold;
        
    }
    .signInButton {
        position: relative;
        top:-13px;
      width: 22%;
      height: 45px; 
      font-size: 18px;
      border-radius:20px; 
      font-weight: bold;
	  display: inline-block;
	  cursor: pointer;
        }
        a {
            text-decoration:none;
            color: black;
			font-family:Trebuchet MS;
			padding: 0px;
			cursor: pointer;
        }
  
	.title {
		position: absolute;
		top: 27%;
		left: 8%;
		width: 36%;
		text-align: left;
		font: Bold 50px/24px Trebuchet MS;
		letter-spacing: 0px;
		color: #000000;
		opacity: 1;
	}
	.paragraph {
		position: absolute;
		top: 35%;
		left: 8%;
		width: 25%;
        height:10%;
		text-align: left;
		font-size: 22px;
		font-family: Trebuchet MS;
		letter-spacing: 0px;
		color: #000000;
		opacity: 1;
	}
 
	.loginButton {
		position: absolute;
		font-size: 18px;
		color: white;
		top: 63%;
		left: 11%;
		width: 15%;
		height: 7%;
		border-radius: 15px;
		background: transparent linear-gradient(90deg, #32344f 0%, #de5678 100%) 0% 0% no-repeat padding-box;
		opacity: 1;
		cursor: pointer;
	}
	.display {
		display: flex;
	}
	.image {
		position: absolute;
		width: 50%;
		top: 20%;
		left: 40%;
	}
	@media only screen   
and (min-device-width : 375px)   
and (max-device-width : 667px){
	.title {
		position: absolute;
		top: 29%;
		left: 10%;
		width: 90%;
		text-align: left;
		font: Bold 42px/24px Trebuchet MS;
		letter-spacing: 0px;
		color: #000000;
		opacity: 1;
	}
	.paragraph {
		position: absolute;
		top: 36%;
		left: 10%;
		width: 91%;
        height:10%;
		text-align: left;
		font-size: 18px;
		font-family: Trebuchet MS;
		letter-spacing: 0px;
		color: #000000;
		line-height: 1.2;
		opacity: 1;
	}
 
	.loginButton {
		position: absolute;
		font-size: 18px;
		color: white;
		top: 59%;
		left: 33%;
		width: 36%;
		height: 6%;
		border-radius: 15px;
		background: transparent linear-gradient(90deg, #32344f 0%, #de5678 100%) 0% 0% no-repeat padding-box;
		opacity: 1;
		cursor: pointer;
	}
	.image {
		position: absolute;
		width: 72%;
		top: 70%;
		left: 15%;
		height: 199px;
	}
	.header {
        position: relative;
        width: 38%;
        left: 36%;
        top: 30px;
        display: flex;
        justify-content: space-evenly;
        font-size: 20px;
        align-content: center;
        text-align: left;
        font-weight: bold;
        
    }
    .signInButton {
        position: relative;
        top:-13px;
      width: 99px;
      height: 38px; 
      font-size: 14px;
      border-radius:20px; 
      font-weight: bold;
	  display: inline-block;
	  cursor: pointer;
        }
}

`;

export default AcceuilWrapper;
