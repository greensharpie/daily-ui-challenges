import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Challenge from './components/Challenge';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:challengeId" element={<Challenge />} />
        <Route path="*" element={<Navigate to="/001" replace />} /> {/* Default to Challenge 001 */}
      </Routes>
    </Router>
  );
}

export default App;
