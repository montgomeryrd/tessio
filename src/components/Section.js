import React from 'react'
import DiscoverTessio from './DiscoverTessio';
import MenuLists from './MenuLists';

const Section = ({ breadcrumbOne, breadcrumbTwo, imageText, name, pagination, title, text}) => {

    return (
        <div className="section-container">
            <div className={name}>
                <div className="ptext">
                    <span className="border" id={pagination}>
                        {imageText}
                    </span>
                    <div className="ptext">
                        <span className="breadcrumbs">
                            <a href="#menu-list-container">
                                {breadcrumbOne}
                            </a>
                            { name === 'pimg1' ? <span> ∙ </span> : '' }
                            <a href="#discover-tessio">
                                {breadcrumbTwo}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <section className="section section-light">
                <h2>{title}</h2>
                <p>{text}</p>
                { name === 'pimg2' ? <MenuLists /> : '' }
                { name === 'pimg3' ? <DiscoverTessio /> : ''}
            </section>
        </div>
    )
}

export default Section;