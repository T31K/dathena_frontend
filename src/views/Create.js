import {useState} from 'react'
import {Input, DatePicker, Notification } from 'react-rainbow-components'

import Navbar from '../components/Navbar'
import {withRouter} from 'react-router-dom'

import axiosInstance from "../utils/api"
import {convertTime} from '../utils/convertTime'
import {notifications} from '../utils/notifications'
import {delay} from "../utils/delay"

import "../App.css"

const Create = ({history, props}) => {
  const [data, setData] = useState([])
  const [alertType, setAlertType] = useState(notifications.initial)
   
  const createUser =  () => {
    axiosInstance.post(`/`, data)
      .then(async () => {
        setAlertType(notifications.createSuccess) 
        await delay(3000)
        setAlertType(notifications.redirect)
        await delay(3000)
        history.push('/')
      }).catch(async ()=> {
        setAlertType(notifications.createError)
        await delay(3000)
        setAlertType(notifications.initial)
      })
  }
    
  return (
    <div className="form">
      <Navbar selection={data}/>
      <Notification
        title={alertType.title}
        description={alertType.message}
        icon={alertType.icon}
        className={alertType.title === '' ? "notify-hide" : "notify"}
      />
      
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
        maxDate={new Date(2021, 1, 15)}
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

export default withRouter(Create) 