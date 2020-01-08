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
        
    }
}

const LoginHeader = () => (
    <Header as='h4' block attached='top' textAlign='center'>
        <Header.Content>Welcome to Would You Rather App!</Header.Content>
        <Header.Subheader>Please sign in to continue</Header.Subheader>
    </Header>
)

const LoginGridLayout = ({ image, form, loading }) => (
    <div>
        <Grid padded textAlign='center'>
            <Grid.Row className='login'>
                <Grid.Column width={16}>
                    {loading === true && (
                        <Dimmer active inverted>
                            <Loader inverted content='Loading' />
                        </Dimmer>
                    )}
                    {image}
                    <br />
                    {form}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

const BrandImage = () => (
    <Image src='https://www.stickpng.com/img/icons-logos-emojis/tech-companies/redux-logo' />
)

class LoginForm extends Component {
    static propTypes = {
        onLoading: PropTypes.func.isRequired
    }
    state = {
        value: ''
    }
    onChange = (e, { value }) => {
        this.setState({ value })
    }
    handleSubmit = e => {
        e.preventDefault()
        const { onLoading, setAuthedUser } = this.props
        const authedUser = this.state.value
        
        new Promise((res, rej) => {
            onLoading()
            setTimeout(() => res(), 500)
        }).then(() => setAuthedUser(authedUser))
    }
    generateDropdownData = () => {
        const { users } = this.props

        return users.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: { avatar: true, src: user.avatarURL }
        }))
    }
    render() {
        const { value } = this.state
        const disabled = value === '' ? true : false

        return (
            <Form onSubmit={this.handleSubmit}>
                <Header as='h2' color='green'>
                    Sign In
                </Header>
                <Form.Dropdown
                    placeholder='Select a Person'
                    fluid
                    selection
                    scrolling
                    options={this.generateDropdownData()}
                    value={value}
                    onChange={this.onChange}
                    required
                 />
                <Form.Button content='Login' positive disabled={disabled} fluid />
            </Form>
        )
    }
}

const ConnectedLoginForm = connect(
    mapStateToProps,
    { setAuthedUser }
)(LoginForm)

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

export default Login