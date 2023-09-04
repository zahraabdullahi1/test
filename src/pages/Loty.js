import { useState } from "react"
import Header from "../components/Header"
function Noty(){
    const [item,setItem]=useState("")
    const [list,setList]=useState([])
    const getUserData =(e) =>{
        e.PreventDefault()
        console.log(item)

        if(item){
            setList([...list,item])
            setItem("")
        }
    }

    return<div className=":">
        <Header/>
       
        <form style={{textAlign:"center" ,marginTop: "20px"}}>
            <input value={item} 
            onChange={(event) =>{
                setItem(event.target.value)

            }}
            type="text" placeholder="enter item" style={{width:"260px",height:"40px" }} 
            />
            <button onClick={getUserData}
             style={{padding:"14px", marginLeft:"10px",backgroundColor:"orange",border:"none",borderRadius:"4px",color:"white"}} >Add item

            </button>

        </form>
        <div style={{textAlign:"center",margin:"20px 35%",width:"300px"}}>
           
 {
      list.map((item,index)=>(
        <p style={{backgroundColor:"orange",padding:"12px"}}> 
   
            {item}
 {
        console.log(index)
 }
            </p>
               ))
             }
          
        </div>

        </div>
  
}
export default Noty