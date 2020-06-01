import styled from 'styled-components';

const RegisterWrapper = styled.div`
	.registerInput {
		margin: 2% 0% 0% 18%;
		width: 60%;
		height: 600px;
		padding: 10px;
		background-image: linear-gradient(to top, #06d9aa, #3eaedd);
		align-content: center;
		display: grid;
	}

	input[type="file"] {
		display: none;
	}
	
	img {
		width: 10%;
		height: 25px;
		background:  url('https://simpleicon.com/wp-content/uploads/cloud-upload-2.png') 0% 0% no-repeat
			padding-box;
	}

	input {
		margin-top: 5%;
		outline: 0;
		border-width: 0 0 2px;
		border-color: white;
		background-color: transparent;
		background: transparent;
		width: 40%;
		color: white;
		font-size: 16px;
		::placeholder {
			color: white;
		}
	}

	.btn {
		display: flex;
		justify-content: center;
	}

	.btn-disable {
		cursor: not-allowed;
		pointer-events: none;
		display: flex;
		justify-content: center;
		color: #c0c0c0;
	}
	button {
		font-size: 14px;
		width: 40%;
		height: 40px;
		border-radius: 8%;
		margin-top: 2%;
	}
	.connection__error {
		color: red;
	}

	label {
		color: white;
		font-size: 20px;
		font-family: Georgia, serif;
	}
	.upload_photo {
		position: relative;
		bottom: 66%;
		left: 57%;
	}
	 .list-agences {
		color: white;
		font-size: 20px;
		position: relative;
		bottom: 60%;
		left: 57%;
		width:30%;
		font-family: Georgia, serif;
		

	}
	.list{
		font-size: 17px;
		border: 1px solid white;
		line-height:1.6;
	}
	select{
		background-image: linear-gradient(to top, #06d9aa, #3eaedd);
		border:none;
		width:100%;
		height:30px;
		color:white;
		font-size:18px;
	}
	option {
		background-color: #3eaedd;
		color: white;
		font-size: 18px;
	}

	
`;

export default RegisterWrapper;
