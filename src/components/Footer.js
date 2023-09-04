import React from "react"
import Product from "../pages/Product"

function Footer(){
    return <div style={{backgroundColor:"lightgreen" ,padding:"12px"}}>
        <h1>this is footer</h1>
        <Footer/>
    </div>
}
export default Footer