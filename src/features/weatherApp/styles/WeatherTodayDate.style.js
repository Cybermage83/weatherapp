import styled from 'styled-components'

const WeatherTodayDate = styled.div`
	position: absolute;
    top: 25px;
    left: 25px;
    
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

export default WeatherTodayDate;