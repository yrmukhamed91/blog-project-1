import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import CreatePost from "./pages/CreatePost/CreatePost";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <div> 
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/post/:id" element={<SinglePostPage />} />
        <Route path="/profile/" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

