
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FetchConfigPage from './pages/FetchConfigPage';
import UpdateRemarkPage from './pages/UpdateRemarkPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/fetchConfiguration/' element={<FetchConfigPage />} />
        <Route path='/updateRemark/' element={<UpdateRemarkPage />} />
      </Routes>
    </Router>
  )
}

export default App
