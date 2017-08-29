import React from 'react';
import ReactDOM from 'react-dom';

import Location from 'location-component/location-component.jsx';
import WeatherInfo from 'weather-info-component/weather-info-component.jsx';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Location />
                <WeatherInfo />
            </div>
        );
    }
}