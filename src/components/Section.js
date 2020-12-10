import React from 'react'
import MenuLists from './MenuLists';

const Section = ({ phone, name, imageText, title, text}) => {
    return (
        <div className="section-container">
            <div className={name}>
                <div className="ptext">
                    <span className="border">
                        {imageText}
                    </span>
                </div>
            </div>
            <section className="section section-light">
                <h2>{title}</h2>
                <p>{text}</p>
                { name === 'pimg2' ? <MenuLists /> : '' }
            </section>
        </div>
    )
}

export default Section;