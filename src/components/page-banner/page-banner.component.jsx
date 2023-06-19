import React from 'react';
import './page-banner.styles.scss';

const PageBanner = ({ bannerText = 'Have a look around!', bannerImg }) => {
    return (
        <div className="banner fadeIn d-flex flex-column p-4 justify-content-center align-items-center"
            style={{backgroundImage: `url(${bannerImg})`}}
        >
            <h1>{bannerText}</h1>
        </div>
    );
};

export default PageBanner;
