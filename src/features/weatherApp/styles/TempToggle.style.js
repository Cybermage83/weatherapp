import styled from 'styled-components'

const TempToggleStyle = styled.div`
    border-radius: 100px;
    
    position: absolute;
    top: 2rem;
    width: 74px;
    height: 36px;
    overflow: hidden;
    right:0;

    >.checkbox {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        cursor: pointer;
        z-index: 3;
    }

    >.knobs {
        z-index: 2;
    }

    >.layer {
        width: 100%;
        background-color: #ebf7fc;
        transition: 0.3s ease all;
        z-index: 1;
    }

    >.knobs:before, >.knobs:after, >.knobs span {
        position: absolute;
        top: 4px;
        width: 20px;
        height: 10px;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        line-height: 1;
        padding: 9px 4px;
        border-radius: 50%;
        transition: 0.3s ease all;
    }

    >.knobs:before {
        content: 'Celsius';
        color: #fff;
        left: 4px;
        
    }

    >.knobs:after {
        content: 'Fahrenheit';
        // left: 42px;
        color: #fff;
       
        opacity: 0;
    }

    >.knobs:before, >.knobs:after {
        z-index: 2;
    }

    >.knobs span {
        left: 4px;
        background-color: #03A9F4;
        z-index: 1;
    }

    >.checkbox:checked + .knobs:before {
        opacity: 0;
    }

    >.checkbox:checked + .knobs:after {
        opacity: 1;
    }

    >.checkbox:checked + .knobs span {
        background-color: #f44336;
        transform: scale(4);
    }
    >.checkbox + .knobs span {
        transform: scale(4);
    }
`;

export default TempToggleStyle;