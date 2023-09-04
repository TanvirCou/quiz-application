import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Quiz from './components/Quiz/Quiz'
import Result from './components/Result/Result'
import Signup from './components/Signup/Signup'
import { AuthProvider } from './Contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/quiz/:id' element={<PrivateRoute><Quiz /></PrivateRoute>} />
        <Route path='/result/:id' element={<PrivateRoute><Result /></PrivateRoute>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
