import './App.css';
import { Button } from '@mui/material';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Session from './pages/Session';
import CompanyDashboard from './pages/CompanyDashboard';
import CompanySession from './pages/CompanySession';
import CreateSession from './pages/CreateSession';
import { ProvideAuth, useAuth } from './useAuth';

function App() {
  const { isAuthenticated, login, signup, logout } = useAuth();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/explore">Explore</Link>
              </li>
            )}
            {!isAuthenticated && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
            {isAuthenticated && (
              <li>
                <Button onClick={logout}>Logout</Button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated ? (
            <>
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/session/:id" element={<Session />} />
              <Route path="/company" element={<CompanyDashboard />} />
              <Route path="/company/sessions/:id" element={<CompanySession />} />
              <Route path="/company/sessions/new" element={<CreateSession />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login onLogin={login} />} />
              <Route path="/signup" element={<Signup onSignup={signup} />} />
              <Route path="/" element={<div>Please log in or sign up to access the app.</div>} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default function AppWithAuth() {
  return (
    <ProvideAuth>
      <App />
    </ProvideAuth>
  );
}
