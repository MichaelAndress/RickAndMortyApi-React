import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Header1 } from './Header1'
import { store } from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={ store }>
      <Header1 />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
