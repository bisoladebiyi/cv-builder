import React from 'react'
import CreatedResumes from '../components/createdResumes/createdResumes'
import Templates from '../components/templates/templates'

const Dashboard = () => {
  return (
    <div className='container'>
        <Templates />
<CreatedResumes />
    </div>
  )
}

export default Dashboard