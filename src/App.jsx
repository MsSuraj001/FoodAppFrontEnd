
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignUp from './Pages/Auth/SignUp'
import LogIn from './Pages/Auth/LogIn'
import NotFound from './Pages/NotFoundPage'

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="/auth/signup" element={ < SignUp /> } />
        <Route path='/auth/login' element={ <LogIn /> } />


        <Route path='*' element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App
