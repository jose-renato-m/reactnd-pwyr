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
        <BrowserRouter>
            <Switch>
              <Route path='/' component={Login} />
            </Switch>
        </BrowserRouter>
      )
    }

    return (
      <BrowserRouter>
          <Fragment>
            <LoadingBar style={{ zIndex: 1000 }} />
            <Menu />
            <div className='ui main text container' style={{ marginTop: '7em' }}>
              
            </div>
          </Fragment>
      </BrowserRouter>         
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