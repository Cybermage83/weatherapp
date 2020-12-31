import styled from 'styled-components'
import colors from './colors';
const { grey } = colors;

const TodayInfoStyle = styled.div`
    padding-left:2rem;
    padding-right:2rem;
   
    > input {
        margin-top:1rem;
        margin-bottom:1rem;
        background: transparent;
        line-height: 2rem;
        width:100%;
        color: ${grey}
    }
    
    >.location-button {
        outline: none;
        width: 100%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        border: none;
        border-radius: 25px;
        padding: 10px;
        font-family: 'Montserrat', sans-serif;
        background-image: var(--gradient);
        color: #ffffff;
        font-weight: 700;
        -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
                box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        -webkit-transition: -webkit-transform 200ms ease;
        transition: -webkit-transform 200ms ease;
        -o-transition: transform 200ms ease;
        transition: transform 200ms ease;
        transition: transform 200ms ease, -webkit-transform 200ms ease;
        
    }

    >.location-button:disabled {
        background-image: var(--grey);
    }
    >.location-button:hover {
        -webkit-transform: scale(0.95);
            -ms-transform: scale(0.95);
                transform: scale(0.95);
    }

    >.location-button .feather {
        height: 1em;
        width: auto;
        margin-right: 5px;
    }
	
`;

export default TodayInfoStyle;