import React from 'react'
import web from '../src/img/undraw_hang_out_h9ud.svg'
import Common from './Common';

function About() {
    return (
        <Common
            name = "Welcome to About Page "
            imgSrc = {web}
            visit = "/contact"
            contact = "Contact Now"
        />
    )
}

export default About
