import {useState} from 'react'
import {Input, DatePicker, } from 'react-rainbow-components'
import Navbar from '../components/Navbar'

import axiosInstance from "../utils/api"
import {convertTime} from '../utils/convertTime'


import "../App.css"

const Create = ({history, props, alert}) => {
  const [data, setData] = useState([])
   
  const createUser =  () => {
    axiosInstance.post(`/`, data)
      .then(() => {
        // useCallback(()=> alert(true))
        history.push('/')
      })
  }
    
  return (
    <div className="main">
      <Navbar />
      <Input 
        label="First Name"
        placeholder="First Name"
        onChange={e => setData({...data, firstName: e.target.value})}
        required
        type="text"
      />

      <Input
        className="margin"
        label="Last Name"
        placeholder="Last Name"
        onChange={e => setData({...data, lastName: e.target.value})}
        required
        type="text"
      />

      <Input
        className="margin"
        label="Email"
        placeholder="admin@admin.com"
        onChange={e => setData({...data, email: e.target.value})}
        required
        type="email"
      />
      
      <DatePicker
        className="margin"
        minDate={new Date(1920, 0, 4)}
        maxDate={new Date(2021, 1, 9)}
        value={data.dob}
        onChange={value => setData({...data, dob : convertTime(value)})}
        label="Date of Birth"
        required
      />
 
      <div className="rainbow buttons">
        <button onClick={createUser}  className='btn-main'>Submit</button>
      </div>
    </div>
 
  )
  }

export default Create