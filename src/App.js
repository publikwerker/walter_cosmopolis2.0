import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Outreach from './components/Outreach';
import Performance from './components/Performance';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outreach />
        <Performance />
      </main>
      <Footer />
    </div>
  );
}

export default App;
