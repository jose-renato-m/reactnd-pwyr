import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Home extends Component {
    static propTypes = {
        userQuestionData: PropTypes.object.isRequired
    }
    render() {
        
        return ()
    }
}

export default connect()(Home)