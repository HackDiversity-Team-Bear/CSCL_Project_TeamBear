import React, { Component } from 'react';
import styled from 'styled-components';

import Links from './Links';

const Container = styled.div.attrs({
    className: 'container',
})`
    max-width: 100%;
    padding-left: 0px;
    padding-right: 0px;
`;

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
max-width: 100%;
padding-left: 20px;
padding-right: 0px;
color: 'red';

    
`;

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Links />
                </Nav>
            </Container>
        );
    }
}

export default NavBar;
