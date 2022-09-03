import './index.css'
import '../../dist/primitivex.css'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Box, Typography } from 'primitivex'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  return (
    <Box tag="main">
      <Typography tag="h1" weight="bold" color="background">
        Primitivex 1 is live
      </Typography>
    </Box>
  )
}
