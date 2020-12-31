import React from "react";
import { WeatherInfoSideStyle } from './styles'
import { LocationSearch, TodayInfo, WeekList } from './'

function WeekInfo() {
    return <WeatherInfoSideStyle>
        <TodayInfo />
        <WeekList />
        <LocationSearch />
    </WeatherInfoSideStyle>;
}

export default WeekInfo;
