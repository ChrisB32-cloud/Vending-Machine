import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home';


class Chips extends Component {
    render() {
        return (
            <div className='myContents'>
                <h1>GIMME SOME CHIP!!!!</h1>
                <br />
                <br />
                <img src="https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg" alt="chips" />
                <br />
                <Link exact to='/'><h2>Go Back</h2></Link>
            </div>
        );
    }
}

export default Chips;