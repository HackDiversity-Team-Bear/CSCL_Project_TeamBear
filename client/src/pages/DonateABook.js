import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

class DonateABook extends Component {

    componentDidMount() {
        console.log("ItemsList: props");
        console.log(this.props);
        // if (((this.props.itemData || {}).items || []).length) return;

        this.props.fetchAllItems()
    }

    handleRemoveItem = data => {
        const itemId = data;

        this.props.deleteSingleItem(itemId)
            .then(resp => {
                console.log("handleRemoveItem: resp");
                console.log(resp);
                this.props.fetchAllItems();
            });
    }

    render() {
        const {
            items,
            loaded,
            loading
        } = this.props.itemData || {};
        console.log(items);

        const columns = [
            {
                Header: 'IMAGE',
                accessor: 'image_s',
                Cell: props => {
                    return (
                        <span data-item-id={props.original.image_url_s}>
                            <img src={props.original.image_url_s}/>
                           
                        </span>
                    )
                }
            },
            {
                Header: 'ISBN',
                accessor: 'isbn',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-item-id={props.original.isbn}>
                            {props.original.isbn}
                        </span>
                    )
                }
            },
            {
                Header: 'TITLE',
                accessor: 'title',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.title}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'AUTHOR',
                accessor: 'author',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.author}>
                            {props.value}
                        </span>
                    );
                }
            },
            
            {
                Header: '',
                accessor: '',
                Cell: props => {
                    return (
                        <Link to="/item/create">

                           Create Book
                           {/* /client/src/pages/ItemInsert.js */}

                        </Link>
                    );
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: props => {
                    return (
                        <Link
                            data-update-id={props.original._id}
                            to={`/item/update/${props.original._id}`}
                        >
                            Add this Book
                            {/* /client/src/pages/ItemUpdate.js */}
                        </Link>
                    );
                },
            },
            
        ];

        return (
            <Wrapper>
                {(
                    (items || []).length > 0 // defeats the purpose of using `isLoading` prop?
                ) ? (
                        <ReactTable
                            data={items}
                            columns={columns}
                            isLoading={(loaded && loading)}
                            defaultPageSize={10}
                            showPageSizeOptions={true}
                            minRows={10}
                        />
                    ) : (
                        `No items to render... :(`
                    )}
            </Wrapper>
        );
    }

}

const mapStateToProps = state => {
    return {
      ...state
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DonateABook);
