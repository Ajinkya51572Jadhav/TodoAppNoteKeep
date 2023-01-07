import React from 'react'
import { useState } from 'react';
import {RiDeleteBin6Line} from "react-icons/ri"
import {AiOutlineFileAdd} from "react-icons/ai"
import {BiEdit} from "react-icons/bi"
import "./Todo.css";
import logo from "./Img.png";

//mobile responcive view

function Todo(){
const [inputdata,setinputdata]=useState();
const [getData,setgetdata]=useState([]);
const [toggle,settoggle]=useState(true);
const [chnagedata,setchnagedata]=useState(null);

   function AddText(e){
if(!inputdata){
    alert('please text write');
}else if(inputdata && !toggle){
setgetdata(getData.map((elm)=>{
if(elm.id==chnagedata){
    return {...elm,name:inputdata}
    
}
return elm;

}))



settoggle(true);
setinputdata('');
setchnagedata(null);   




}else{
const allInputdata ={id:new Date().getTime().toString(),name:inputdata}
console.log(new Date().getTime()) 


    setgetdata([...getData,allInputdata]);
setinputdata('');
}
 }





function deleteText(index){
const filtermethod = getData.filter((val,id)=>{
     return val.id!=index;
})
setgetdata(filtermethod);   

}




function editText(id){
    const editdata = getData.find((elm)=>{
           return elm.id==id;
  }) 
  console.log(editdata);
  settoggle(false);
  setinputdata(editdata.name);
  setchnagedata(id);   
      }

      function remove(){
        setgetdata([]);
        }
    


  return(


     <div>
 <div className='text-container'>
 <img src={logo}/>
 <div className='inner-border'>


    <div className='input-body'>
 
    <input type={'text'} placeholder="Enter a text" value={inputdata} onChange={(e)=>setinputdata(e.target.value)}/>

    <div className='toggle-btn'>
    {toggle?<span onClick={AddText}><AiOutlineFileAdd/></span>:<span onClick={AddText}><BiEdit/></span>}   
    </div>
    </div>

<div>
{
   getData.map((elm,index)=>{
       return(
           <div key={elm.id}>

                 <div className='edite-delete'>               
            <span className='name-text'>{elm.name}</span>
           <div className='de-ed-btn'> 
           <div className='btn-delete'>
           <span onClick={()=>deleteText(elm.id)}><RiDeleteBin6Line/></span>
           </div>

           <div className='btn-edite'>
           <span onClick={()=>editText(elm.id)}><BiEdit/></span>
           </div>

           </div>     
            </div>   

            </div>            
       )
    
   })
}
<div className='remove-btn'>
<spna onClick={remove}>remove all</spna>
</div>

</div>
</div>
</div>
</div> 
)
}




export default Todo;


