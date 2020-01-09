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

    handleClick = async () => {
        
    }
}

export default connect() (QuestionNew)