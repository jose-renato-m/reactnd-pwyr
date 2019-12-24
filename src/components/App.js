import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authUser } = this.props
    return (
      <Router>
        <div className='App'>
          {authUser === null ? (
            <Route
              render={() => (
                <ContentGrid>
                  <Login />
                </ContentGrid>
              )}
          ) : (

          )

          }
        Starter Code
        </div>
      </Router>
      
    )
  }  
}

export default connect()(App)