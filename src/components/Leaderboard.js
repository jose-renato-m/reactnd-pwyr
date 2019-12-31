import React, { Component, Fragment } from 'react'
import PropType from 'prop-types'
import { connect } from 'react-redux'
import {
    Segment,
    Grid,
    Header,
    Image,
    Label,
    Divider,
} from 'semantic-ui-react'

export class Leaderboard extends Component {
    static propType = {
        leaderboardData: PropType.array.isRequired
    }
    render() {
        const { leaderboardData } = this.props

        return (

        )
    }
}

export default connect()(Leaderboard)