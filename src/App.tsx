
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectPage } from './pages/ProjectPage';
import { SparklesCore } from './components/Sparkles';
import { ScrollToTop } from './components/ScrollToTop';
import ClickSpark from './components/ClickSpark';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ClickSpark
        sparkColor='#FFD600'
        sparkSize={12}
        sparkRadius={20}
        sparkCount={8}
        duration={600}
      >
        <main className="main-wrapper bg-[#0C0C0C] min-h-screen relative">
          {/* Global Background Sparkles */}
          <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={40}
              className="w-full h-full"
              particleColor="#FFD600"
            />
          </div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>
      </ClickSpark>
    </BrowserRouter>
  );
}

export default App;
