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
import RequiresAuth from './RequiresAuth'

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
    const { isAuthenticated } = this.props    

    return (
      <BrowserRouter>
          <Fragment>
            <LoadingBar style={{ zIndex: 1000 }} />
            {isAuthenticated && <Menu />}
            <div className='ui main text container' style={{ marginTop: '7em' }}>
              <Switch>
                <Route path='/login' component={Login} />
                <Route path='/' exact component={RequiresAuth(QuestionList)} />
                <Route path='/add' component={QuestionNew} />
                <Route path='/questions/:question_id' component={QuestionView} />
                <Route path='/leaderboard' component={Leaderboard} />                                     
                <Route path='/logout' component={Logout} />                   
                <Route path='/404' component={PageNotFound} />    
                <Route path='/' component={QuestionList} />            
              </Switch>
            </div>
            <Footer />
          </Fragment>
      </BrowserRouter>         
    )
  }  
}

const mapStateToProps = (state) => {
    const { authedUser } = state
    return { authedUser }
}

export default connect(
  mapStateToProps,
  { handleInitialData }
)(App)