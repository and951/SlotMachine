import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import MainApp from '../modules/Index'
import { CookiesProvider } from 'react-cookie'




const Root = () => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={MainApp} />
          </Switch>
        </Router>
      </Provider>
    </CookiesProvider>

  )
}

export default Root
