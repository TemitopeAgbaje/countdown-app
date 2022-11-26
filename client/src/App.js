import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // use API call to get user inputted time and date.
 
  useEffect(() => {
    const hash = Math.random().toString(36).substring(7);
    const hasher = localStorage.getItem("hash");
    if (!hasher) {
      localStorage.setItem("hash", hash);
    }
    return;
  }, []);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/countdown" element={<CounterPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
