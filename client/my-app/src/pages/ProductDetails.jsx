import React from 'react'
import Layout from '../components/Layout/Layout'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Products from './admin/Products'

const ProductDetails = () => {

    const params = useParams();
    const[product,setProduct] = useState({})
    const[relateddProducts,setRelatedProducts] = useState([])

//initial details
useEffect(()=>{
    if(params?.slug)getProduct()
},[params.product])

    const getProduct=async()=>{
        try {
            const{data} = await axios.get(`http://localhost/8080/api/v1/product/get-product/${params.slug}`)
            setProduct(data?.product)
            getSimilarProduct(data?.product._id,data?.product.category._id)
            
        } catch (error) {
            console.log(error)
        }
    }

    //get similar products
     const getSimilarProduct = async(pid,cid)=>{
        try {
            const{data} = await axios.get(`http://localhost:8080/api/v1/product/related-product/${pid}/${cid}`)
            setRelatedProducts(data?.products)
        } catch (error) {
            console.log(error)
        }
     }
  return (
    <Layout>
       <div className="row mt-2" >
        <div className="col-md-6">
        <img className="card-img-top" src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`} alt={product.name}
        height='300px' width={'350px'}  />
        </div>
        <div className="col-md-6 text-center">
            <h1>Product Details </h1>
            <h4> Name:{product.name}</h4>
            <h4> Description:{product.description}</h4>
            <h4> Price:{product.price}</h4>
             <h4> Category:{product?.category?.name}</h4> 
             <button className='btn btn-secondary ms-1' > ADD TO CART</button>
            
        </div>
       </div>
       <hr/>
       <div className="row container">
        <h6> Similar Products</h6>
        {relateddProducts.length<1 && (<p className='text-center'>No similar products found</p>)}
        <div className="d-flex flex-wrap">
            {relateddProducts?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 30)}...
                  </p>
                  <div className="card-name-price">
                  
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
       </div>

    </Layout>
  )
}

export default ProductDetails
