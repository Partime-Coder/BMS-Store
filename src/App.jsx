import React, { useEffect } from 'react'
import { Header, Container, ScrollToTop, Footer } from './components/index.js'
import { Outlet } from 'react-router-dom';
import { getCurrentUser } from './services/userServices/authService.js';
import { useDispatch } from 'react-redux';
import { login } from './features/user/authSlice.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const sessionUser = getCurrentUser();
    if (sessionUser) {
      dispatch(login(sessionUser));
    }
  }, [])
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App