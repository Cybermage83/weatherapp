import styled from 'styled-components'

const WeatherTodayTemp = styled.div`
    position: absolute;
    bottom: 25px;
    left: 25px;
    
    > .weather-icon.feather {
        height: 60px;
        width: auto;
    }
    
    > .weather-temp {
        margin: 0;
        font-weight: 700;
        font-size: 4em;
    }
    
    > .weather-desc {
        margin: 0;
    }
	
`;

export default WeatherTodayTemp;