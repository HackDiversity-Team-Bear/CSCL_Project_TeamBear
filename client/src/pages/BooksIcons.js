import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div.attrs({
    className: 'container1',
})`
    margin-left:auto;
    margin-right:auto;
    width:1600px;
    height:100%;
`;

const Container2 = styled.div.attrs({
    classname: 'bookdiv',
})`
    height:500px;
    width:400px;
    float:left;
`;

const BookDiv = styled.div.attrs({
    className: 'container2',
})`
    margin-left:auto;
    margin-right:auto;
    width:300px;
    height:470px;
    padding-top:40px;
    background-color:#EBEBEB;
`;

const Title = styled.div.attrs({
    className: 'title',
})`
    display: flex;
    align-items: center; /* vertical */
    justify-content: center; /* horizontal */
    font-size:20px;
    font-family: Roboto;
    width:300px;
    height:130px;
    text-decoration:none;
`

const Book = props => (
    <Container2>
        <BookDiv>
            <Link to = {`/items${props.book._id}`}>
                <img src = {props.book.image_url_l} style = {{ width: 200, height: 300 }} ></img>
            </Link>
            <Title>
                <Link to = {`/items${props.book._id}`}>
                    {props.book.title}
                </Link>
            </Title>
        </BookDiv>
    </Container2>
)

class ViewBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/items/')
            .then(response => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    bookList(){
        return this.state.books.map(currentBook => {
            return <Book book = {currentBook} key = {currentBook._id}/>;
        })
    }

    render() {
        return (
            <Container>
                <h1><b>Available Books</b></h1>
                <br></br>
                <div>
                    {this.bookList()}
                </div>
            </Container>
        )
    }
}

export default ViewBooks;