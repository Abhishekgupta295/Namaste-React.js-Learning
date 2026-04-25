import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import AppStore from './utils/OurStore'
function App() {
  

  return (
    <>
      
        <Provider store = {AppStore }>
          <Header />
          <Body />
        </Provider>
    </>
  )
}

export default App
