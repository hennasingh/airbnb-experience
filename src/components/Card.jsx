import React from 'react';
import star from '../imgs/star.png'

export default function Card(props) {

    return(
        <div className='card'>
            {props.openSpots === 0 && <div className='card-badge'>SOLD OUT</div>}
            <img className='card-img' src= {props.img} />
            <div className="card-stats">
                <img src= {star} className="card-star" />
                <span>{props.rating} </span>
                <span className="gray"> ({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price">
                <span className="bold">From ${props.price}</span> / person
            </p>

        </div>
    );
}