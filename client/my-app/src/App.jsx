import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from '../auth/register';
import toast, { Toaster } from 'react-hot-toast';
import Login from '../auth/login';
import Dashboard from './pages/user/Dashboard';
import { PrivateRoute } from './components/Route/privateRoutes';
import ForgotPassword from '../auth/ForgotPassword';
import AdminDashboard from './pages/admin/AdminDashboard';
import { AdminRoute } from './components/Route/AdminRoute';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import UserProfile from './pages/user/UserProfile';
import UserOrder from './pages/user/UserOrder';
import 'antd/dist/reset.css';
import Products from './pages/admin/Products';
import UpdateProduct from './pages/admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';


 


function App() {
  return(
  <>
  <Routes>
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/product/:slug' element = {<ProductDetails/>}/>
    <Route path='/categories' element = {<Categories/>}/>
    <Route path='/cart' element = {<CartPage/>}/>
    <Route path='/category/:slug' element = {<CategoryProduct/>}/>
  
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/search' element = {<Search/>}/>
    <Route path='/dashboard' element={<PrivateRoute/>}>
     <Route path = 'user' element ={<Dashboard/>}/>
     <Route path = 'user/profile' element ={<UserProfile/>}/>
     <Route path = 'user/orders' element ={<UserOrder/>}/>
    </Route>
    <Route path = '/dashboard' element={<AdminRoute/>}>
    <Route path = 'admin' element = {<AdminDashboard/>}/>
    <Route path = 'admin/create-category' element = {<CreateCategory/>}/>
    <Route path = 'admin/create-product' element = {<CreateProduct/>}/>
    <Route path = 'admin/product/:slug' element = {<UpdateProduct/>}/>
    <Route path = 'admin/products' element = {<Products/>}/>
    <Route path = 'admin/users' element = {<Users/>}/>
    </Route>
    <Route path='/about' element = {<About/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/policy' element = {<Policy/>}/>
    <Route path='*' element = {<PageNotFound/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/login'    element={<Login/>}/>
    </Routes>
    </>
  )
  
  }

export default App
