import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    const hash = Math.random().toString(36).substring(7);
    const hasher = localStorage.getItem('hash');
    if (!hasher) {
      localStorage.setItem('hash', hash);
    }
    return;
  }, []);
  const [respData, setRespData] = useState({});

  let ID = `${respData._id}`;
  let title = `${respData.title}`;


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage respData={respData} setRespData={setRespData} />} />
          <Route
            path='/:id/:eventTitle'
            element={<CounterPage dataID={ID} dataTitle={title} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
