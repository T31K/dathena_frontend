import {useState, useEffect} from 'react'
import {Input, DatePicker, Notification} from 'react-rainbow-components'

import {withRouter} from 'react-router-dom'
import Navbar from '../components/Navbar'

import axiosInstance from '../utils/api'
import {convertTime} from '../utils/convertTime'
import {notifications} from '../utils/notifications'
import {delay} from '../utils/delay'

import '../App.css'

const Edit = ( {history, props, match} ) => {
  const [data, setData] = useState([])
  const [alertType, setAlertType] = useState(notifications.initial)

  const { id } = match.params
   
  useEffect(() => {
    axiosInstance.get(`${id}/`)
      .then(res => setData(res.data))
  }, [id])

  const updateUser =  () => {
    axiosInstance.put(`${id}/`, data)
      .then(async ()=> {
        setAlertType(notifications.updateSuccess)
        await delay(3000)
        setAlertType(notifications.redirect)
        await delay(3000)
        history.push('/')
      }).catch( async ()=> {
        setAlertType(notifications.updateError)
        await delay(3000)
        setAlertType(notifications.initial)
      })
  }

  const deleteUser = () => {
    axiosInstance.delete(`${data.id}/`)
      .then(() => history.push('/'))
  }

  return (
    <div className='form'>
      <Navbar selection={data}/>
      <Notification
        title={alertType.title}
        description={alertType.message}
        icon={alertType.icon}
        className={alertType.title === '' ? 'notify-hide' : 'notify'}
      />
      
      <Input 
        label='First Name'
        placeholder='First Name'
        onChange={e => setData({...data, firstName: e.target.value})}
        value={data.firstName}
        required
        type='text'
      />

      <Input
        className='margin'
        label='Last Name'
        placeholder='Last Name'
        onChange={e => setData({...data, lastName: e.target.value})}
        value={data.lastName}
        required
        type='text'
      />

      <Input
        className='margin'
        label='Email'
        value={data.email}
        placeholder='admin@admin.com'
        onChange={e => setData({...data, email: e.target.value})}
        required
        type='email'
      />

      <DatePicker
        className='margin'
        minDate={new Date(1920, 0, 4)}
        maxDate={new Date(2021, 1, 9)}
        value={data.dob}
        onChange={value => setData({...data, dob : convertTime(value)})}
        label='Date of Birth'
      />

      <div class='rainbow buttons'>
        <button onClick={updateUser} className='btn-main'>Update</button>
        <button onClick={deleteUser} className='btn-delete ml-3'>Delete</button>
      </div>

    </div>
 
  )
  }

export default withRouter(Edit)