import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionNew extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        message: { hidden: true, content: ''}
    }

    handleOnChange = (e, data) => {
        this.setState({ [data.id]: data.value })
    }
}

export default connect() (QuestionNew)