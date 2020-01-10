import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionView extends Component {
    state = { votedForOption: null, message: { hidden: true, content: '' }}
}

export default connect()(QuestionView)