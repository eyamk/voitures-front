import styled from 'styled-components';

const RegisterWrapper = styled.div`
	
	.disable {
		display: flex;
	}
	.part1 {
		position: relative;
		/* margin-top: 7%; */
		/* background: #F2F2F2 0% 0% no-repeat padding-box; */
		
	}
	.part2 {
		position: relative;
		left: 20%;
		/* margin-top: 0; */
	}
	.background-image {
		position: relative;
	    width :25%;
		left: 32%;
	}
	.image {
		position: absolute;
		width: 18%;
		left: 35%;
		top: 2%;	
	}

	input {
		background: #ffffff 0% 0% no-repeat padding-box;
		border: 1px solid #707070;
		border-radius: 25px;
		opacity: 1;
		width: 90%;
		height:40px;
		margin:3%;
		font-size: 16px;
		::placeholder { 
         font-size: 20px;
		 text-align:left;	 
}
	}

.background-image1{
	position: relative;
	height: 692px;

}
.image1 {
	position: absolute;
	width: 76%;
    left: 7%;
    top: 18%;
}
	.registerButton{
		position: relative;
		width:60%;
		height:50px;
		top:40px;
		left: 20%;
        font: Bold 22px/27px Trebuchet MS;
        letter-spacing: 0px;
        color: #FFFFFF;
        border-radius: 25px;
        opacity: 1;
        background-color:#2F3D73;
        text-align:center;
		cursor: pointer
	}
	.connection__error__msg{
		color: red;
		position: relative;
    top: 50px;
    left: 32px;
	}
	/* label {
		color: black;
		font-size: 20px;
		font-family: Georgia, serif;
	}

	input[type="file"] {
    display: none;
}
.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
	background: #ffffff 0% 0% no-repeat padding-box;
		border: 1px solid #707070;
		border-radius: 25px;
		opacity: 1;
		width: 90%;
		height:40px;
		margin:3%;
		font-size: 16px;
		::placeholder { 
         font-size: 20px;
		 text-align:left;	 
}
	
} */
	
	
`;

export default RegisterWrapper;
