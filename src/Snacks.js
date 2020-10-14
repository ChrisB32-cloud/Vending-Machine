import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home';

class Snacks extends Component {
    render() {
        return (
            <div className='myContents'>
                <h1>MAY I HAVE YOU CHOCOLATE BAR????!!!!</h1>
                <br />
                <br />
                <img src="https://www.meijer.com/content/dam/meijer/product/0003/40/0000/24/0003400000243_2_A1C1_1200.png" alt="" />
                <br />
                <Link exact to='/'><h2>Go Back</h2></Link>
            </div>
        );
    }
}

export default Snacks;