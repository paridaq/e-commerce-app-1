import React from 'react'
import Layout from '../../components/layout/layOut'

import UserMenu from '../../components/layout/UserMenu'

const UserProfile = () => {
  return (
    <Layout>

        <>
        <div className="row">
            <div className="col-md-3">
                <UserMenu/>
            </div>
            <div className="col-md-9">
                <h1> Profile</h1>
            </div>
        </div>
        </>
    </Layout>
  )
}

export default UserProfile
