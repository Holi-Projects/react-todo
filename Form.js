import React, { Component } from 'react';
import Items from './Items'
import Btn from './button'


function Form(props) {

  const [list, setList] = React.useState(props.tasks)
  const [name, setName] = React.useState('')
  const [search, setSearch] = React.useState(null)
  const [btn, setBtn] = React.useState(false)

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

  const filterItem = (i) => {
    if(i !== null){
      setSearch(i)
      setBtn(true)
      console.log("value is: "+i)
    }
  }

  const remain = `Number of Items: ${list.length}`
  const filterList = []
  list.forEach( item =>{
      if(search === 'active' && item.txdeco === 'none'){
        filterList.push(item)
      }
      else if(search === 'complete' && item.txdeco === 'line-through'){
        filterList.push(item)
      }
      else if(search === 'all'){
        filterList.push(item)
      }
    })

     return(
       <div>
        <form onSubmit={formSubmit}>
          <input type='text' 
          placeholder='Enter Item'
          value={name} 
          onChange={setItem}/>
          <button>Add Item</button> 
        </form>
        <Btn filter={filterItem}/>
        <br></br>
        <div>
          {remain}<br></br>
         <Items 
         filter={filterItem}
         items={btn?filterList:list} 
         checkItem={checkItem}
         editItem={editItem}
         deleteItem={deleteItem}/>
         </div>
       </div>
       )
   
}

export default Form