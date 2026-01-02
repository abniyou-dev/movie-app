import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movie from "./pages/Movie";
import Layout from "./components/Layout";
import Movies from "./pages/Movies";
import { MoviesProvider } from "./context/favoriteReducer";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/movie/:id" element={<Movie />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </AuthProvider>
  );
}

export default App;
