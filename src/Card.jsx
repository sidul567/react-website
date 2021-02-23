import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imgSrc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/service" className="btn btn-warning" id="btnWarning">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card
