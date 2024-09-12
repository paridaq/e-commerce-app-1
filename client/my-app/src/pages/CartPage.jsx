import React from 'react'
import Layout from '../components/Layout/Layout'
import { useCart } from '../context/cart'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'


const CartPage = () => {
    const[auth,setAuth] = useAuth()
    const[cart,setCart] =  useCart()
    const navigate = useNavigate()

    //remove items from product
    
  return (
    <Layout>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center p-2 mb-1'> 
                        {`Hello ${auth?.token && auth?.user?.name}`}
                    </h1>
                    <h4 className='text-center'>
                        {cart?.length>1?` you have ${cart.length }  products in your cart${auth?.token? '':'please login to checkout'}`:'your cart is empty'}

                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                        <div className="row">
                            {cart?.map(p=>(
                               <div className="row">
                                <div className="col-md-4">
                                <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                                </div>
                                <div className="col-md-8">
                                    <h4>{p.name}</h4>
                                    <h1>${p.price}</h1>
                                    <button className='btn btn-primary'onClick={()=>removeCartItem(p._id)}>Remove</button>
                                </div>
                               </div> 
                            ))}
                        </div>
                </div>
                <div className="col-md-3">
                    CheckOut |payment

                </div>
            </div>
        </div>

    </Layout>
  )
}

export default CartPage
