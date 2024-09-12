import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import React, {useState,useEffect}from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {
  const[products,setProducts] = useState([])

  const getAllProducts = async()=>{
    try {
      const {data} = await axios.get('http://localhost:8080/api/v1/product/get-product')
      setProducts(data.products)
      
    } catch (error) {
      console.log(error)
      toast.error('Error while getting products')
    }
  }
  useEffect(()=>{
    getAllProducts();
  },[])

  return (
    <Layout>
        <div className='row'>
             <div className='col-md-3'>
                <AdminMenu/>
             </div>
             <div className='col-md-9'>
                <h1 className='text-center'> All products List</h1>
                <div className='d-flex flex-wrap'>
                {products?.map(p=>(
                  <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`} className='text-dark'>
                                <div className="card m-2" style={{width: '18rem'}} key={p._id}>
  <img className="card-img-top" src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`} alt={p.name}  />
  <div className="card-body">
    <h5 className="card-title">{p.name}</h5>
    <p className="card-text">{p.description}</p>
   
  </div>
</div>

                  </Link>
   
                )

                )}
                </div>

             </div>
        </div>
    </Layout>
  )
}

export default Products

