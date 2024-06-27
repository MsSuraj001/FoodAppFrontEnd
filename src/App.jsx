
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignUp from './Pages/Auth/SignUp'
import LogIn from './Pages/Auth/LogIn'

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="/auth/signup" element={ < SignUp /> } />
        <Route path='/auth/login' element={ <LogIn /> } />
     </Routes>
    </>
  )
}

export default App
