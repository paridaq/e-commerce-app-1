import React from 'react'
import Layout from '../../components/layout/layOut'
import AdminMenu from '../../components/layout/AdminMenu'
import { useAuth } from '../../context/auth'
import UserMenu from '../../components/layout/UserMenu'
const Dashboard = () => {
    const[auth] = useAuth();
  return (
    <Layout>
<>
<div className="container-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <UserMenu/>
        </div>
        <div className="col-md-9">
            <div className="card w-75 p-3">
                <h3>User Name:{auth?.user?.name}</h3>
                
                <h3>Address:{auth?.user?.address}</h3>
            </div>
        </div>
    </div>
</div>
</>

    </Layout>
     )
}

export default Dashboard
