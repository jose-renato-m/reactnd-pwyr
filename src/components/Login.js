import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Image, Message } from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    state = {
        selectedUser: null,
        message: { hidden: true, content: ''}
    }
    referrer = null

    componentDidMount() {
        const {
            history,
            location: { pathname }
        } = this.props
        this.referrer = pathname
        history.push('/login')
    }

    handleUserSelection = (e, data) => {
        this.setState({ selectedUser: data.value })
    }

    handleUserLogin = () => {
        const { history } = this.props
        if (!this.state.selectedUser) {
            this.setState({
                message: {
                    hidden: false,
                    content: 'Please select a user'
                }
            })
            return
        } else {
            this.setState({
                message: {
                    hidden: true,
                    content: ''
                }
            })
        }

        this.props.setAuthedUser(this.state.selectedUser)
        if (this.referrer === '/logout' || this.referrer === '/login') {
            history.push(this.referrer)
        }
    }

    render() {
        const { users } = this.props
        if (!users) {
            return
        }
        
        const userOptions = Object.keys(users).map((userID) => ({
            key: userID,
            value: userID,
            text: users[userID].name,
            image: { avatar: true, src: users[userID].avatarURL }
        }))

        const { message } = this.state

        return (
            <div className='ui container'>
                <div className='ui middle aligned center aligned grid'>
                    <div className='column' style={{ width: '420px', marginTop: '5em' }}>
                      <Image
                        src='/would-you-rather.png'  
                        style={{
                            position: 'absolute',
                            zIndex: '100'
                            top: '15px',
                            left: '30px',
                            width: '85px'
                        }}
                     />
                     <h2
                        className='ui black image header'
                        style={{ marginLeft: '60px', marginBottom: '30px'}}
                    >
                        <div className='content'>Log-in to your account</div>
                    </h2>
                    <form className='ui large form'>
                        <div className='ui raised segment'>
                            <div className='field'>
                               <Dropdown
                                placeholder='Select a User'
                                fluid
                                selection
                                options={userOptions}
                                onChange={this.handleUserSelection}
                             />
                            </div>
                            <Message hidden={message.hidden} negative>
                                {message.content}
                            </Message>
                            <div className='field'>
                                Select a user from above and click the login button.
                                <br />
                                This is a demo app and doesn't require a password.
                            </div>
                            <div
                                className='ui fluid black submit button'
                                onClick={this.handleUserLogin}
                            >
                                Login
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Login)