import styled from 'styled-components'

const WeatherToday = styled.div`
	position: relative;
	display:flex;
	height: 100%;
	border-radius: 25px;
	background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
	width: 300px;
	box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
	transition: transform 300ms ease;
	transform: translateZ(0) scale(1.02) perspective(1000px);
	
	&:hover{
		transform: scale(1.1) perspective(1500px) rotateY(10deg);
	}

	> .weather-gradient {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-image: var(--gradient);
		border-radius: 25px;
		opacity: 0.8;
	}

	> .date-container {
		position: absolute;
		top: 25px;
		left: 25px;
	}
	
	> .date-dayname {
		margin: 0;
	}
	
	> .date-day {
		display: block;
	}
	
	> .location {
		display: inline-block;
		margin-top: 10px;
	}
	
	> .location-icon {
		display: inline-block;
		height: 0.8em;
		width: auto;
		margin-right: 5px;
	}
`;

export default WeatherToday;