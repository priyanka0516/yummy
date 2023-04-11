import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import About from './components/about';
import Menu from './components/menu';
import Contact from './components/contact';
import Footer from './components/footer';
import Gallery from './components/gallery';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />   
        <Route path="/gallery" element={<Gallery/>} />   
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;
