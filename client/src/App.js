import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const domain = "forums.us.auth0.com";

      getAccessTokenSilently().then((token) => {
        setAccessToken(token);

        fetch(`https://${domain}/userinfo`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setUser({
              email: data.email,
              username: data.email,
              auth_id: data.sub,
              picture: data.picture,
              full_name: data.name,
            });
          });
      });
    }
  }, [isLoading, isAuthenticated, getAccessTokenSilently]);

  return (
    <div className="bg-black min-h-screen">
      <UserContext.Provider value={{ user, accessToken }}>
        <Header />
        <Router>
          <Routes>
            <Route path="/post-page" element={<PostPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
