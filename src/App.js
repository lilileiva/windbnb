import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Properties from './components/Properties/Properties';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Properties />
        <Footer />
      </div>
    </div>
  );
}

export default App;
