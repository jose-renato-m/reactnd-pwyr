import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Menu,
    Responsive,
    Image,
    Grid,
    Button,
    Container,
} from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
    handleLogout = e => {
        e.preventDefault()
        this.props.setAuthedUser(null)
    }

    render() {
        const { authedUser, users } = this.props

        return (
            <Container>
                <Responsive as={Menu} minWidth={651} pointing secondary>
                    <Menu.Item name='home' as={NavLink} to='/' exact />
                    <Menu.Item name='new poll' as={NavLink} to='/add' />
                    <Menu.Item name='leader board' as={NavLink} to='/leaderboard' />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <span>
                                <Image
                                    src={users[authedUser].avatarURL}
                                    avatar
                                    spaced='right'
                                    verticalAlign='bottom'
                                 />
                                {users[authedUser].name}
                            </span>
                        </Menu.Item>  
                        <Menu.Item>
                            <Button
                                content='Logout'
                                labelPosition='right'
                                basic
                                compact
                                icon='log out'
                                size='mini'
                                onClick={this.handleLogout}
                             />
                        </Menu.Item>                      
                    </Menu.Menu>
                </Responsive>
                <Responsive as={Fragment} minWidth={375} maxWidth={650}>
                    <Grid columns={2} padded='vertically'>
                        <Grid.Row>
                            <Grid.Column>
                                <Image
                                    src={users[authedUser].avatarURL}
                                    avatar
                                    spaced='right'
                                    verticalAlign='bottom'
                                 />
                                 {users[authedUser].name}
                            </Grid.Column>
                            <Grid.Column verticalAlign='bottom' textAlign='right'>
                                <Button
                                    content='Logout'
                                    labelPosition='right'
                                    basic
                                    compact
                                    icon='log out'
                                    size='mini'
                                    onClick={this.handleLogout}
                                 />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
            </Container>
        )
    }
}

export default connect()(Nav)