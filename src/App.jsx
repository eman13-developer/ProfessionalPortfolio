import { Textarea } from "@/components/ui/textarea"
import React from 'react'
import Navbar from "./mycomponents/common/navbar"
import Navbar2 from "./mycomponents/common/navbar2"
import Homepage from "./pages/homepage"
import './index.css'
import About from "./pages/about"

function App() {
  return (
<div>
    <Navbar/>
    <Homepage/>
    <About/>
</div>
  )

}

export default App;