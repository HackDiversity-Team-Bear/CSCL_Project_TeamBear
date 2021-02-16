import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

const HomeWrapper = styled.div``;

const Collapse = styled.div.attrs({
    // className: 'collapse navbar-collapse',
})`
    @media screen and (max-width: 420px) {
        display: flex;
        flex-grow: 1;
    }
`;

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
    @media screen and (max-width: 420px) {
        flex-direction: row;
        justify-content: space-between;
        /* justify-content: flex-start; */
        width: 100%;
    }
`;

const Item = styled.div.attrs({
    // className: 'collapse navbar-collapse',
})`
    @media screen and (max-width: 420px) {
        /* margin-right: 2em; */
    }
`;

const homeStyles = {
    marginLeft: `0em`
};

const logoStyles = {
    height: '80px',
    width: '80px',
};

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`;

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                 <Logo logoStyles={logoStyles} />
                <HomeWrapper>
                   
                    <Link to="/" className="navbar-brand" style={homeStyles}>
                        <Button>Home</Button>
                    </Link>
                </HomeWrapper>
                <Collapse>
                    <List>
                        
                        {/* <Item>
                            <Link
                                to="/items"
                                className="nav-link"
                            >
                                Items
                            </Link>
                        </Item> */}
                        {/* <Item>
                            <Link to="/item/create" className="nav-link">

                                <Button >Create Book ( ItemInsert)</Button>  

                            </Link>
                        </Item> */}

                        <Item>
                            <Link to="/item/donate" className="nav-link">
                            
                                <Button >DONATE A BOOK</Button> 

                            </Link>
                        </Item>

                        <Item>
                            <Link to="/item/donate" className="nav-link">
                            
                                <Button >RETURN A BOOK</Button> 

                            </Link>
                        </Item>

                        <Item>
                            <Link to="/books/icons" className="nav-link" >
                            
                                <Button >PICK A BOOK</Button> 

                            </Link>
                        </Item>


                       




                        
                    </List>
                </Collapse>


                        <Item>
                            <Link to="/items/react-table-v6" className="nav-link">
                                
                                <Button >ADMIN</Button>

                            </Link>
                        </Item>


            </React.Fragment>
        );
    }
}

export default Links;
