import styled from 'styled-components';

const HeaderWrapper = styled.header`
	.navBar {
		display: flex;
		justify-content: space-around;
		font-size: 22px;
		font-family: Arial, Helvetica, sans-serif;
		margin-top: 0%;
		margin-left: 15%;
		margin-right: 25%;
	}
	
	.deconnect-photo {
		width: 17%;
		margin-left: 8%;
		margin-top: 12%;
	}
	.deconnect {
		margin-top: 26%;
	}
	p {
		font-size: 18px;
		font-family: Arial, Helvetica, sans-serif;
		line-height: 1.8;
		
	}

	.nav {
		text-align: center;
		padding-top: 4rem;
	}

	.modal {
		position: relative;
		width: 15%;
		margin-left: 80%;
		margin-top: -4%;
	}
	 img {
		margin-left: 73%;
		width: 3%;
		margin-top: -3%;
	} 
	.border-modal {
		padding-left:10px;
		padding-top:20px;
		height: 260px;
		border: 1px solid black;
		text-align: left;
		text-align-last: left;
		width: 80%;
	
	}

	.modal-body {
		padding: 30px 26x;
		background-color: white;
	}
	.border {
		border-bottom: 2px solid black;
	}
`;

export default HeaderWrapper;
