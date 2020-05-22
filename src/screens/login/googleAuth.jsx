import { GoogleLogin } from 'react-google-login';
import { useMutation } from '@apollo/react-hooks';
import Router from 'next/router';
import LOGIN from '../../graphql/mutations/loginUser.graphql';
import LoginWrapper from './loginWrapper';

const Google = () => {
	const [ signin ] = useMutation(LOGIN);
	const responseGoogle = async (response, signin) => {
		await signin({
			variables: {
				input: {
					email: response.profileObj.email,
					password: 'password'
				}
			}
		});
		Router.push('/home');
	};
	console.log(responseGoogle);
	return (
		<LoginWrapper>
			{' '}
			<div>
				<GoogleLogin
					clientId="645554716272-okgcoql4pj5u6k0mastgk1qs97266ie7.apps.googleusercontent.com"
					render={(renderProps) => (
						<button
							type="button"
							className="gmail"
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
						>
							<img src="/static/google.png" alt="" />
							Continuer avec Google
						</button>
					)}
					buttonText="Login"
					onSuccess={(response) => responseGoogle(response, signin)}
					onFailure={responseGoogle}
					cookiePolicy="single_host_origin"
				/>
			</div>
		</LoginWrapper>
	);
};
export default Google;
