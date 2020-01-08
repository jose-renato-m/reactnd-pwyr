import React, { Component } from 'react'

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>Page Not Found!</h1>
                <p>Sorry the page could not be found.</p>
            </div>
            <Container textAlign='center'>
                <Header as='h3'>No Match 404 Error</Header>
                <p>Nothing to see here. Please use the menu to try again.</p>
            </Container>
        )
    }
}

export default PageNotFound