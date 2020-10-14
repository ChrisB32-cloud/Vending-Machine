import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home';

class Pop extends Component {
    render() {
        return (
            <div className='myContents'>
                <h1>I WANT SOME POP!!!! NOW!!!!</h1>
                <br />
                <br />
                <img src="https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/1/4/14912101.jpg" alt="pop" />
                <br />
                <Link exact to='/'><h2>Go Back</h2></Link>
            </div>
        );
    }
}

export default Pop;