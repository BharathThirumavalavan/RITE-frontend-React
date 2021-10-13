import React from 'react'
import ReactDOM from 'react-dom'
import './style/css/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ValidationAPI } from './login/index'
import { Reset } from './login/resetPassword'
import { Register } from './login/register'
import { Home } from './home/index'
import { ErrorPage } from './error/error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/login'>
          <ValidationAPI />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/reset-password'>
          <Reset />
        </Route>
        <Route path='*' component={ErrorPage} status={404} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
