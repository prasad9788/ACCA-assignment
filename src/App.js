// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import BecomeAcca from './components/BecomeAcca';
import WhyChooseUs from './components/WhyChooseUs';
import WhatWillYouLearn from './components/WhatWillYouLearn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BecomeAcca />
      <WhyChooseUs />
      <WhatWillYouLearn />
      <Footer />
    </div>
  );
}

export default App;
