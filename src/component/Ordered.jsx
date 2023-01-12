import React from "react"
import {context} from "../Context"
import { useState , useContext} from 'react'



function Ordered(props){

    const{naira} = useContext(context)
    return(
        <div>
            {
                props.amountOrdered>0&&
        
<div className="order">

   <div className="ordered">
    <p className="ordered-name">{props.name} <span>{props.amountOrdered}x </span></p>
    <div className="order-imgcont">
    <img src={props.image}/>
    </div>
    </div>
    <p className="ordered-price"> {naira}{props.amountPaid.toLocaleString('en-US')}</p>
    
</div> }
</div>

    )

}
export default Ordered