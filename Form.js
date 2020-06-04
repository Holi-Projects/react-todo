import React, { Component } from 'react';
import Items from './Items'
import Btn from './button'

function Form(props) {

  const [list, setList] = React.useState(props.tasks)
  const [name, setName] = React.useState('')
  //const [txdeco, setDeco] = React.useState('none')

  const setItem = (e) => {
    setName(e.target.value)
    
  }

  const formSubmit = (e) => {
    if(name !== ''){
   e.preventDefault();
   const itemID = (Math.random()*100).toFixed()
   const newItem = {id: itemID,name: name, txdeco: 'none'}
   setList([...list, newItem])
   setName('') }
  }
   
  const editItem = (index) => {
    console.log(index)
    const arr = list.map( item => {
      if(index === item.id)
      setName(item.name)
      deleteItem(index)
    })
  }

  const deleteItem = (index) => {
    console.log(index)
    const rmItem = list.filter(task => index !== task.id);
      setList(rmItem);
  }

  const checkItem = (i) => {
    console.log(i)
    const arr = list.map( item => {
      if(i === item.id){
      return {...item, txdeco: item.txdeco === 'none' ? 'line-through' : 'none'}
      }
      return item
    })
    setList(arr)
  }

  const remain = `Number of Items: ${list.length}`

     return(
       <div>
        <form onSubmit={formSubmit}>
          <input type='text' 
          placeholder='Enter Item'
          value={name} 
          onChange={setItem}/>
          <button>Add Item</button> 
        </form>
        <Btn />
        <br></br>
        <div>
          {remain}<br></br>
         <Items 
         items={list} 
         checkItem={checkItem}
         editItem={editItem}
         deleteItem={deleteItem}/>
         </div>
       </div>
       )
   
}

export default Form