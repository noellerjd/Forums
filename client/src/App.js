import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Router>
        <Routes>
          <Route path="/post-page" element={<PostPage />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
