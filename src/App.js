import Home from './pages/home'
import Chat from './pages/chat';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
            <Route exact path="/chat/:room" element={<Chat />} />
            <Route exact path="/*" element={<Home />} />
          </Routes>
      </Router>
  );
}

export default App;
