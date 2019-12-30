import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'

export class NewPoll extends Component {
    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        handleSaveQuestion: PropTypes.func.isRequired,
    }
}

export default connect()(NewPoll)