import React from 'react';
import ReactDOM from 'react-dom';

export default class WeatherInfo extends React.Component {
    render() {
        return (
            <ul>
                <li>Location:</li>
                <li>Temperature:</li>
                <li>Wind:</li>
                <li>Pressure:</li>
            </ul>
        );
    }
}