import React from 'react'
import Form from '../form/form'

const info: {} = {
    title: 'PERSONAL INFO',
    entries: {
        firstName: 'First Name',
        lastName: 'Last Name',
        occupation: 'Occupation',
        phoneNumber: 'Phone Number',
        email: 'Email',
        homeAddress: 'Home Address'
    }
}

const PersonalInfo = () => {
  return (
    <div>
        <Form info={info} />
    </div>
  )
}

export default PersonalInfo