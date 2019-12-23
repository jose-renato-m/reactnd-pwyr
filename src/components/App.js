import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

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