import React from 'react';
import Navbar from './components/Navbar';
import PointsSummary from './components/PointsSummary';

const App = () => {
  return (
    <div className="bg-[#eaf3ff]"> {/* Light Blue Background */}
      <Navbar />
      <PointsSummary />
    </div>
  );
};

export default App;