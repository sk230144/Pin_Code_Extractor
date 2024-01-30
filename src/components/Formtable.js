import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({handleSubmit,handleOnChange, handleclose, rest}) => {
  return (
    <div className="addContainer">
    <form onSubmit={handleSubmit}>
    <div className="close-btn" onClick={handleclose}><MdClose/></div>
    <label htmlFor="name">Name : </label>
    <input type="text" id="name" name="name" placeholder='Enter your name' onChange={handleOnChange} value={rest.name}/>

    <label htmlFor="email">Email : </label>
    <input type="email" id="email" name="email" placeholder='Enter Your email' onChange={handleOnChange} value={rest.email}/>

    <label htmlFor="in-time">Start at : </label>
    <input type="text" id="mobile" name="mobile" placeholder='shift starts from' onChange={handleOnChange} value={rest.mobile}/>

    <label htmlFor="name">End at : </label>
    <input type="text" id="status" name="status" placeholder='shift ends at' onChange={handleOnChange} value={rest.status}/>

    

      <button className="btn">Submit</button>
    </form>
    </div>
  )
}

export default Formtable