import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </div>
  );
}

export default App;