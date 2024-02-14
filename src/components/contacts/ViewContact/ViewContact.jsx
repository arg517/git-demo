import React from 'react';
import { Link } from 'react-router-dom';

let ViewContact = () => {
    return (
        <React.Fragment>
            <section className='view-contact-intro p-3'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">View Contact</p>
                            <p className="fst-italic">Here You can see the contact Details</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='view-contact mt-3'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img className='contact-img' src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png" alt="" />
                        </div>
                        <div className="col-md-8">
                            <ul className='list-group'>
                                <li className='list-group-item list-group-item-action'>
                                    Name: <span className='fw-bold'>Harsh</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    Mobile: <span className='fw-bold'>6283625872</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    Email: <span className='fw-bold'>Raj@gmail.com</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    Company: <span className='fw-bold'>Adobe</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    Title: <span className='fw-bold'>SDE</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    Group: <span className='fw-bold'>Friend</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ViewContact;