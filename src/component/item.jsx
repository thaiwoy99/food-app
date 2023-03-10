import React,{useState ,useContext,useEffect} from "react"
import {context} from "../Context"


function Item(props) {
  const{OrderedItems,addItem,removeItems,add,remo,increase,decrease,naira} = useContext(context)
  

  /*
  useEffect(()=>{
    const tai = JSON.parse(localStorage.getItem("ordered"));
    if(tai){
      setAmountOrdered(tai)
    }
     
  },[]) */
  
  

  const incr =()=>{
    //{ AmountOrdered<1 && addItem(props.id,Data,AmountOrdered)}
    add(props.id)
    //setAmountOrdered(prev=> props.stock_left && prev+1)
    
    
  }
  const dcr = ()=>{
    remo(props.id)
   //{ AmountOrdered==1 && removeItems(props.id)}
   //setAmountOrdered(prev=>prev-1)
    
  }
/*
  useEffect(()=>{
    const amou = JSON.stringify(AmountOrdered)
    localStorage.setItem("ordered",amou)
  },[AmountOrdered])
*/


  return(
    <div className="item">
      <div className="img-cont">
      <img src={props.image}></img>
      {props.amountOrdered>0  &&<p className="amount-ordered">{props.amountOrdered}</p> }
      </div>
    
      
      <p className ="item-name">{props.name}  </p>
      <p className="item-price">{naira}{props.price.toLocaleString('en-US')}</p>
      
      <div className="all-btns">
      {props.amountOrdered < 1 && <button className="add-before-1" onClick={incr}>ADD</button>}
      
      <div className="btns">
      {props.amountOrdered<props.stock_left &&props.amountOrdered>0 && <button className="incr" onClick= {incr}>+</button>}
      {props.amountOrdered>0 &&<button className="dcr" onClick ={dcr}>-</button>}
      </div> 
      </div>
    </div>
  )
}

export default Item
