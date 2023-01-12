import React from "react"
import getSymbolFromCurrency from 'currency-symbol-map'
import {useState , createContext} from "react"

const context = createContext()
function ContextProvider({children}){
    const [OrderedItems ,setOrderedItems] = useState([])
    const [page, setPage] = useState(false)
    const naira =getSymbolFromCurrency("NGN")
    

    const [ord,setOrd] = useState()
    
   

   function ChangePage(){
    setPage(prev=>!prev)
   }

   const [Foods, setFoods] = useState([])
   
  React.useEffect(()=>{
    
    async function getData (){
  const res = await fetch("https://bot-web-app-production.up.railway.app/products ")

  const data = await res.json() 
  const allData = data.map(dat=>{
    return {...dat, amountOrdered:0}
  })
  setFoods(allData)
  
      
      
     
    } 
    getData()
    
  },[])
    
    function addItem (id,arr1,ordered){
        setOrderedItems(prev=>{
            for(let i=0;i<arr1.length; i++){
                if(arr1[i].id == id ){
                    
                   
                    return [...prev, {...arr1[i],AmountOrder:ordered +1 }]
                }
                

            }
            
        })

    }
    

    function add(id,){
        setFoods(prev=>prev.map(i=>{
           return  i.id==id ? {...i,amountOrdered:i.amountOrdered+1,amountPaid :i.price*(i.amountOrdered+1)}:i
        }))

    }
    
    function remo (id,){
        setFoods(prev=>prev.map(i=>{
           return  i.id==id ? {...i,amountOrdered:i.amountOrdered-1 , amountPaid :i.price*(i.amountOrdered-1)}:i
        }))

    }
    
    /*function removeItems (id){

        setOrderedItems(prev=>{
         const remainingOrder=   prev.filter(dat=>{
                return dat.id !== id
            })
            return remainingOrder
            
        })

    }*/
    return(
        <context.Provider value= {{ord,add,remo,Foods,page,ChangePage,naira}}>
            {children}

        </context.Provider>
    )
    

}

export  {ContextProvider, context}

