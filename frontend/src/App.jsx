import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Sermons from './components/Pages/Sermons';
import BibleStudy from './components/Pages/BibleStudy';
import QA from './components/Pages/QA';
import Footer from './components/Footer/Footer';
import About from './components/Pages/About';
import PodCast from './components/Pages/PodCast';

const Loading = () => (
  <div className="waitt">
    <div className="rotatee">
      <p></p>
    </div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');

    if (location.pathname === '/updator') {
      navbar?.classList.add('remove');
      footer?.classList.add('remove');
    } else {
      navbar?.classList.remove('remove');
      footer?.classList.remove('remove');
    }
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast" element={<PodCast />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/bible-study" element={<BibleStudy />} />
            <Route path="/q&a" element={<QA />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
