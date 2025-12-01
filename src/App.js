import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import NavScrollExample from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <NavScrollExample/>
     <Header/>
     <Footer/>
    </div>
  );
}

export default App;
