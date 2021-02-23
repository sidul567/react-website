import React from 'react'
import web from '../src/img/undraw_maker_launch_crhe.svg'
import { NavLink } from 'react-router-dom';
import Common from './Common';

function Home() {
    return (
        <Common
            name = "Grow your business with "
            imgSrc = {web}
            visit = "/service"
            contact = "Get Started"
        />
    )
}
{/* <div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto">
            
        </div>
    </div>
</div> */}
export default Home
