import React from 'react'
import{NavLink,Link} from 'react-router-dom'
import {GiShoppingBag} from 'react-icons/gi'
import { useAuth } from '../../context/auth'
import SearchInput from '../form/SearchInput'
import useCategory from '../../hooks/useCategory'
import { useCart } from '../../context/cart'
import { Badge } from 'antd'

const Header = () => {
  const [auth,setAuth] = useAuth()
  const[cart] = useCart()
  const categories = useCategory();
  const handleLogOut = ()=>{
    setAuth({
      ...auth,
      user:null,
      token:''
    })
    localStorage.removeItem('auth')
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand" href="#"><GiShoppingBag/> BYDAY</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
      <li className="nav-item">
          <NavLink  to="/" className="nav-link " >Home</NavLink>
        </li>
       <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to={'/categories'} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Categories
  </Link>
  <li>
    
  <Link className="dropdown-item" to={'/categories'}>All categories</Link>
     

  </li>
  {categories?.map(c=>(
     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
     <Link className="dropdown-item" to={`category/${c.slug}`}>{categories.name}</Link>
     
     
 
   </div>

  ))}
  
</li>

     
        {
          !auth.user ?(

            <>
               <li className="nav-item">
          <NavLink  to="/register" className="nav-link " >Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/login" className="nav-link">Login</NavLink>
        </li>
            </>
          ) : (
            <> 
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={{ border: "none" }}
              >
                {auth?.user?.name}
                </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? 'admin' : 'user' 
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogOut}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
     
        <li className="nav-item">
          <NavLink  to="/cart" className="nav-link" >Cart{cart?.length}</NavLink>
        </li>
      </ul>
      <SearchInput/>
    </div>
  </div>
</nav>

    </>
  )}


export default Header
