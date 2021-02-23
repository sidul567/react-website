import React from 'react'
import { NavLink } from 'react-router-dom';
function Common(props) {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row pb-3">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-conter flex-column">
                                <h1>{props.name}<strong className="brand-name">SidulMoon</strong></h1>
                                <h2 className="mt-3">
                                    We are the team of talented developer making website.
                                </h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">
                                        {props.contact}
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgSrc} className="img-fluid" alt="home img"/>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Common
