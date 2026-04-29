import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import AppStore from './utils/OurStore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
function App() {


  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body />,
      children : [
        {
          path : "/",
          element : <MainContainer />
        }, 
        {
          path : "/watch",
          element : <WatchPage />
        }
      ]
    },
   
  ]);

  return (
    <>
      
        <Provider store = {AppStore }>
          <Header />
           <RouterProvider router={appRouter}>
              
           </RouterProvider>
        </Provider>
    </>
  )
}

export default App
