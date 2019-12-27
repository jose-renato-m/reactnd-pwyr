import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class PollQuestion extends Component {
    static propTypes = {
        authedUser: PropTypes.string.isRequired        
    }
}

export default connect()(PollQuestion)