import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'

import Menu from './Menu'
import Footer from './Footer'

import QuestionList from './QuestionList'
import QuestionNew from './QuestionNew'
import QuestionView from './QuestionView'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Logout from './Logout'
import PageNotFound from './PageNotFound'

class App extends Component {
  state = { activeIndex: 0 }

  handleTabChange = (e, { activeIndex }) => {
    this.setState({ activeIndex })
  }

  resetActiveIndexToZero = () => {
    this.setState({ activeIndex: 0 })
  }

  componentDidMount() {
    const { handleInitialData } = this.props
    handleInitialData()
  }

  render() {
    const { authedUser } = this.props

    if (!authedUser) {
      return (
        
      )
    }

    return (
      <Router>
        <div className='App'>
          {authedUser === null ? (
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
                  <Route exact path='/' component={Home} />
                  <Route path='/questions/bad_id' component={NoMatch} />
                  <Route path='/questions/:question_id' component={UserCard} />
                  <Route path='/add' component={NewPoll} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route component={NoMatch} />
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

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(
  mapStateToProps,
  { handleInitialData }
)(App)