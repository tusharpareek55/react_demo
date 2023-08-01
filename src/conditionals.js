import { useState } from "react"
export function Conditionals(){
    const [isClicked,changestate] = useState(false)
    function change(){
        changestate(!isClicked)
    }
    function changeWithIf(){
        
        if(isClicked){
            return "black"
        }
        return "white"
    }
    
    const bgcolor= changeWithIf()



    return(
        <div style={{display:'flex', alignItems:'center',justifyContent:'center',backgroundColor: bgcolor,height:'100vh',width:'100vw'}}>
                <button id="btn" onClick={change} style={{marginRight:'10px',backgroundColor: isClicked ? 'yellow' : 'black',fontSize:'40px',color:isClicked?'black':'white'}}>change color</button>
        </div>
        
        )
}