
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignUp from './Pages/Auth/SignUpPresentation'
import LogIn from './Pages/Auth/LogIn'
import NotFound from './Pages/NotFoundPage'
import SignUpPresentation from './Pages/Auth/SignUpPresentation'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import ProductDetails from './Pages/Products/ProductDetails'

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="denied" element={<Denied />} />
        <Route path="/auth/signup" element={ < SignUpPresentation /> } />
        <Route path='/auth/login' element={ <LogIn /> } />

        <Route path='/admin/addProduct' element={<AddProduct />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App
