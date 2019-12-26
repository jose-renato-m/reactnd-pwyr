import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

export class Home extends Component {
    static propTypes = {
        userQuestionData: PropTypes.object.isRequired
    }
    render() {
        const { userQuestionData } = this.props

        return ()
    }
}

export default connect()(Home)