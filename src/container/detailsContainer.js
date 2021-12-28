import {React, useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import './detail.css';
import deliveryOption from '../data/delivery';
import paymentOption from '../data/payment';
import { Stepper, Step} from 'react-form-stepper';
import {useNavigate} from "react-router-dom";

function Detail(){
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const [checkbox, setCheck] = useState(false);
    const [goSteps, setGoSteps] = useState(0);
    const [paymentValue, setPayment] = useState("");
    const [deliveryValue, setDelivery] = useState("");
    const history = useNavigate();
    let random = require('random-string-alphanumeric-generator');
    let r = random.randomAlphanumeric(5, "uppercase")
    const [value, setValue] = useState({email:''});

    const onSubmit = data => console.log(data);
    console.log(errors);
  

    // const {} = formState;
    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        setValue((prev) => ({...prev, [name]: value}));
    }
   
    useEffect(()=>{
        window.localStorage.setItem("details", JSON.stringify(value));
    });
    return (
        <>
        {/* STEPPER */}
        <div className="">
            <Stepper                                    
                activeStep={goSteps}
                styleConfig={{
                    activeBgColor:'#FABB51',
                    activeTextColor:'#FFFFF',
                    completedBgColor:'#FABB51',
                }}
                connectorStyleConfig={{
                    disabledColor:'#bdbdbd',
                    activeColor:'#f0f8ff',
                    completedColor:'#1976D2',
                    size:2,        
                }}  
            >
                <Step                                        
                    label="Delivery"
                    onClick={() => setGoSteps(0)}
                />                                      
                <Step onClick={() => setGoSteps(1)} label="Payment"/>
                <Step onClick={() => setGoSteps(2)} label="Finish" />
            </Stepper> 
        </div>
        {/* Back Button */}
        <div className='back' onClick={() => history(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <p>Back to cart</p>   
        </div>
        {/* MAIN LAYOUT*/}
        <div id='container'>
            {/* LEFT PAGE */}
            <div className='left-side'>
                {goSteps === 0 && (
                <div>
                    <div id='delivery-detail'>
                        <h1>Delivery details</h1>
                        <label>
                        <input type="checkbox" classsName="check-drop" onClick={()=> setCheck(!checkbox)}/><span>Send as dropshipper</span>
                        </label>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div id='general'>
                            <div className='input'>
                                <input          
                                type="email"
                                className='input'
                                onChange={handleChange}
                                required
                                {...register("email",{ 
                                pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email Must be Valid',
                                }})}
                                onKeyUp = {()=>{
                                trigger("email");
                                }}
                                placeholder="Email"
                                label="email"
                                name="email"
                                // value={value}
                                />
                                {
                                errors.email && (<p className='error'>{errors.email.message}</p>)
                                }
                            </div>
                            <div className='input'>
                                <input
                                type="tel"
                                // value="email"
                                placeholder="Phone Number"
                                label="phone"
                                name="phone"
                                // value={value}
                                onChange={handleChange}
                                required
                                {...register("phone",{minLength: {
                                value: 6,
                                message: 'Phone number min 6 digit and max 20 digit',
                                },maxLength:{
                                value:20,
                                message: 'Phone number must be less than 20 digit'
                                },
                                pattern: {
                                value: /^[0][0-9\b]+$/,
                                message: 'Must start with 0',
                                }
                            })}
                                onKeyUp = {()=>{
                                trigger("phone");
                                }}
                                />
                                {
                                errors.phone && <p className='error'>{errors.phone.message}</p>
                                }
                            </div>
                            
                            <div className='input'>
                                <input
                                type="textarea"
                                name='address'
                                // value={value}
                                onChange={handleChange}
                                required
                                placeholder="Delivery Address"
                                {...register("address",{maxLength:{
                                value:20,
                                message: 'Max 120 characters'
                                },
                            })}
                                onKeyUp = {()=>{
                                trigger("address");
                                }}
                                />
                                {
                                errors.address && (<p className='error'>{errors.address.message}</p>)
                                }
                            </div>
                        </div>

                        {/* DROPSHIP */}
                        {checkbox === true ?
                        <div className='dropship'>
                            <div className='input'>
                                <input
                                type="text"
                                placeholder="Dropshipper name"
                                label="dropship"
                                name="dropship"
                                // value={value}
                                onChange={handleChange}
                                required
                                {...register("dropship",{minLength: 5})}
                                />
                                {
                                    errors.dropship && (<p className='error'>{errors.dropship.message}</p>)
                                }
                            </div>
                            <div className='input'>
                                <input
                                    type="text"
                                    placeholder="Dropshipper phone number"
                                    label="drophone"
                                    name="dropphone"
                                    // value={value}
                                    onChange={handleChange}
                                    required
                                    {...register("dropphone",{minLength: {
                                        value: 6,
                                        message: 'Phone number min 6 digit and max 20 digit',
                                    },maxLength:{
                                        value:20,
                                        message: 'Phone number must be less than 20 digit'
                                    },
                                    pattern: {
                                        value: /^[0][0-9\b]+$/,
                                        message: 'Must start with 0',
                                    }
                                    })}
                                    onKeyUp = {()=>{
                                        trigger("dropphone");
                                    }}
                                />
                                {
                                    errors.dropphone && (<p className='error'>{errors.dropphone.message}</p>)
                                }
                            </div>
                        </div> 
                            :   
                        <div className='dropship'>
                            <div>
                                <input
                                type="text"
                                // value="email"
                                placeholder="Dropshipper name"
                                label="dropship"
                                name="dropship"
                                disabled
                                {...register("Mobile number",{required: true, minLength: 5})}
                                />
                            </div>
                            <div>
                                <input
                                type="text"
                                // value="email"
                                placeholder="Dropshipper phone number"
                                label="drophone"
                                name="dropphone"
                                disabled
                                />
                            </div>
                        </div>
                        }  
                    </form>
                </div>
            )}
                {goSteps === 1 && (

                // <div className='base'>
                    <div>
                            <h1>Shipment</h1>
                            <div className='box'>
                                {deliveryOption.map((d,idx)=>(
                                    <div className='list'>
                                        <input id={d.id} type="radio" name="delivery" value={d.estimate + ' by ' + d.value} onChange={(e)=>{setDelivery(e.target.value)}}/>
                                        <label htmlFor="delivery" className='delivery'>
                                            <h6>{d.value}</h6>
                                            <p>{d.price}</p>                              
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <h1>Payment</h1>
                            <div className='box'>
                                {paymentOption.map((p,idx)=>(
                                    <div className='list'>
                                        <input id={p.id} type="radio" name="payment" value={p.value} onChange={(e)=>{setPayment(e.target.value)}}/>
                                        <label htmlFor="delivery" className='payment'>
                                            <h6>{p.value}</h6>
                                            <p>{p.price}</p>                              
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div> 
                        
                // </div> 
            )}
            {goSteps===2 &&(
                // <div className='base'>
                <div id='p3'>
                        <h1>Thank you</h1>
                        <h4>Order ID : {r}</h4>
                        <h5>Your order will delivered {deliveryValue}</h5>
                        <a href="/">
                        <div className='back'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLineCap ="round" strokeLineJoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                            <p>Go to homepage</p>   
                        </div>
                        </a>
                </div> 
                    
            // </div> 
            )}
            </div>
        {/* Sidebar */}
            <div className="side">
                <h1 id="title">Summary</h1>
                <p>10 items purchased</p>
                {goSteps === 1 &&
                <div id="delivery">
                    <p>Delivery estimation : </p>
                    <h3 className="highlight">{deliveryValue}</h3>
                </div>
                } 
                {/* {goSteps === 2 && */}
                <div id='payment'>
                    <p>Payment Method :</p>
                    <h3 className="highlight">{paymentValue}</h3>
                </div>
                {/* } */}
            
                <div id="detail">
                    <div className='left'>
                        <p>Cost of goods</p>
                        <p>Dropshipping fee</p> 
                        <p>GO-SEND shipment</p>
                        <h2>Total</h2>
                    </div>
                    <div className='right'>
                        <p>500,000</p> 
                        <p>5,900</p> 
                        <p>15,000</p> 
                        <h2>505,900</h2> 
                    </div>
                </div> 
                {goSteps === 0 && (
                    <button type="submit" onClick={() => setGoSteps(1)}><h4>Continue to Payment</h4></button>
                )}
                {goSteps === 1 && (
                    <button type="submit" onClick={() => setGoSteps(2)}><h4>Payment with {paymentValue}</h4></button>
                )}
            </div>
        </div>
        </>
    )
}

export default Detail;
