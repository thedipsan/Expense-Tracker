import React from 'react'
 
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate
} from 'react-router-dom'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Home  from './pages/dashboard/Home'
import Income from './pages/dashboard/Income'
import Expense from './pages/dashboard/Expense'


const App = () => {

const Root = ()=>{
  // Check if token exists in localstorage 
  const isAuthenticated = !!localStorage.getItem('token'); 

  // if token exits, redirect to dashbard
  return isAuthenticated ? (<Navigate to="/dashboard"/>) : (<Navigate to="/login"/>)
}

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path='/login' exact element={<Login/>}/>
            <Route path='/signup' exact element= {<SignUp/>}/>
              <Route path='/dashboard' exact element={<Home/>}/>
              <Route path='/income' exact element={<Income/>}/>
              <Route path='/expense' exact element={<Expense/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
