/* eslint-disable semi */
import React from 'react';
import Logo from './Logo';
import pic from '../styles/assets/cutelibrary.jpg';

const PageLayout = () =>
    <div className="page-layout--header" style={{
                backgroundImage:`url(${pic})`
            }}>
        <div className="page-layout--details">
            <h1 className="page-layout--name">Here will be  CSCL WebPage</h1>
            <p className="page-layout--description">
                A simple CRUD app built using the&nbsp;
                <a href="https://www.educative.io/edpresso/what-is-mern-stack" target="_blank" rel="noopener noreferrer">MERN&nbsp;tech-stack</a>.
            </p>
        </div>
        {/*  here was Big React logo, changed to library picture. Need to change to background picture*/}
        {/* <Logo /> */}
    </div>

export default PageLayout;
