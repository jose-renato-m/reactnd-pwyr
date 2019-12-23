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

const LoginHeader = 

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

export default Login