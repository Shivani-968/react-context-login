import { useState } from 'react'
import Login from './context/components/Login'
import Profile from './context/components/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Profile/> 
    </UserContextProvider>
  )
}

export default App
