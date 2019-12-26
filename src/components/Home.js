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
                    
                </Tab.Pane>
            )
        }
    ]
}

export default connect()(Home)