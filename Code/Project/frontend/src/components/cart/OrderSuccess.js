import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData' 

const OrderSuccess = () => {
    return (
        <Fragment>

            <MetaData title={'Order Success'}/>

            <div className="row justify-content-center">
                <div className="col-6 mt-5 text-center">
                    <img className="my-5 img-fluid d-block mx-auto" src="/images/order_success.png" width="200" height="200"
                    alt="Order Success"
                    />

                    <h2>Your Order has been placed Successfully.</h2>

                    <Link to="/order/me">Go to Orders</Link>
                </div>
            </div>
            
        </Fragment>
    )
}

export default OrderSuccess
