import styled from 'styled-components';

const TabWrapper = styled.div`
	font-family: "sans-serif";
	text-align: "center";

	.navBar {
		display: flex;
		justify-content: space-around;
		font-size: 22px;
		font-family: Arial, Helvetica, sans-serif;
		margin-top: 0%;
		margin-left: 15%;
		margin-right: 25%;
		border-bottom: 2px solid black;
		line-height: 2;
	}
	.hover-underline-animation:hover {
		display: inline-block;
		position: relative;
		color: black;
		font-weight: bold;
	}

	.hover-underline-animation:after {
		/* content: '';  */
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: black;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
	.panel {
		margin-top: 35px;
	}
`;

export default TabWrapper;
