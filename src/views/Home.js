import {useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'

import axiosInstance from '../utils/api'
import Navbar from '../components/Navbar'

import "../App.css"

import { TableWithBrowserPagination, Column, MenuItem, Card, Application, Button } from 'react-rainbow-components';
import {lightTheme, darkTheme} from '../utils/themes'


function Home({history, props}) {
  const [data, setData] = useState([])
  const [selected, setSelected] = useState([])

  useEffect(() => {
    axiosInstance.get('/')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const deleteUser = (id) => {
    axiosInstance.delete(`${id}/`)
      .then(window.location.reload())
  }
  return (
    <div className="main">
      <Navbar selection={selected} />
      <Application theme={lightTheme} className="">
        <Card >
          <TableWithBrowserPagination 
            keyField="id" 
            pageSize={20}
            data={data} 
            showCheckboxColumn 
            showRowNumberColumn  
            rowNumberOffset={0} 
            onRowSelection={data => setSelected(data)}>
              
              <Column header="First Name" field='firstName' />
              <Column header="Last Name" field="lastName"  />
              <Column header="Email" field="email" />
              <Column header="D.O.B." field="dob" />

              <Column type="action">
                <MenuItem label="Edit" onClick={(event, data) => history.push(`/edit/${data.id}`)} />
                <MenuItem label="Delete" onClick={(event, data) => {deleteUser(`${data.id}`) }}
                />
              </Column>
          </TableWithBrowserPagination>
        </Card>
      </Application>
    </div>
  )
}



export default withRouter(Home)