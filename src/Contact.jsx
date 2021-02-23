import React, { useState } from 'react'

function Contact() {

    const[data,setData] = useState({
        fullname : "",
        email : "",
        phone : "",
        message : ""
    })

    const inputEvent = (e)=>{
        const{name,value} = e.target;
        setData((prev)=>{
            return{
                ...prev,
                [name] : value,
            }
        })
    }

    const formSubmit = (e)=>{
        e.preventDefault()
        alert(`My name is ${data.fullname}.My phone number is ${data.phone} and email is ${data.email}.I said to you ${data.message}`)
    }
    console.log(data.fullname);
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row pb-3">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input onChange={inputEvent} value={data.fullname} name="fullname" type="text" placeholder="Enter your Fullname" className="form-control" id="exampleFormControlInput1"/>
                                <label className="form-label">Phone Number</label>
                                <input onChange={inputEvent} value={data.phone} name="phone" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone Number"/>
                                <label className="form-label">Email address</label>
                                <input onChange={inputEvent} value={data.email} name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email address"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mesasge</label>
                                <textarea onChange={inputEvent} value={data.message} name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="w-100 btn btn-outline-info" type="submit">Submit form</button>
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
