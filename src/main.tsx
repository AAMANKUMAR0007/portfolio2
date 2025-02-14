import  { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';


// If you have a types file, you might import it like this:
// import './types/fontsource.d.ts'; // or './declarations/fontsource.d.ts'

// Create a root for React 18
const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
