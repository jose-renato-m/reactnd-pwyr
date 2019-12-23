import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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