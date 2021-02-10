import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Donateabook = styled.div.attrs({
    className: "donate-a-book-btn"
})`
  color: #ff0000;
  cursor: pointer;
`;

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`
const Label = styled.label`
    margin: 5px;
`


class DonateABook extends Component {
    

    render() {
        return <Button onClick={this.props.onClick}>DonateABook</Button>;
    }
}

DonateABook.propTypes = {
    id: PropTypes.string,
};

export default DonateABook;