import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PollQuestion from './PollQuestion'
import PollResult from './PollResult'
import PollTeaser from './PollTeaser'
import { colors } from '../utils/supports'

export class UserCard extends Component {
    static propTypes = {
        question: PropTypes.object,
        author: PropTypes.object,
        pollType: PropTypes.string,
        unanswered: PropTypes.bool,
        question_id: PropTypes.string,
    }
    render() {
        
    }
}

export default connect()(UserCard)