import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Movie from "./pages/Movie"


function App() {

  return (
    <div
      className="w-full min-h-screen dark:bg-neutral-900">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/movie/:id" element={<Movie />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
