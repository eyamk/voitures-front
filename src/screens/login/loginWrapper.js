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
		background:transparent;
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
	
	.connection__error{
		color:red;
		font-size:14px;
	}
	.connection_error{
		color:red;
		font-size:18px;
		margin-top:50px;
		text-align:center;
		font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.loginButton {
		font-size: 14px;
		width: 50%;
		height: 40px;
		border-radius: 8%;
		margin-top: 40%;
	}
	.gmail {
		display: flex;
		justify-content: center;
        width: 30%;
        padding: 9px 3px;
		font-size: 14px;
		height: 50px;
		margin-top: 10%;
		
        img {
          width: 8%;
          padding-right: 12px;
        }
      }
	
`;

export default LoginWrapper;