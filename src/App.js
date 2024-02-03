import Login from "./LoginPage/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./MainPage/HomePage";
function App() {
  return (
    <div className="App">
          <Router>
          <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
