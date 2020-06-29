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
		position: relative;
		width: 15%;
		margin-left: 8%;
		margin-bottom:-5px;
	
		
	}
	.deconnect {
		margin-top: 26%;
		display:inline-block;
	}
	p {
		font-size: 16px;
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
		margin-left: 79%;
		margin-top: -1%;
	}
	img {
		margin-left: 73%;
		width: 3%;
		margin-top: -6% ;
	}
	.border-modal {
		padding-left: 10px;
		padding-top: 20px;
		height: 250px;
		border: 1px solid black;
		text-align: left;
		text-align-last: left;
		width: 100%;
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
