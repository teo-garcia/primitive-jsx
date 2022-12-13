import './index.css'
import '../../src/index.css'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Box, Text } from '../../'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  return (
    <Box tag="main">
      <Text tag="h1" weight="bold" color="background">
        Primitivex 1 is live
      </Text>
    </Box>
  )
}
