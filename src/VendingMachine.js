import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Chips from './Chips';
import Pop from './Pop';
import Snacks from './Snacks';
import Home from './Home';

class VendingMachine extends Component {

    // VendingMachine is essentially a nav component

    // Try to implement props child soon for styling

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {/* <h2>VendingMachine Component</h2> */}
                <nav>
                    <div className='links-link'>
                        <NavLink exact activeClassName='navLinksAct' className='navLink' to='/' >Home</NavLink>
                        <NavLink exact activeClassName='navLinksAct' className='navLink' to='/pop' >Pop</NavLink>
                        <NavLink exact activeClassName='navLinksAct' className='navLink' to='/chips' >Chips</NavLink>
                        <NavLink exact activeClassName='navLinksAct' className='navLink' to='/snacks' >Snacks</NavLink>
                    </div>
                </nav>


                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/pop' component={Pop} />
                    <Route exact path='/chips' component={Chips} />
                    <Route exact path='/snacks' component={Snacks} />
                </Switch>

            </div>
        );
    }
}

export default VendingMachine;