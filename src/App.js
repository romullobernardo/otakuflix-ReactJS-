import React, { Component, Fragment }             from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider }                               from 'react-redux'    

import Home                                       from './components/Home'
import Header                                     from './components/Header'
import Animes                                     from './components/Animes'
import Mangas                                     from './components/Mangas'
import Description                                from './components/Description'

import configureStore                             from './store/index'

import                                                 'materialize-css/dist/css/materialize.min.css'

const store = configureStore()



class App extends Component 
{
    render() 
    {
        return (
        <Provider store={store}>
            <Router >
                <Fragment>

                    <Header />

                    <Switch>
                        <Route exact path='/' component={Home} />  
                        <Route exact path='/animes' component={Animes} />
                        <Route exact path='/mangas' component={Mangas} /> 
                        <Route exact path='/description' component={Description} />                      
                    </Switch>           

                </Fragment>
            </Router>
        </Provider>
        )
    }
}

export default App