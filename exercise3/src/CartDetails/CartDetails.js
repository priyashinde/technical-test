import React, { Component } from 'react';
import '../CartDetails/CartDetails.css';


class CartDetails extends Component {
    state = {}
    render() {        
        return (
            <React.Fragment>
                <div className='dummy'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='leftWrapper'>
                                <p className='bold'>Cancel recall payment, GBP 1,000.00</p>
                                <p className='mb-3 subtext'>1234567890123456(GB) KUIML Buisness company</p>
                                <ul className="myList">
                                    <li>Request reference <span>SET29383ABCH</span></li>
                                    <li>Category <span>Payment</span></li>
                                    <li>Request Status <span>Pending authorization</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='actionsWrapper'>
                                <ul className='d-flex justify-content-end'>
                                    <li>
                                        <i className=" fa fa-print" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-save mr-2" aria-hidden="true"></i>
                                    </li>
                                    <li > <button>Reject</button></li>
                                    <li><button className='primary'>Authorize</button></li>
                                </ul>
                                <div className='d-flex justify-content-end mt-5'>
                                    <a href="#">Full Details</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CartDetails;