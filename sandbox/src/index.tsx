import './index.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Typography } from 'primitivex';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <Typography weight="bold" color="primary">
      Hello
    </Typography>
  );
}
