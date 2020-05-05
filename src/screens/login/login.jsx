import LoginWrapper from './loginWrapper';

const login = () => (
	<LoginWrapper>
		<div className="loginInput">
			<div>
				<input type="text" placeholder="Email" />
			</div>
			<div>
				<input type="text" placeholder="mot de passe" />
			</div>
			<div className="btn">
				<button>LOGIN</button>
			</div>
			<div className="password-link">
				<h6>
					<a href="#password"> Mot de passe oublié ? </a>
				</h6>
			</div>
		</div>
	</LoginWrapper>
);
export default login;
