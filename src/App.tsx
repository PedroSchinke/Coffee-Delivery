import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ContextProvider } from './contexts/context'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
 
function App() {

  return (
    
    <ThemeProvider theme={defaultTheme}>

      <ToastContainer theme='colored' autoClose={1500}/>

      <BrowserRouter>

        <ContextProvider>
          <Router />
        </ContextProvider>
      
      </BrowserRouter>

      <GlobalStyle />
      
    </ThemeProvider>
  )
}

export default App
