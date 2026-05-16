/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export type View = 'home' | 'about' | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gym-dark selection:bg-neon selection:text-gym-dark">
      <Navbar setView={setCurrentView} currentView={currentView} />
      <main>
        {renderView()}
      </main>
      <Footer setView={setCurrentView} />
    </div>
  );
}

