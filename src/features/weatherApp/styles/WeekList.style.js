import styled from 'styled-components'
// import colors from './colors';
// const { backGround, white } = colors;

const WeekList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 10px 35px;
    -webkit-box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
            box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display:flex;

    &>li {
        display:flex;
        flex-direction: column;
        padding: 15px;
        cursor: pointer;
        -webkit-transition: 200ms ease;
        -o-transition: 200ms ease;
        transition: 200ms ease;
        border-radius: 10px;
        >img {
            align-self: center;
        }
    }

    &>li:hover {
        cursor:default;
        -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
                transform: scale(1.1);
        background: #fff;
        color: #222831;
        -webkit-box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
                box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2)
    }

    &>li.active {
        background: #fff;
        color: #222831;
        border-radius: 10px;
    }

    &>li .day-name {
        display: block;
        margin: 10px 0 0 0;
        text-align: center;
    }

    &>li .day-icon {
        display: block;
        height: 30px;
        width: auto;
        margin: 0 auto;
    }

    &>li .day-temp {
        display: block;
        text-align: center;
        margin: 10px 0 0 0;
        font-weight: 700;
        min-width: 4rem;
    }
	
`;

export default WeekList;