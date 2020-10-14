import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Snacks from './Snacks';
import Pop from './Pop';
import Chips from './Chips';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <div className='sub-container'>
                    <h1>vending Machine</h1>
                    <img src="https://image.shutterstock.com/image-vector/vintage-vending-machine-food-drinks-260nw-434004316.jpg" alt="" />
                    <br />
                </div>

                <div className='vend-card'>
                    <Link exact to='/pop'><h2>Pop</h2></Link>
                    <Link exact to='/chips'><h2>Chips</h2></Link>
                    <Link exact to='/snacks'><h2>snacks</h2></Link>
                </div>
                <Switch>
                    <Route exact path='/pop' component={Pop} />
                    <Route exact path='/chips' component={Chips} />
                    <Route exact path='/snacks' component={Snacks} />
                </Switch>

            </div>
        );
    }
}

export default Home;