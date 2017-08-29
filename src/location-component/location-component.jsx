import React from 'react';
import ReactDOM from 'react-dom';

export default class Location extends React.Component {
    render() {
        return (
            <div>
                <h1>Choose your city</h1>
                <input type="text"
                    placeholder="City"/>
                <button>Fetch weather data</button>
            </div>
        );
    }
}