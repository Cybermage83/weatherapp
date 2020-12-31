import React, { useEffect, useState, useContext, useReducer } from "react";
import { GlobalStateContext } from './reducers/context';
import { TodayInfoStyle } from './styles'

function TodayInfo() {
    const { state, dispatch } = useContext(GlobalStateContext);
    const { weatherData } = state;
    if (!state.weatherData) {
        return <TodayInfoStyle>
            <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">0 %</span>
                <div className="clear"></div>
            </div>
            <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">0 %</span>
                <div className="clear"></div>
            </div>
            <div className="wind"> <span className="title">WIND</span><span className="value">0 km/h</span>
                <div className="clear"></div>
            </div>
        </TodayInfoStyle>
    }

    const { day } = weatherData;
    const { wind, main, rain, } = day;
    const { speed } = wind;
    const { humidity } = main;
    const rainTime = rain ? rain['1h'] : null;
    
    return <TodayInfoStyle>
        <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">{rainTime || 0} %</span>
            <div className="clear"></div>
        </div>
        <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{humidity} %</span>
            <div className="clear"></div>
        </div>
        <div className="wind"> <span className="title">WIND</span><span className="value">{speed} km/h</span>
            <div className="clear"></div>
        </div>
    </TodayInfoStyle>;
}

export default TodayInfo;
