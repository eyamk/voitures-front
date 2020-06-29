import styled from 'styled-components';

const LoginWrapper = styled.div`


	.email{
		
		background-image: url('static/Tracé 587.png');
		background-repeat: no-repeat;
		background-size:2rem;
		background-position: right center;
        background-origin: content-box;	
		background-color: #e6e7e8 ;
		letter-spacing: 0px;
		opacity: 0.59;
		margin-bottom: 10%;
	}

	.password{
		
		background-image: url('static/Groupe 558.png');
		background-repeat: no-repeat;
		background-size:2rem;
		background-position: right center;
        background-origin: content-box;
	    background-color: #e6e7e8 ;
	    letter-spacing: 0px;
		opacity: 0.59;
		margin-top: 10%;
	}
	
	.loginButton {
		margin: 30%;
		margin-left:15%;
		width:70%;
		height: 40px;
		background: transparent linear-gradient(161deg, #7256ae 0%, #7553ae 42%, #7f4bae 77%, #8b42ae 100%) 0% 0%
		no-repeat padding-box;
		opacity: 1;
		border-radius: 20px;
		text-align: center;
		font-size: 18px;
		letter-spacing: 0px;
		color: #ffffff;	
	}
	.connection__error {
		text-align: left;
		letter-spacing: 0px;
		color: #f00000;
		opacity: 1;
	}
	.connection_error {
		color: red;
		font-size: 14px;
	
	}
	span {
		color: grey;
		align-content:center;
		margin-left:15px;
	}
	a {
		text-decoration: none;
		margin:6%;
		margin-left:45px;
		text-align: left;
        letter-spacing: 0px;
        color: #F22424;
        opacity: 1;
		font-family: Josefin Sans-Regular;

	}
	.link {
		margin-top: 25px;
		line-height: 1.6;
		align-content:center;
		margin:6%;
	}
	.display {
		display: flex;
		
	}

	
	.first-division {
		position: relative;
		
	}

	.img1 {
		height: 835px;
	}
	

	@media only screen   
and (min-device-width : 837px)   
and (max-device-width : 1498px)
{
	.img1 {
		height: 692px;
	}
	.loginButton {
		margin: 10%;
		margin-left:15%;
		width:70%;
		height: 40px;
		background: transparent linear-gradient(161deg, #7256ae 0%, #7553ae 42%, #7f4bae 77%, #8b42ae 100%) 0% 0%
		no-repeat padding-box;
		opacity: 1;
		border-radius: 20px;
		text-align: center;
		font-size: 18px;
		letter-spacing: 0px;
		color: #ffffff;	
		cursor: pointer;
	}
}

@media only screen   
and (min-device-width : 513px)   
and (max-device-width : 577px){
	.account-image {
		top: -8px;
		left: 7%;
		width :56%;
	}
	.image1 {
		position: absolute;
	    display:block;
        top: 16%;
        left: 5%;
		width: 60%;
	}
	.image2{
		position: absolute;
		width:11%;
		top:45%;
		left: 73%
	}

	.image3{
		position: absolute;
		width:19%;
		top:56%;
		left:35%
	}

	.image4{
		position: absolute;
		width:15%;
		top:44%;
		left:6%
	}
	.loginButton {
		margin-top: 69%;
		margin-left: -45%;
		width:100%;
		height: 40px;
		background: transparent linear-gradient(161deg, #7256ae 0%, #7553ae 42%, #7f4bae 77%, #8b42ae 100%) 0% 0%
		no-repeat padding-box;
		opacity: 1;
		border-radius: 20px;
		text-align: center;
		font-size: 18px;
		letter-spacing: 0px;
		color: #ffffff;	
	}
	span {
		color: grey;
		align-content:center;
		margin-left: -88px;
	}
	a {
		text-decoration: none;
		margin:6%;
		margin-left: -64px;
		text-align: left;
        letter-spacing: 0px;
        color: #F22424;
        opacity: 1;
		font-family: Josefin Sans-Regular;

	}

}

	.image1 {
	position: absolute;
	display:block;
      top: 16%;
      left: 5%; 
	  width:90%;
}

	.image2{
		position: absolute;
		width:10%;
		top:50%;
		left: 80%
	}

	.image3{
		position: absolute;
		width:20%;
		top:60%;
		left:40%
	}

	.image4{
		position: absolute;
		width:15%;
		top:45%;
		left:5%
	}

	.second-division {
		position: relative;
		margin:5%;
		margin-left:20%;
	}


	.background-image {
		position: relative;
	    width: 47%;
		left: 27%;
		top: -45px;
	}
	
	.account-image{
		position: absolute;
		top: -34px;
		left: 34%;
		width: 30%;
	}
	.connection_error_login{
		margin-left:30px;
		font-size:18px;
		font-weight: bold ;
	}

	
	@media only screen   
and (min-device-width : 375px)   
and (max-device-width : 667px)
{
	.img1 {
		height: 664px;
		width: 200px;
	}
	.image1 {
	position: absolute;
	display:block;
      top: 24%;
      left: 5%; 
	  width: 171px;
	  height: 302px;
}
a {
	position: relative;
	top: 135px;
		text-decoration: none;
		margin:6%;
		margin-left: -40px;
		text-align: left;
        letter-spacing: 0px;
        color: #F22424;
        opacity: 1;
		font-family: Josefin Sans-Regular;
		font-size: 14px;

	}
	span {
		position: relative;
		top: 131px;
		font-size: 14px;
		color: grey;
		align-content:center;
		margin-left: -54px;
	}
	.image2{
		position: absolute;
		width: 13%;
		top: 50%;
		left: 75%
	}

	.image3{
		position: absolute;
		width:19%;
		top: 59%;
		left: 37%
	}

	.image4{
		position: absolute;
		width: 16%;
		top: 50%;
		left: 5%
	}
	.loginButton {
		position: relative;
		top: 111px;
		left: 26px;
		margin-top: 69%;
		margin-left: -45%;
		width: 78%;
		height: 40px;
		background: transparent linear-gradient(161deg, #7256ae 0%, #7553ae 42%, #7f4bae 77%, #8b42ae 100%) 0% 0%
		no-repeat padding-box;
		opacity: 1;
		border-radius: 20px;
		text-align: center;
		font-size: 18px;
		letter-spacing: 0px;
		color: #ffffff;	
	}
}
	

	
`;

export default LoginWrapper;
