import { useSelector } from "react-redux";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";

function App() {
  const state = useSelector((state) => state.auth);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route
            path="/profile"
            element={<ProfilePage login={state.login} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
