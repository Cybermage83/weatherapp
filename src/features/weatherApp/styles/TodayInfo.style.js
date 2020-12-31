import styled from 'styled-components'

const TodayInfoStyle = styled.div`
    
    padding: 15px;
    margin: 0 25px 5px 25px;
    /* 	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
    border-radius: 10px;
    

    &>div:not(:last-child) {
        margin: 0 0 10px 0;
    }

    &>div .title {
        float: left;
        font-weight: 700;
    }

   &>div .value {
        float: right;
    }
	
`;

export default TodayInfoStyle;