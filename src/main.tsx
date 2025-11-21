import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/App'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <br />
    <ToastContainer position="top-center" autoClose={2000} />
    <App />
  </StrictMode>,
)
