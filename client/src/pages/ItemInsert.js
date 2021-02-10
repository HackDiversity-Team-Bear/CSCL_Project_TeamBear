import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertSingleItem } from '../actions';
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

    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;

    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
// `;

// const Fieldset = styled.fieldset.attrs({
//     className: 'form-control',
// })`
//     background-color: transparent;
//     border-color: transparent;
//     margin: 1em auto 0.5em;
//     max-width: 50%;
//     min-height: 6em;

//     @media screen and (max-width: 420px) {
//         height: auto;
//         max-width: 75%;
//     }
// `;
//
// const DayInput = styled.input.attrs({
//     className: '',
// })`
//     margin: 5px 5px 5px auto;
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

class ItemInsert extends Component {
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

    handleInsertItem = event => {
        event.preventDefault();

        const {
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
        const item = {isbn, title,author,publication_year,publisher,
            image_url_s,image_url_m,image_url_l,copies,available, };

        this.props.insertSingleItem(item)
            .then(resp => {
                console.log("handleInsertItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item inserted successfully');
                    this.setState({
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
                    });
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                // TODO: pass error object correctly so that things like validation errors can be displayed to user
                window.alert(`There was an error creating the item... :(`);
                console.log("handleInsertItem: err");
                console.log(err);
            })
    }

    render() {
        const {
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

        
        return (
            <Wrapper>
                <Title>Create Item</Title>

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
                <Button onClick={this.handleInsertItem}>Add Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ insertSingleItem }, dispatch);

export default connect(null, mapDispatchToProps)(ItemInsert);
