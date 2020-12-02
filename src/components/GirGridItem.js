import React from 'react'

export const GirGridItem = ({ title, url }) => {

    return (
        <div className="card">
            <img src={url} />
            <p>{title}</p>
        </div>
    )
}
