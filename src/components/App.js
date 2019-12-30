import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Nav from './Nav'
import Home from './Home'

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
             />
          ) : (
            <Fragment>
              <Nav />
              <ContentGrid>
                <Switch>

                </Switch>
              </ContentGrid>
            </Fragment>
          )}        
        </div>
      </Router>      
    )
  }  
}

const ContentGrid = ({ children }) => (
  <Grid padded='vertically' columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default connect()(App)