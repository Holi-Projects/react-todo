import React from 'react'

function Item(props){
  return(
    <div style={{textDecoration:props.txdeco, display:'inline-flex'}}>
    <input type='checkbox' 
    onChange={() => props.checkItem(props.id)}/>
    {props.name}
    <div style={{marginLeft:'50px'}}>
    <button onClick={() => props.editItem(props.id)}>Edit</button>
    <button onClick={() => props.deleteItem(props.id)}>Delete</button>
    </div>
    </div>
  )
}

export default Item