import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionList extends Component {
    cardItemsPerRow = 2

    getCardsFromQuestions = (filterLogic) => {
        const { questions, users } = this.props        
    }
}

export default connect()(QuestionList)