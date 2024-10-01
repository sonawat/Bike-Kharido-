import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Car from "./Component/card"
import Ca from "./Component/card2"
import Card3 from "./Component/card3"
import Div from "./Component/div"
import Foot from "./Component/footer"
import Compare from "./Component/card4"


const App = () =>
{
  
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Div />
    <Car />
    <Ca />  
    <Card3 />
    <Compare />
    <Foot />

    <Routes>
      <Route path="/"></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App