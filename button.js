import React from 'react';

const Btn = (props) => {

  const selectBtn = (e) => {
    const name = e.target.name
    props.filter(name)
  }

  return(
  <div style={{marginTop: '10px'}}>
  <button onClick={selectBtn} name='all'>All</button>
  <button style={{marginLeft:'15px'}} onClick={selectBtn}name='active'>Active</button>
  <button style={{marginLeft:'15px'}} onClick={selectBtn}name='complete'>Complete</button>
  </div>
  )
}
export default Btn
