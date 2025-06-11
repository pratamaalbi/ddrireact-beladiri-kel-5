import "./App.css";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return <>
   <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsdetail/:id" element={<NewsDetail /> }/>
       </Routes>
  
  </BrowserRouter>
       
  
  </>;
}

export default App;
