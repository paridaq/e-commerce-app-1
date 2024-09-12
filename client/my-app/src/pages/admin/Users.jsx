import React from 'react'
import Layout from '../../components/layout/layOut'
import AdminMenu from '../../components/layout/AdminMenu'

const Users = () => {
  return (
    <Layout>

    <>
    <div className="row">
        <div className="col-md-3">
            <AdminMenu/>
        </div>
        <div className="col-md-9">
            <h1> All users </h1>
        </div>
    </div>
    </>
</Layout>
  )
}

export default Users
