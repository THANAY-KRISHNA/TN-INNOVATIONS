import React, { useState, useEffect } from 'react';
import LoadingPage from './components/common/LoadingPage';
import LoginPage from './components/auth/LoginPage';
import EditorialDashboard from './components/layout/EditorialDashboard';

function App() {
  const [appState, setAppState] = useState('loading'); // loading, login, dashboard
  const userEmail = import.meta.env.VITE_CONTACT_EMAIL || "admin@tninnovations.io";

  useEffect(() => {
    // We already handle the loading timeout inside LoadingPage itself
    // Or we could trigger it here. Since LoadingPage calls onComplete, we leave it.
  }, []);

  const handleLoadingComplete = () => {
    // Check if user is logged in via Supabase (mocked here for now)
    // For now, always go to login first
    setAppState('login');
  };

  const handleLogin = () => {
    setAppState('dashboard');
  };

  const handleLogout = () => {
    setAppState('login');
  };

  return (
    <>
      {appState === 'loading' && <LoadingPage onComplete={handleLoadingComplete} />}
      {appState === 'login' && <LoginPage onLogin={handleLogin} />}
      {appState === 'dashboard' && <EditorialDashboard userEmail={userEmail} onLogout={handleLogout} />}
    </>
  );
}

export default App;
