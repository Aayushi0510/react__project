import React from 'react'
import SideNavLayout from '../../components/Layout/SideNavLayout/SideNavLayout'
import Dashboard from './Dashboard'

const DashboardWrapper = () => {
  return (
    <>
      <SideNavLayout>
        <Dashboard/>
      </SideNavLayout>
    </>
  )
}

export default DashboardWrapper
