import styled from 'styled-components';

const LoginWrapper = styled.div`
	.loginInput {
		margin: 4% 0% 0% 33%;
		width: 25%;
		height: 550px;
		padding: 10px;
		background-image: linear-gradient(to top, #06d9aa, #3eaedd);
		align-content: center;
		display: grid;
	}

	input {
		margin-top: 10%;
		outline: 0;
		border-width: 0 0 2px;
		border-color: white;
		background-color: transparent;
		width: 100%;
		color: white;
		font-size: 18px;
		::placeholder {
			color: white;
		}
	}

	.btn {
		display: flex;
		justify-content: center;
	}
	.password-link {
		display: flex;
		justify-content: center;
		margin-top: 10%;
	}
	button {
		font-size: 14px;
		width: 50%;
		height: 40px;
		border-radius: 8%;
		margin-top: 40%;
	}
`;

export default LoginWrapper;
