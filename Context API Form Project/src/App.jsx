import './App.css'
import Form from './components/Form'
import Profile from './components/Profile'
import UserContextProvider from './Contexts/UserContextProvider'

function App() {
  return (
    <>
      <UserContextProvider>
        <Form />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App;
