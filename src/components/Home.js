import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'
import { UserCard } from './UserCard'

export class Home extends Component {
    static propTypes = {
        userQuestionData: PropTypes.object.isRequired
    }
    render() {
        const { userQuestionData } = this.props

        return <Tab panes={panes({ userQuestionData })} className='tab' />
    }
}

const panes = props => {
    const { userQuestionData } = props
    return [
        {
            menuItem: 'Unanswered',
            render: () => (
                <Tab.Pane>
                    {userQuestionData.answered.map((question) => (
                        <UserCard
                            key={question.id}
                            question_id={question.id}
                            unanswered={true}
                         />
                    ))}
                </Tab.Pane>
            )
        },
        {
            menuItem: 'Answered',
            render: () => (
               <Tab.Pane>
                   {userQuestionData.unanswered.map((question) => (
                       <UserCard
                            key={question.id}
                            question_id={question.id}
                            unanswered={false}
                         />
                   ))}
               </Tab.Pane>
            )
        }
    ]
}

function mapStateToProps({ authedUser, users, questions }) {

}

export default connect()(Home)