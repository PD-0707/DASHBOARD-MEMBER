import React from 'react';
import Navbar from './components/Navbar';
import PointsSummary from './components/PointsSummary';

const App = () => {
  return (
    <div className="bg-[#eaf3ff] min-h-screen"> {/* Ensures full height */}
      <Navbar />
      <PointsSummary />
    </div>
  );
};

export default App;
