import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleItem, updateSingleItem } from '../actions';
//import { shared } from '../constants';

import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})``;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-top: 0 30px;
`;

const Label = styled.label`
    margin: 5px;
    max-width: 30%;
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;
`;

// const Fieldset = styled.fieldset.attrs({
//     className: 'form-control',
// })`
//     border-color: transparent;
//     margin: 1em auto 0.5em;
//     max-width: 50%;
//     min-height: 6em;
// `;

// const DayInput = styled.input.attrs({
//     className: '',
// })`
//     margin: 5px auto;
//     text-align: center;
// `;

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
  margin: 15px 15px 15px 5px;
`;

class ItemUpdate extends Component {
    constructor(props) {
        /**
         * Currently deprecated and now known as the "legacy context":
         * - https://reactjs.org/docs/legacy-context.html
         *
         * TODO: refactor to use new Context API:
         * - https://reactjs.org/docs/context.html
         */
        super(props);
        this.state = {
            _id: '',
            isbn: '',
            title: '',
            author: '',
            publication_year: '',
            publisher: '',
            image_url_s: '',
            image_url_m: '',
            image_url_l: '',
            copies: '',
            available: '',
        };
    }

    componentDidMount() {
        this.props.fetchSingleItem(this.props.itemId)
            .then(resp => {
                const { item } = resp.data;
                this.setState({ ...item });
            });
    }

    handleChangeInputIsbn = async event => {
        const isbn = event.target.value;
        this.setState({ isbn });
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value;
        this.setState({ title });
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value;
        this.setState({ author });
    }

    handleChangeInputPublication_year = async event => {
        const publication_year = event.target.value;
        this.setState({ publication_year });
    }

    handleChangeInputPublisher = async event => {
        const publisher = event.target.value;
        this.setState({ publisher });
    }

    handleChangeInputImage_url_s = async event => {
        const image_url_s = event.target.value;
        this.setState({ image_url_s });
    }

    handleChangeInputImage_url_m = async event => {
        const image_url_m = event.target.value;
        this.setState({ image_url_m });
    }

    handleChangeInputImage_url_l = async event => {
        const image_url_l = event.target.value;
        this.setState({ image_url_l });
    }

    handleChangeInputCopies = async event => {
        const copies = event.target.value;
        this.setState({ copies });
    }
    
    handleChangeInputAvailable = async event => {
        const available = event.target.value;
        this.setState({ available });
    }

    handleUpdateItem = event => {
        const {
            _id,
            isbn,
            title,
            author,
            publication_year,
            publisher,
            image_url_s,
            image_url_m,
            image_url_l,
            copies,
            available,
        } = this.state;
        const item = { _id, isbn, title,author,publication_year,publisher,
            image_url_s,image_url_m,image_url_l,copies,available, };

        return this.props.updateSingleItem(item)
            .then(resp => {
                console.log("handleUpdateItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item updated successfully');
                    return true;
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                window.alert(`There was an error updating the item... :(`);
                console.error("handleUpdateItem: err");
                console.error(err);
            });
    }

    confirmUpdateItem = event => {
        if (window.confirm(`Are you sure you want to update this item? ${this.state._id}`)) {
            return this.handleUpdateItem(event);
        }
    }

    render() {
        const {
            _id,
            isbn,
            title,
            author,
            publication_year,
            publisher,
            image_url_s,
            image_url_m,
            image_url_l,
            copies,
            available
        } = this.state;

        return _id && (
            <Wrapper>
                <Title>Update Book</Title>

                <Label>ISBN: </Label>
                <InputText
                    type="text"
                    value={isbn}
                    onChange={this.handleChangeInputIsbn}
                />  

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>Author: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.handleChangeInputAuthor}
                />  

                <Label>Publication year: </Label>
                <InputText
                    type="number"
                    value={publication_year}
                    onChange={this.handleChangeInputPublication_year}
                />

                <Label>Publisher: </Label>
                <InputText
                    type="text"
                    value={publisher}
                    onChange={this.handleChangeInputPublisher}
                />

                <Label>small image url: </Label>
                <InputText
                    type="text"
                    value={image_url_s}
                    onChange={this.handleChangeInputImage_url_s}
                />

                <Label>medium image url: </Label>
                <InputText
                    type="text"
                    value={image_url_m}
                    onChange={this.handleChangeInputImage_url_m}
                />

                <Label>large image url: </Label>
                <InputText
                    type="text"
                    value={image_url_l}
                    onChange={this.handleChangeInputImage_url_l}
                />

                <Label>Copies of Book: </Label>
                <InputText
                    type="number"
                    value={copies}
                    onChange={this.handleChangeInputCopies}
                /> 

                <Label>Available: </Label>
                <InputText
                    type="number"
                    value={available}
                    onChange={this.handleChangeInputAvailable}
                />

                <Button onClick={this.confirmUpdateItem}>Update Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        itemId: ownProps.match.params.id,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSingleItem, updateSingleItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemUpdate);
