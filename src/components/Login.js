import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Segment,
    Grid,
    Header,
    Image,
    Form,
    Loader,
    Dimmer,
} from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

export class Login extends Component {
    state = {
        loading: false
    }
    handleLoading = () => {
        this.setState({ loading: true })
    }

    render() {
        return (
            <Fragment>
                <Segment.Group>
                    <LoginHeader />
                    <LoginGridLayout
                        image={<BrandImage />}
                        form={<ConnectedLoginForm onLoading={this.handleLoading} />}
                        loading={this.state.loading}
                     />
                </Segment.Group>
                <footer className='footer'>
                    <a href='https://www.freepik.com/free-photos-vectors/design'>
                        Avatar characters created by freepik - www.freepik.com
                    </a>
                </footer>
            </Fragment>
        )
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
    static PropTypes = {
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

export default Login