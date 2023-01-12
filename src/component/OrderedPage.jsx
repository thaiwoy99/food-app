import {React,useContext,useState,useEffect} from "react"
import {context} from "../Context"
import Ordered from "./Ordered"
import {Link} from "react-router-dom"




function OrderedPage (){
    const{OrderedItems,addItem,removeItems,add,remo,Foods,naira} = useContext(context)
    const [TotalAmount , setTotalAmount] = useState(0)
    
    

    useEffect(()=>{

        const ifOrdered = Foods.some(item=>item.amountOrdered>0)
        const arr = Foods .filter(item => item.amountPaid)
        const total = arr.reduce(function(a,b){
            return a+b.amountPaid
        },0)

        console.log(total)
        setTotalAmount(total)
    },[Foods])
const allOrdered = Foods.map(dat=>{
    return (
        <Ordered {...dat} key ={dat.id}/>
    )
})
console.log(allOrdered)

    return(
        <div className="container">
            <div className="your-order">
                <h2>YOUR ORDER</h2>
            <Link to ="/"> Edit</Link>
            </div>
            {allOrdered}
            
            
            <p className="total">PAY  {naira}{TotalAmount.toLocaleString('en-US')}</p>
            
        </div>

    )
}
export default OrderedPage