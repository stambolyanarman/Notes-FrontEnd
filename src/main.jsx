import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from '@chakra-ui/react/preset'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
     <App />
  </ChakraProvider>
  </StrictMode>
)
