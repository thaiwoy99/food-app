import { useState , useContext,useEffect} from 'react'

import Item from  "./item"
import OrderedPage from './OrderedPage'

import {Link} from "react-router-dom"
import React from "react"
import {context} from "../Context"

function Items(){
  const{Foods} = useContext(context)
  const [ifOrdered,setifOrdered] = useState(false)
  
  
  const allFood = Foods.map(dat=>{
    return(
<Item {...dat}  key = {dat.id}/>
    )
  })
  
  useEffect(()=>{

    const ifOrdered = Foods.some(item=>item.amountOrdered>0)
    setifOrdered(ifOrdered)

},[Foods])




  return(
    <main>

      <div className='main-cont'>
      {allFood}
      
      </div>
      {Foods.length>0 && ifOrdered &&
     <button className='check-order'> <Link to="/OrderedPage">Check Order</Link></button>}
      
      
    </main>

  )
}
export default Items
