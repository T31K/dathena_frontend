import {useState, useEffect} from 'react'
import {Input, DatePicker, Notification, Card } from 'react-rainbow-components'
import {withRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axiosInstance from "../utils/api"
import {convertTime} from '../utils/convertTime'


import "../App.css"

const Edit = ( {history, props, match} ) => {
  const [data, setData] = useState([])
  const [alert, setAlert] = useState(false)
  const { id } = match.params
   
  useEffect(() => {
    axiosInstance.get(`${id}/`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const updateUser =  () => {
    axiosInstance.put(`${id}/`, data)
      .then(() => history.push('/'))
  }
  
  const deleteUser = () => {
    axiosInstance.delete(`${data.id}/`)
      .then(() => history.push('/'))
  }
    
  return (
    <div className="main">
     <Navbar />
      <Notification
        title="Update Successful!"
        description="User info successfully updated"
        icon="success"
        className={alert ? "notify" : "notify-hide"}
      />
      <Input 
        label="First Name"
        placeholder="First Name"
        onChange={e => setData({...data, firstName: e.target.value})}
        value={data.firstName}
        required
        type="text"
      />

      <Input
        className="margin"
        label="Last Name"
        placeholder="Last Name"
        onChange={e => setData({...data, lastName: e.target.value})}
        value={data.lastName}
        required
        type="text"
      />

      <Input
        className="margin"
        label="Email"
        value={data.email}
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
      />
      <div class="rainbow buttons">
      <button onClick={updateUser} className="btn-main">Update</button>
      <button onClick={deleteUser} className="btn-delete ml-3">Delete</button>
      </div>
    </div>
 
  )
  }

export default withRouter(Edit)