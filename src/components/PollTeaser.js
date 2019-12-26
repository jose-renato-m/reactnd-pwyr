import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

export class PollTeaser extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        unanswered: PropTypes.bool.isRequired,
    }
    state = {
        viewPoll: false
    }
    handleClick = e => {
        this.setState(prevState => ({
            viewPoll: !prevState.viewPoll
        }))
    }
    render() {
        const { question, unanswered } = this.props
        const buttonColor = unanswered === true ? colors.green : colors.blue
    }
}

export default PollTeaser