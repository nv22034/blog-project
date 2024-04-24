import { Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/home/Homepage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
