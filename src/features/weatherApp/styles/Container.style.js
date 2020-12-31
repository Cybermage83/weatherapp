import styled from 'styled-components'
import colors from './colors';
const { backGround, white } = colors;

const Container = styled.div`
    display:flex;
    border-radius: 25px;
	-webkit-box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
	        box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
	background-color: ${backGround};
	color: ${white};
	height: 400px;
`;

export default Container;