import React from 'react';

export default function ProductCard(props: any) {

    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>Price: {props.price}</p>
        </div>
    )
}