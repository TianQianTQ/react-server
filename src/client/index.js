import React from 'react'
// import ReactDom from 'react-dom'
import ReactDOM from "react-dom/client"
import Home from '../containers/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Routes from '../routers'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);