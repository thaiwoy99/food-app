import Items from "./component/ITEMS"
import {Routes,Route} from "react-router-dom"
import OrderedPage from "./component/OrderedPage"
import {BrowserRouter as Router} from "react-router-dom"

function App(){
    return (


        
        <Router>
            <Routes>
                <Route path="/" element={<Items/>}/>
                <Route  path="/OrderedPage" element={<OrderedPage/>}/>
            
            </Routes>
            </Router>
            
        
    )
}
export default App