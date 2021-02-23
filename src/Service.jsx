import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

function Service() {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1> 
        </div>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Sdata.map((data,index)=>(
                                <Card
                                    imgSrc = {data.imgSrc}
                                    title = {data.title}
                                    key = {index}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        </> 
    )
}

export default Service
