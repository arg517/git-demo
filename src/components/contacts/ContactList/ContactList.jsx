import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactService } from '../../../services/ContactService';
import Spinner from "../../Spinner/Spinner";


let ContactList = () => {
    let [state, setState] = useState({
        loading: false,
        contacts: [],
        errorMessage: ''
    });

    useEffect(async () => {
        try {
            setState({ ...state, loading: true });
            let response = await ContactService.getAllContacts();
            setState({
                ...state,
                loading: false,
                contacts: response.data
            })
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });
        }
    }, []);

    let { loading, contacts, errorMessage } = state;


    return (
        <React.Fragment>
            <section className='contact-search p-4'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col'>
                                <p className="h3 fw-bold">Phone Dir
                                    <Link to={'/contacts/add'} className='btn btn-primary ms-2'>
                                        <i className='fa fa-plus-circle me-2' />
                                        New</Link>
                                </p>
                                <p className='fst-italic'>Here You can Add new contacts ...</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className='row' action="">
                                    <div className="col">
                                        <div className='mb-2'>
                                            <input type="text" className='form-control' placeholder='search Names' />
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type="submit" className='btn btn-outline-dark' placeholder='search Names' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                loading ? <Spinner /> : <React.Fragment>
                    <section className='contact-list'>
                        <div className='container'>
                            <div className='row'>
                                {
                                    contacts.length > 0 &&
                                    contacts.map((contact) => {
                                        return (
                                            <div className='col-md-6'>
                                                <div className='card'>
                                                    <div className='card-body'>
                                                        <div className="row align-items-center d-flex justify-content-around">
                                                            <div className="col-md-4">
                                                                <img className='contact-img' src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png" alt="" />
                                                            </div>
                                                            <div className="col-md-7">
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
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                                <Link className='btn btn-warning my-1' to={`/contacts/view/:contactId`}>
                                                                    <i className='fa fa-eye' />
                                                                </Link>
                                                                <Link className='btn btn-primary my-1' to={`/contacts/edit/:contactId`}>
                                                                    <i className='fa fa-pen' />
                                                                </Link>
                                                                <Link className='btn btn-danger my-1' to={`/contacts/view/:contactId`}>
                                                                    <i className='fa fa-trash' />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </section>
                </React.Fragment>
            }

        </React.Fragment>
    )
}

export default ContactList;