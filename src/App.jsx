import React, { useEffect } from 'react';
import About from './components/About';

function App() {
  useEffect(() => {
    // Load Live2D Widget
    const script = document.createElement('script');
    script.src = 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <About />
    </div>
  );
}

export default App;
