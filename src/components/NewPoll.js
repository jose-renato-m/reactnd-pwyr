import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Segment,
    Header,
    Grid,
    Divider,
    Form,
    Dimmer,
    Loader,
} from 'semantic-ui-react'
import { handleSaveQuestion } from '../actions/questions'

export class NewPoll extends Component {
    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        handleSaveQuestion: PropTypes.func.isRequired,
    }    
}

export default connect()(NewPoll)