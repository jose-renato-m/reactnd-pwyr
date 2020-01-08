import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Card,
    Image,
    Label,
    Menu,
    Tab,
} from 'semantic-ui-react'

class QuestionList extends Component {
    cardItemsPerRow = 2

    getCardsFromQuestions = (filterLogic) => {
        const { questions, users } = this.props
        const cards = Object.keys(questions)
            .filter(filterLogic)
            .map((qid) => {
                const question = questions[qid]
                const user = users[question.author]
                return (
                    
                )
            })        
    }
}

export default connect()(QuestionList)