import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"
import { useState ,useEffect, React } from "react"

function Product(){


    const[products,setProducts]=useState([])

     const getAllProducts=() =>{
        axios.get("https://fakestoreapi.com/products").then((response)=> {
            setProducts(response.data)

        }).catch((error)=>{
             console.log(error)
        })

    }

    useEffect(()=>{
        getAllProducts() 
    },[])

    return(
    <div>
        <Header/>
      
        <div style={{display:"grid",gridTemplateColumns:"300px 300px" , gap:"20px", margin:"20px"}}>
        
            {
                products.map((item,index)=> (
                 <div style={{border:"1px solid" ,textAlign:"center" }}>
                <img style={{marginTop:"10px",width:"200px"}} src={item.image}/>
                <p> {item.title}</p>
                <h4>{item.price}</h4>
                
            </div>
            ))
            }
        
        
        </div>
        <Footer/>
    </div>
    )
}

export default Product