import React from 'react'
import Item from './Item'

const Items = (props) => {

  // let list = props.items
  // console.log(list)
  // return (
  //   list.map(item => (
  //   <li>{item.name}</li>
  // )))
  
  let itemList = props.items.map(item => (
    <div key={item.id}><Item 
    name={item.name}
    id={item.id}
    txdeco ={item.txdeco}
    checkItem={props.checkItem}
    editItem={props.editItem}
    deleteItem={props.deleteItem} /></div>
  ))

  if(itemList.length === 0)
    return (<p>No items added</p>)
    else
  return (
    <div>{itemList}
    </div>)
    
}


export default Items