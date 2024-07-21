import React from 'react'
import './footer.css'
import { FaHeadphonesAlt, FaPiggyBank, FaShippingFast, FaWallet } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='left-box'>
                        <div className='box'>
                            <div className='icon-box'>
                            <FaPiggyBank />   
                            </div>
                            <div className='detail'>
                                <h3>Great Saving </h3>
                                <p>Greating saving buy as soon as possible </p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon-box'>
                            <FaShippingFast />   
                            </div>
                            <div className='detail'>
                                <h3>Free delivery</h3>
                                <p>Greating saving buy as soon as possible </p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon-box'>
                            <FaHeadphonesAlt />   
                            </div>
                            <div className='detail'>
                                <h3>24X7 support</h3>
                                <p>Greating saving buy as soon as possible </p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon-box'>
                            <FaWallet />   
                            </div>
                            <div className='detail'>
                                <h3>money back </h3>
                                <p>Greating saving buy as soon as possible </p>
                            </div>
                        </div>
                    </div>
                    <div className='right-box'>
                        <div className='header'>
                                 <img src='image/logo.png' alt='' height='100px'></img>
                                 <p>lorem ipsum dolar sit amet, consectetur nuliscing elit. Duis faucibus ipsum id sem pdlconswqual text.</p>
                        </div>
                        <div className='bottom'>
                           <div className='box'>
                                       <h3>Your Account</h3>
                                       <ul>
                                        <li>About us</li>
                                        <li>Account</li>
                                        <li>Payment</li>
                                        <li>Sales</li>
                                        </ul>
                           </div>
                           <div className='box'>
                                       <h3>Products</h3>
                                       <ul>
                                        <li>delivery</li>
                                        <li>Track Order</li>
                                        <li>New Product</li>
                                        <li>Old Product</li>
                                        </ul>
                           </div>
                             
                           <div className='box'>
                                       <h3>Contact us</h3>
                                       <ul>
                                        <li>Hig-27, Ayodhya Nagar Bhopal</li>
                                        <li>+91 88784026##</li>
                                        <li>xyz@gmail.com</li>
                                        </ul>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer