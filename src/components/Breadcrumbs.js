import React from 'react'

const Breadcrumbs = ({text1, text2}) => {
    return (
        <div className="ptext">
            <span className="breadcrumbs">
                <a href="#menu-list-container">
                    {text1}
                </a>
                <span> ∙ </span>
                <a href="#discover-tessio">
                    {text2}
                </a>
            </span>
        </div>
    )
}

export default Breadcrumbs;